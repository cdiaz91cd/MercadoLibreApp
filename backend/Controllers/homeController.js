let self = {};
let Services = require('../Services/Services');


self.busqueda = function (req, res) {
	const id = req.query.search;
	const buscar = Services.busquedaAgregar(id).then(function (buscar) {

		let author = {
			name: 'Chiara',
			lastname: 'Diaz',
		};

		let categories = [];

		let maxObj = {
			name: '',
			results: 0
		}


		let items = []

		for (var i = 0; i < buscar.results.length; i++) {
			const obj = {
				id: buscar.results[i].id,
				title: buscar.results[i].title,
				price: {
					currency: buscar.results[i].currency_id,
					amount: buscar.results[i].price,
					//decimals: buscar.results[i].installments.amount.splice(1,0)
				},
				picture: buscar.results[i].thumbnail,
				condition: buscar.results[i].condition,
				adress: buscar.results[i].seller_address.city.name,
				free_shipping: buscar.results[i].shipping.free_shipping
			}
			items.push(obj)

		}

		const categoriaArrAvailable = buscar.available_filters[0]
		const categoriaArr = buscar.filters[0].values[0].path_from_root
		if (categoriaArr.length > 0) {
			for (var z = 0; z < categoriaArr.length; z++) {
				categories.push(categoriaArr[z])
			}
		} else {
			if (categoriaArr < 0) {
				for (var i = 0; i < categoriaArrAvailable.length; i++) {
					maxObj = {
						name: categoriaArrAvailable[i].name,
						results: categoriaArrAvailable[i].results
					}
					categories.push(categoriaArrAvailable[i])
				}
			}
		}


		const resultado = {
			author: author,
			categories: categories,
			items: items
		}

		return res.json(resultado)
	}).catch(function (err) {
		console.log(err)
	})
}



self.product = function (req, res) {
	const id = req.params.id;
	Services.detalleProducto(id).then(function (productoDetalle) {
		Services.informacion(id).then(function (busqueda) {
			productoDetalle.busqueda = busqueda

			let author = {
				name: 'Chiara',
				lastname: 'Diaz',
			};


			const items = {
				id: busqueda.id,
				title: busqueda.title,
				price: {
					currency: busqueda.currency_id,
					amount: busqueda.price,
					//decimals: buscar.result.installments.amount.splice(1,0)
				},
				picture: busqueda.thumbnail,
				condition: busqueda.condition,
				free_shipping: busqueda.shipping.free_shipping,
				sold_quantity: busqueda.sold_quantity,
				adress: busqueda.seller_address.city.name,
				description: productoDetalle.plain_text
			}



			const result = {
				author: author,
				items: items,
			}



			return res.json(result)
		}).catch(function (err) {
			console.log(err)
		})

	})
}




module.exports = self

