const express = require('express')
const ProductSchema = require('../Schemas/ProductSchema')
const productTags = express.Router()
  


//Hämtar all info som json
productTags.route('/').get(async(req, res) => {
    const products = []
    const list = await ProductSchema.find()
    if(list) {
        for(let product of list) {
            products.push({
                articleNumber: product._id,
                name: product.name,
                description: product.description,
                price: product.price,
                category: product.category,
                tag: product.tag,
                imageName: product.imageName,
                rating: product.rating,
            })
        }
        res.status(200).json(products)
    }else   
        res.status(400).json()
})


//Hämtar produkt efter ID
productTags.route('/product/details/:articleNumber').get(async (req, res) => {
    const product = await ProductSchema.findById(req.params.articleNumber)
    if(product) {
        res.status(200).json({
            articleNumber: product._id,
            name: product.name,
            description: product.description,
            price: product.price,
            category: product.category,
            tag: product.tag,
            imageName: product.imageName,
            rating: product.rating,
        })
     
       }else
        res.status(400).json()
})


//Hämtar produkter efter tags
productTags.route('/:tag').get(async (req, res) => {
    const products = []
    const list = await ProductSchema.find({tag: req.params.tag})
    if(list) {
        for(let product of list) {
            products.push({
                articleNumber: product._id,
                name: product.name,
                description: product.description,
                price: product.price,
                category: product.category,
                tag: product.tag,
                imageName: product.imageName,
                rating: product.rating,
            })
        }
        res.status(200).json(products)
    }else
        res.status(400).json()
    
       
})


productTags.route('/:tag/:take').get(async (req, res) => {
    const products = []
    const list = await ProductSchema.find({tag: req.params.tag}).limit(req.params.take)
    if(list) {
        for(let product of list) {
            products.push({
                articleNumber: product._id,
                name: product.name,
                description: product.description,
                price: product.price,
                category: product.category,
                tag: product.tag,
                imageName: product.imageName,
                rating: product.rating,
            })
        }
        res.status(200).json(products)
    }else
        res.status(400).json()
})




//Create product - Post
productTags.route('/').post(async (req, res) => {
    const { name, description, price, category, tag, imageName, rating } = req.body

    if (!name || !price)
        res.status(400).json({msg: 'You must include a name and a price'})

    else {
        const product = await ProductSchema.create({
            name,
            description,
            price,
            category,
            tag,
            imageName,
            rating
        })
        if (product)
            res.status(201).json(product)
        else
            res.status(400).json({ msg: 'oopsie, that did not go as expected'})
    }
})


//Delete product

productTags.route('/:articleNumber').delete(async (req, res) => {
           
    const found = await ProductSchema.findById(req.params.articleNumber)      
    
    if(found) {
        await ProductSchema.remove(found)
        res.status(200).json({ msg: `Product ${req.params.articleNumber} was deleted`, }); 
    } else {
        res.status(400).json({ msg: `No product with the articleNumber of ${req.params.articleNumber} was found`});
    }
      
});


//Update product - PUT
productTags.route('/:articleNumber').put(async (req, res) =>{

    const {name, description, price, category, tag, imageName, rating} = req.body
    const item_exists = await ProductSchema.findOne({name})
   
    if (item_exists)
        res.status(400).json({msg: `a product with that name already exists.`})

    else {
        
        const updProduct = await ProductSchema.findById(req.params.articleNumber)
        
        if(updProduct){
            await ProductSchema.findByIdAndUpdate(updProduct, {$set:item_exists, name, description, price, category, tag, imageName, rating} )
            res.status(201).json({msg: `Product with articlenumber ${req.params.articleNumber} has been updated`})
        }
        
              
    
    else
        res.status(400).json({msg: `something went wrong when updating the product.`})
    }

})




module.exports = productTags