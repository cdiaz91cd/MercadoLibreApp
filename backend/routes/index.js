module.exports = router;
var express = require('express');
var router = express.Router();
const homeController = require('../Controllers/homeController')

router.get('/api/items', homeController.busqueda)
router.get('/api/items/:id', homeController.product)





module.exports = router;
