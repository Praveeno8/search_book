   var express = require('express'); 
    var app = express(); 
    var Request = require('request');
    var books = require('google-books-search');

    app.use(express.static('../client')); 

    var options = {
    key: "AIzaSyAlosWVf7bZ4wmHj8gmbDlU67QVnp0rUKU",
    field: 'title',
    offset: 0,
    limit: 10,
    type: 'books',
    order: 'relevance',
    lang: 'en'
};
app.get('/showbooks',function(req,res){
    //console.log("request value is",req);
    books.search("Mathematics", options, function(error, results, apiResponse) {
        if ( ! error ) {
            res.json(results);
        } else {
            console.log(error);
        }
    });
});
app.get('/showbooks/:searchItem',function(req,res){
    var search_itom = req.params.searchItem;
    console.log("search itom value is",search_itom);
    books.search(search_itom, options, function(error, results, apiResponse) {
        if ( ! error ) {
            res.json(results);
        } else {
            console.log(error);
        }
    });
});
    app.listen('3000', function(){
        console.log('running on 3000...');
    });