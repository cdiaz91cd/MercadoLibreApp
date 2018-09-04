let self = {}
var rest = require('restler');


//usar restler
self.busquedaAgregar = function (id) {
  const apiData = new Promise(function (resolve, reject) {
    rest.get('https://api.mercadolibre.com/sites/MLA/search?q=' + id + '&limit=4').on('complete', function (result) {
      resolve(result)
    }).on('fail', function (err) {
      reject(err)
    })
  })

  return apiData
};


self.detalleProducto = function (id) {
  const detalle = new Promise(function (resolve, reject) {
    rest.get('https://api.mercadolibre.com/items/' + id + '/description').on('complete', function (result) {
      resolve(result)
    }).on('fail', function (err) {
      reject(err)
    })
  })
  return detalle
}


self.informacion = function (id) {
  const info = new Promise(function (resolve, reject) {
    rest.get('https://api.mercadolibre.com/items/' + id).on('complete', function (result) {
      resolve(result)
    }).on('fail', function (err) {
      reject(err)
    })
  })

  return info
};

module.exports = self
