const mongoose = require('mongoose')
const {catSchema, prodSchema} = require('../models/Product')


//get all products list
exports.getAllProducts = async (req,res)=>{
    const allProduct = await prodSchema.find({})
    res.status(200).json({message: "its working", data: allProduct})
}

//post product
exports.postProduct = async (req,res)=>{
    try{
        console.log(req.body);
        const newProduct = new prodSchema({
            product_name: req.body.productName,
            product_desc: req.body.productDetails,
            prod_cat: req.body.category,
            prod_img: req.file.filename,
            pro_price: req.body.pro
        })
        
       
        const addProduct = await newProduct.save()
        if(addProduct){
            res.status(200).json({message: "Product saved saved"})
        }
        
    }
    catch(err){
        console.log(err);
    }
}

//update product

exports.updateProduct = async (req,res)=>{
    let product = await prodSchema.findById(req.params.id)
    if(!product){
        return res.status(500).json({message: "Product with ID was not found"})
    } 
    if(product){
        const productup = await prodSchema.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidators: true, useFindAndModify: false})
        if(productup){
            res.status(200).json({message: "Updated product", data: productup})
        }
        else{
            console.log("was error");
        }
        
    }
    

}

//delete product

exports.deleteProduct = async (req,res)=>{
    const findProd = await prodSchema.findById(req.params.id);
    if(!findProd) return res.status(500).json({message: "Cant find the product"})
    await findProd.remove()
    res.status(200).json({message: "Product Was removed!!!!"})

}