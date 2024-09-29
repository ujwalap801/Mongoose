const mongoose = require('mongoose');

main()
.then((res)=>
{
    console.log("Connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}


const bookSchema = new  mongoose.Schema({
  title:
  {
    type:String,
    required:true
  },
  author:
  {
    type:String,
  },
  price:
  {
    type:Number,
    min:[1,"price is too low"]
  },
  discount:{
    type:Number,
    default:8
  },
  category:{
  type:String,
  enum:["fiction","non-fiction"]
  },
  genre:[String]
})

const Book = mongoose.model("book",bookSchema);

// const Book1 = new Book({
//    title:"New",
//    author:"uju",
//    price:122
// });

// const Book2 = new Book({
//    title:"New Book",
//    author:"ujwala",
//    price:155
// });

// const Book3= new Book({
//    title:"Random Book ",
//    author:"Vinay",
//    price:55,
//    category:"fiction"
// });


// const Book5 = new Book({
//    title:"Random  ",
//    author:"Vinay  Raj",
//    price:550,
//    category:"fiction",
//    genre:["comics","songs"]

// });

//  Book5.save().then((res)=>
// {
//     console.log(res);
// }).catch ((err)=> {
//     console.error(err);
//   }
// )



Book.findByIdAndUpdate('66f896723e6df79398ea853f',{price:-100},{runValidators:true}).then((res)=>
{
console.log(res)}).catch((err)=>
{
console.log(err.errors.price.properties.message)
})
// if we set valindaors true we can't update it