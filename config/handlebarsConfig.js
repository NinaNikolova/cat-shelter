const handlebars = require('express-handlebars');

function handlebarsConfig(app) {
    // register an engine
    app.engine('hbs', handlebars.engine({
        extname:'hbs'
    }))
   // set engine
app.set('view engine', 'hbs')
// set view directory becouse by default it is in nmain directory
// app.set('views', '/views')
   
}
module.exports=handlebarsConfig;