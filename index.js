// Import express framework
const express = require("express");
// Create an express app
const app = express();
// Import path module to handle file paths
const path = require("path");
// Import uuid library to generate unique IDs
const {v4:uuidv4} = require("uuid");
// Import method-override to support PUT/PATCH/DELETE in forms
const methodOverride = require("method-override");

// Use method-override middleware, look for "_method" query parameter
app.use(methodOverride("_method"));

// Middleware to parse form data (fix: extended should be spelled correctly)
app.use(express.urlencoded({exntended:true}));

// Set EJS as the view engine
app.set("view engine","ejs");
// Set the path for views folder
app.set("views",path.join(__dirname,"views"));
// Serve static files (like CSS) from public folder
app.use(express.static(path.join(__dirname,"public")));

// Temporary data storage (array of post objects)
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

// Define port number
const port = 8080;

// Route to show all posts
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

// Route to show form for creating new post
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

// Route to add new post data
app.post("/posts",(req,res)=>{
    let {username,content} = req.body;
    let id = uuidv4();
    posts.push({id,username,content});
    // After adding, redirect to posts page
    res.redirect("http://localhost:8080/posts");
});

// Route to show single post by ID
app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
   // console.log(id);
    let post = posts.find((p)=> id===p.id);
     //console.log(post);
    res.render("show.ejs",{post});
    
    
});

// Route to update (edit) post content by ID
app.patch("/posts/:id",(req,res)=>{
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p)=>id == p.id);
    post.content = newContent;
    res.redirect("/posts");
});

// Route to show edit form for a specific post
app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=>id == p.id);
    res.render("edit.ejs",{post});
});

// Route to delete a post by ID
app.delete("/posts/:id",(req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=>id !== p.id);
    res.redirect("/posts");
});

// Start server and listen on port 8080
app.listen(port,()=>{
    console.log("listen port no. 8080");
});
