const routes = require('express').Router();
const homeController = require('./controllers/homeController');
const catController = require('./controllers/catContoller');


routes.use(homeController);
routes.use('/cats', catController);
routes.get('*', (req, res)=>{
    res.redirect(404)
})

module.exports=routes;
