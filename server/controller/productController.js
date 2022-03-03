const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs');
const HTTP_STATUS_CODE_NOT_FOUND = 404;

//const basePathToData = path.join(__dirname, './server');

const getJsonData = function (basePathToData, filename) {
  var filename = path.join(basePathToData, filename);
  return JSON.parse(fs.readFileSync(filename, 'utf-8'));
};

router.get('/', function (request, response) {
  var data = getJsonData("server", 'data.json');
  setTimeout(function() {
    return response.send(data.list_products);
  }, 100);
});


router.get('/filter', function(request, response){

  let products = [
    { name: 'test 2', cat : 'one' },
    { name: 'test 2', cat : 'three' },
    { name: 'test 1', cat : 'two' }
  ];

  let post = {
    avisNumber: 0,
    stringSearch: '',
    arayCategory: [],
  }




  
  if(post.name !=  ''){
    this.products =  products.filter(p => p.name == post.name)
  } 
  
  if(post.cat != ''){
    this.products =  products.filter(p => p.cat == post.cat)
  }
  
  console.log(this.products)
});

router.get('/:id', function (request, response) {
  const productId = request.params.id;
  var data = getJsonData("server", 'data.json');
  setTimeout(function() {
      let isExist = data.list_products.find(product => product.product_id === productId);
      return isExist ? response.send(isExist) : response.status(HTTP_STATUS_CODE_NOT_FOUND).send({datas: "not found"});
  }, 100);
}); 


module.exports = router;