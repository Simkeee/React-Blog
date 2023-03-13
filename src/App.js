import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import db from './db';

function App() {
  return (
    <div className = 'container-fluid'>
<ul className="nav">
  <li className="nav-item">
    <b>My React Blog</b>
  </li>
</ul>
<div className='row' id = 'posts'></div>
<div className = 'row'>
  <div className = 'col-8 offset-2'>
    <form>
    <input type="text" className = "form-control" placeholder = 'Name' id = "name"></input>
    <input type="text" className = "form-control" placeholder = 'Blog' id = "newBlog"></input>
    <button className='form-control btn btn-info' id= "button" onClick={save}>Save</button>
    </form>
  </div>
</div>
</div>
  );
}


let newName = document.getElementById('name');
let newBlog = document.getElementById('newBlog');
let posts = document.querySelector("#posts");

function createBlog() {
  let htmlBlogs='';
  for (let i = 0; i < db.length; i++) {
    const element = db[i];
    htmlBlogs +=`<div id= 'blogs'>
    <div id="elementN">${element.name}:</div><br>
    <div id="elementB">${element.blog}</div>
    </div>`
  }
posts.innerHTML = htmlBlogs;
}
createBlog() 

const save = function saveBlog(e) {
e.preventDefault();
  const newEnter = {
    name:newName.value,
    blog:newBlog.value
  }
  db.push(newEnter)
  createBlog() 
  console.log(db);
}
export default App;
