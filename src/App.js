import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import db from './db';


function App() {

  var htmlBlogs=''
  function createBlog() {
    //let posts = document.getElementById('posts');
    //console.log(db);
    //console.log(db.length);
    for (let i = 0; i < db.length; i++) {
      const element = db[i];
      htmlBlogs +=`<div class = "blogs">
      <div class="elementN">${element.name}:</div>
      <br><div class="elementB">${element.blog}</div>
      </div>`
    }
    //console.log(htmlBlogs); OVDE SVE RADI KAKO TREBA KAD KLIKNEM NA -"SAVE"
    return htmlBlogs;
  }
  createBlog()

  console.log(db);
  //console.log(htmlBlogs); OVDE TEK PRORADI KAD KLIKNEM U VS CTRL+S, isto vazi i za db- ZATO NE MOZE DA PRIKAZE PODATKE U HTML
  
  const save = function saveBlog(e) {
    e.preventDefault();
    let newName = document.getElementById('name');
    let newBlog = document.getElementById('newBlog');
    const newEnter = {
      name:newName.value,
      blog:newBlog.value
    }
    db.push(newEnter)
    createBlog()
  }

return (
<div className = 'container-fluid'>
<ul className="nav">
  <li className="nav-item">
    <b>My React Blog</b>
  </li>
</ul>
<div className='row' id = 'posts' dangerouslySetInnerHTML={{ __html: htmlBlogs }}></div>
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

export default App;
