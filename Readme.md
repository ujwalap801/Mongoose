## Mongoose
A library that created a connection between MongoDB & Node.js Javascript Runtime Envirnoment

# It is an ODM(Object Data Modeling) Library

# Installation 
npm i mongoose


<!-- Starteing -->
const mongoose = require('mongoose');

main()
.then((res)=>
{
    console.log("Connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


# Schema
Schema defines the shape of the documents within the collections



# Models
Model in Mongoose is a class with which we construct documents.

# collections
user =>Users
Employee =>employees



## Note :Mongoose uses Operation Buffering

Mongoose lets you start using your models immediately,withour waiting for mongoose to establish a connection to mongoDB.

## In MongoDB, schema validation allows you to enforce specific rules on the documents within a collection. This can help ensure data integrity and consistency. Basically,Rules for Schema
