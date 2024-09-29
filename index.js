
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

// SCHEMA
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})

// COLLECTION CREATED
const User=mongoose.model("user",userSchema); //User->model ,user->collection

// INSERT ONE DARA
const user1 = new User({
    name:"Adam",
    email:"adan@gmail.com",
    age:30
});

const user2 = new User({
    name:"Bob",
    email:"bob@gmail.com",
    age:32
});

// user1.save();
user2.save().then((res)=>
{
    console.log(res);
}).catch((err)=>
{
    console.log(err);
})



// INSERT MANY DATA
User.insertMany([
    {name:"Tony",email:"tony@gmail.com", age:44},
    {name:"sham",email:"sham@gmail.com", age:44},
    {name:"uma",email:"uma@gmail.com", age:44},
]).then((res)=>
{
    console.log(res);
})


// TO FIND USERS
User.find({}).then((res)=>
{
    console.log(res)
}
).catch((err)=>
{
    console.log(err);
})

// TO FIND AGE GREATER THAN 47  
User.find({age:{$gt:47}}).then((res)=>
    {
        console.log(res)
    }
    ).catch((err)=>
    {
        console.log(err);
    })
    
// TO FINDONE
User.findOne({}).then((res)=>
{
    console.log(res)
}
).catch((err)=>
{
    console.log(err);
})


 // TO FIND BY ID
User.findById('66f7e08fca8e391e9f917c4e').then((res)=>
    {
        console.log(res)
    }
    ).catch((err)=>
    {
        console.log(err);
    })
    
// TO UPDATE ONE
User.updateOne({age:30},{name:"uju"}).then((res)=>
    {
        console.log(res)
    }
    ).catch((err)=>
    {
        console.log(err);
    })

// TO UPDATE MANY
User.updateMany({age:44},{name:"vinay"}).then((res)=>
    {
        console.log(res)
    }
    ).catch((err)=>
    {
        console.log(err);
    })


// TO FINDANDUPDATE
User.findOneAndUpdate({age:30},{name:"uju"},{new:true}).then((res)=>
    {
        console.log(res)
    }
    ).catch((err)=>
    {
        console.log(err);
    })

//DELETE ONE
User.deleteOne({name:"uju"}).then((res)=>
{
    console.log(res);
}).catch((err)=>
{
    console.log(err);
})

// { acknowledged: true, deletedCount: 1 } for updateOne,updateMany and deleteOne,deleteMany we get this
// DELETE MANY

User.findByIdAndDelete('66f7e08fca8e391e9f917c4f').then((res)=>
    {
        console.log(res);
    }).catch((err)=>
    {
        console.log(err);
    })

// For this we can What acutally deleted
