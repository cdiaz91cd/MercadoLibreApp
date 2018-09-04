import React, { Component } from 'react'; //deberia mostrar los resultados osea los 4 productos de la api
import Buscar from '../Buscar/Buscar';
import Producto from '../Producto/Producto';
import './Resultado.css';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const queryString = require('query-string');

class Resultado extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arrayProductos: [],
      idSearch: ''
    }
  }

  componentDidMount() {
    const qs = queryString.parse(this.props.location.search)
    fetch('http://localhost:3001/api/items?search=' + qs.search).then((result) => {
      return result.json()
    }).then((resultado) => {
      this.setState({
        arrayProductos: resultado,
        idSearch: qs.search
      })
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const qs = queryString.parse(this.props.location.search)
    const newQs = qs.search;

    if (newQs != prevState.idSearch) {


      fetch('http://localhost:3001/api/items?search=' + qs.search).then((result) => {
        return result.json()
      }).then((resultado) => {
        this.setState({
          arrayProductos: resultado,
          idSearch: qs.search
        })
      })
    }
  }


  render() {
    return (
      <div>
        <Buscar />
        {this.state.arrayProductos && this.state.arrayProductos.items &&
          <React.Fragment>
            <Breadcrumb categories={this.state.arrayProductos.categories} />

            {this.state.arrayProductos.items.map((products, i) => {

              const url = "/items/" + products.id
              return (
                <Link to={url}>
                  <Producto
                    id={products.id}
                    title={products.title}
                    amount={products.price}
                    thumbnail={products.thumbnail}
                    picture={products.picture}
                    adress={products.adress}
                  />
                </Link>
              )
            }
            )}
          </React.Fragment>
        }
      </div>
    )
  }
}

export default Resultado;
