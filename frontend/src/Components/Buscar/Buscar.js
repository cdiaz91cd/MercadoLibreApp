import React, { Component } from 'react';//deberia recuperar el input de la caja de busqueda y enviarla a resultado
import "./Buscar.css";
import { BrowserRouter as Route, Link } from "react-router-dom";

class Buscar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			textoInput: '',
			array: []
		}
	}

	handleValue(e) {
		const valor = e.target.value;
		this.setState({
			textoInput: valor
		})
	}

	handleClick(e) {
		const inputValor = this.state.textoInput;
		const arrayNuevo = this.state.array;

		arrayNuevo.push(inputValor)

		this.setState({
			array: arrayNuevo,
			textoInput: ''
		})
	}

	render() {
		const urlDir = '/items?search=' + this.state.textoInput;
		return (
			<div className="main-nav">
				<div className="nav-container">
					<div className="logo-container">
						<img className="loguito" src="http://clipart.coolclips.com/480/vectors/tf05152/CoolClips_vc006051.png" />
					</div>
					<div className="search-container">
						<input onChange={this.handleValue.bind(this)} type="text" value={this.state.textoInput} placeholder="¿Qué estás buscando?" />
						<Link to={urlDir}>
							<button className="boton" onClick={this.handleClick.bind(this)}>Buscar</button>
						</Link>
					</div>

				</div>

			</div>
		)
	}
}


export default Buscar;

