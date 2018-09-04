import React, { Component } from 'react';
import './Producto.css';
import { BrowserRouter as Route, Link } from "react-router-dom";

class Producto extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: ''
    }
  }



  render() {
    const url = '/items/' + this.props.id
    return (
      <div className="contenedor-principal">
        <Link to={url}>

          <div className="detalle" >

            <div className="imagen-container">
              <img className="imagen" src={this.props.picture} alt="" />
            </div>

            <div className="texto">
              <p className="precio">$ {this.props.amount.amount}</p>
              <p className="titulo">{this.props.title}</p>
            </div>

            <div className="direccion-container">
              <p className="direccion">{this.props.adress}</p>
            </div>

          </div>

        </Link>
      </div>

    )
  }

}

export default Producto;
