const express = require('express');
const path = require('path');
const app = express();
var bodyParser = require('body-parser');
var cors = require('cors')
app.use(cors());


var productController = require('./controller/productController');
app.use(express.static('./dist/deploy-test'));

app.use('/api/products', productController);

app.get('/*', function(req,res) {
    res.sendFile("index.html", {root: 'dist/deploy-test'});
});

app.listen(process.env.PORT || 3001);

