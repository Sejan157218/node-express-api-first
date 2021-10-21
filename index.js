const express = require('express')
const app = express()
const port = 9000;


app.get('/',(req,res)=>{
    res.send("Hello From My first ever node 1" )
});

const users=[
    {id:0,name:"sejan",email:"sejan@gmail.com",phone:01777777777},
    {id:1,name:"sejan1",email:"sejan1@gmail.com",phone:01777777777},
    {id:2,name:"sejan2",email:"sejan2@gmail.com",phone:01777777777},
    {id:3,name:"sejan3",email:"sejan3@gmail.com",phone:01777777777},
    {id:4,name:"sejan4",email:"sejan4@gmail.com",phone:01777777777},
    {id:5,name:"sejan5",email:"sejan5@gmail.com",phone:01777777777},
    {id:5,name:"sejan6",email:"sejan6@gmail.com",phone:01777777777},
    {id:6,name:"sejan7",email:"sejan7@gmail.com",phone:01777777777},
]
app.get('/users',(req,res)=>{
    const searchValue = req.query.search;
    if(searchValue){
        const userSearchResult = users.filter(user=>user.name.toLocaleLowerCase().includes(searchValue));
        res.send(userSearchResult)
    }
    else{
        res.send(users)
    }
    
})

app.get('/users/:id',(req,res)=>{
    const id=req.params.id;
    const user = users[id]
    res.send(user)
})

app.listen(port, () => {
    console.log("listening to port",port )
  })