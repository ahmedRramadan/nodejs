import express, { Router } from 'express';
import Product from '../models/articleSchema.js';
const router = Router()



//post product to database
router.post('/all-products',async (req,res)=>{
    try{
        const {tittle,description,price} = req.body;
        let newProduct = await new Product({tittle:tittle,description:description,price:price}).save();
        console.log('success operation')
        return res.status(201).json({
            statue : `product ${tittle} has been added`
        })
    }
    catch(err){
        console.log(err)
    }
})

//get all products
router.get('/all-products',async(req,res)=>{
    try{
        const AllProducts = await Product.find();
        res.json(AllProducts);
    }
    catch(err){
        console.log(err)
    }
})

//get specific product using id
router.get('/all-products/:id',async(req,res)=>{
    try{
        const enteredID = req.params.id;
        //var regexp = new RegExp("^"+ enteredID);
        const specificProduct = await Product.findOne({_id:enteredID});;
        res.json(specificProduct)
    }
    catch(err){
        console.log(err)
    }
})


//remove specific product
router.delete('/all-products/:id',async(req,res)=>{
    try{
        const deletedUser = await Product.remove({_id: req.params.id});
    }
catch(err){
    console.log(err)
}
}
)

//remove all products
router.delete('/all-products',async(req,res)=>{
    try{
        await Product.deleteMany({});
    }
    catch(err){
        console.log(err)
    }
})

export default router;