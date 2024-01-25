const express = require('express');
const app = express();
const port = 5000;

require('./DB/config');
const User = require('./DB/Users');
const Product = require('./DB/Produst');


const cors = require('cors');
// to fix cors issue caused becuase of backend and frontent running on different port
// npm i cors
app.use(cors());


//jwt
const jwt = require('jsonwebtoken');
const jwtKey = 'e-comm'; 


app.use(express.json());




app.post('/register', async (req, res) => {
  let data = new User(req.body);
  let result = await data.save();
  //converting the json data to object
  result = result.toObject();
  delete result.password
  jwt.sign({result},jwtKey,{expiresIn:"2h"},(err,token)=>{
    if(err){
      res.send({result:'something went wrong'})
    }
    res.send({result, auth: token})
  })
 
});


app.post('/login', async(req,res)=>{
  if(req.body.password && req.body.email){
    let user = await User.findOne(req.body).select('-password');
    if(user){
      jwt.sign({user},jwtKey,{expiresIn:"2h"},(err,token)=>{
        if(err){
          res.send({result:'something went wrong'})
        }
        res.send({user, auth: token})
      })
     
    }else{
      res.send({result:'not found'})
    }
  }else{
    res.send({result:'invalid'})
  }
})


app.post('/add-product',verifyToken, async(req,res)=>{
  let data = new Product(req.body);
  let result = await data.save();
  if(result){
    res.send({result : 'successful'})
  }else{
    res.send({result : 'failed'})
  }
})


app.get('/show-products',verifyToken, async(req,res)=>{
  let products = await Product.find()
  if(products.length > 0){
    res.send(products)
  }else{
    res.send({result : 'no data'})
  }
})

app.delete('/product/:id',verifyToken, async(req,res)=>{
  let deleteItem = await Product.deleteOne({_id: req.params.id});
  res.send(deleteItem);
})



app.get('/findproduct/:id',verifyToken, async(req,res)=>{
  let result = await Product.findOne({_id:req.params.id});
  if(result){
    res.send(result)
  }else{
    res.send({result : 'no data found'})
  }
})


app.put('/updateproduct/:id',verifyToken, async(req,res)=>{
  let result = await Product.updateOne({_id: req.params.id}, {$set : req.body})
  res.send(result)
})






function verifyToken(req,res,next){
  let token = req.headers['authorization'];
  if(token){
    token = token.split(' ')[1];
    jwt.verify(token, jwtKey, (err,valid)=>{
      if(err){
        res.status(401).send({result:'please provide valid token'})
      } else{
        next();
      }
    })
  } else {
    res.status(403).send({result:'please provide token'})
  }
}




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});