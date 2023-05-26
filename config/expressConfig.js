const express = require('express');
function expressConfig(app) {
    app.use(express.static('static'))
    app.use(express.urlencoded({extended:false}))
}
module.exports=expressConfig;