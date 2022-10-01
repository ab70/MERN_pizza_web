const express= require('express')
const { getAllProducts, postProduct, updateProduct, deleteProduct } = require('../app/controllers/productControllers')
const router = express.Router()

router.route('/products').get(getAllProducts)
router.route('/products').post(postProduct)
router.route('/products/:id').put(updateProduct).delete(deleteProduct)





module.exports = router