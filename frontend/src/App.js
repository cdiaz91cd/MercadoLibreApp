import React, { Component } from 'react';
import './App.css';
import Buscar from './Components/Buscar/Buscar';
import Detalle from './Components/Detalle/Detalle';
import Resultado from './Components/Resultado/Resultado';
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <React.Fragment>
            <Route exact path="/" component={Buscar} />
            <Route path="/items/:id" component={Detalle} />
            <Route exact path="/items" component={Resultado} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;






