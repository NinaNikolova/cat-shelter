const catController = require('express').Router();
const catManager = require('../managers/catManager')

catController.get('/add-cat', (req, res)=>{
let cat={}
    res.render('add-cat', cat)
})
module.exports=catController;