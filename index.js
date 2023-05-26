const express = require('express');
const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig')
const routes = require('./routes');

const app = express();
expressConfig(app);
handlebarsConfig(app);
app.use(routes);

app.listen(5000, () => console.log('This server is running on port 5000...'))