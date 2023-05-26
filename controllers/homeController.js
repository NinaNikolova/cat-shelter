const homeController = require('express').Router();
const catManager = require('../managers/catManager')

homeController.get('/', (req, res)=>{
const cats = catManager.getAll()
    res.render('home', {cats})
})
module.exports=homeController;