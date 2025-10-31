const express = require("express");
const app = express();
const path = require("path");
const {v4:uuidv4} = require("uuid");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));

app.use(express.urlencoded({exntended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        id:uuidv4(),
        username:"parshva",
        content:"not define yet"
    },
    {
        id:uuidv4(),
        username:"ab",
        content:"404 error"
    },
    {
        id:uuidv4(),
        username:"bc",
        content:"0 is a number or nothing"
    }
];

const port = 8080;

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
    let {username,content} = req.body;
    let id = uuidv4();
    posts.push({id,username,content});
    // res.render("index.ejs",);
    res.redirect("http://localhost:8080/posts");
});

app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
   // console.log(id);
    let post = posts.find((p)=> id===p.id);
     //console.log(post);
    res.render("show.ejs",{post});
    
    
});

app.patch("/posts/:id",(req,res)=>{
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p)=>id == p.id);
    post.content = newContent;
    res.redirect("/posts");
});

app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=>id == p.id);
    res.render("edit.ejs",{post});
});

app.delete("/posts/:id",(req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=>id !== p.id);
    res.redirect("/posts");
});

app.listen(port,()=>{
    console.log("listen port no. 8080");
});