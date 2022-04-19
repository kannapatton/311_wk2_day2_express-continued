const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// const contacts = require("./data/contacts");
// const vehicles = require("./data/vehicles");
// const comments = require("./data/comments");
// const products = require ("./data/products");


  // tell our Express server to serve the files in the public folder
app.use(express.static('public'));
app.use(bodyParser.json());
//  // get all contacts
//  app.get("/contacts", function(req, res){
//   let input = res.json(contacts);
// });
// //get one contact
// // app.get("/contacts/:id", function(req, res) {
// //   let comment = contacts.find((comment) => comment
// //   _id == req.params.id);
// //   res.json(comment);};
// //get all vehicles
// app.get('/vehicles', function(req, res){
//   let input = res.json(vehicles);
// });
// //get one vehicle
// //get all comments
// app.get('/comments', function(req, res){
//   let input = res.json(comments);
// });

// //get all products
// app.get('/products', function(req, res){
//   let input = res.json(products);
// });
// routers
app.use('/contacts', require('./routes/contacts'));
app.use('/vehicles', require('./routes/vehicles'));
app.use('/comments', require('./routes/comments'));
app.use('/products', require('./routes/products'));



const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
