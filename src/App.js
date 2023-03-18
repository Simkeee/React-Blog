import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import db from './db';

function App() {
const [blogs, setBlogs] = useState(db);

  function createBlog() {
    return blogs.map((blog, index) => (
      <div className="blogs" key={index}>
        <div className="elementN">{blog.name}:</div>
        <br />
        <div className="elementB">{blog.blog}</div>
      </div>
    ));
  }
  
  const saveBlog = function(e) {
    e.preventDefault();
    let newName = document.getElementById('name');
    let newBlog = document.getElementById('newBlog');
    const newEnter = {
      name: newName.value,
      blog: newBlog.value
    };
    setBlogs([...blogs, newEnter]);
    newName.value = '';
    newBlog.value = '';
  }

  return (
    <div className='container-fluid'>
      <ul className="nav">
        <li className="nav-item">
          <b>My React Blog</b>
        </li>
      </ul>
      <div className='row' id='posts'>{createBlog()}</div>
      <div className='row'>
        <div className='col-8 offset-2'>
          <form>
            <input type="text" className="form-control" placeholder='Name' id="name"></input>
            <input type="text" className="form-control" placeholder='Blog' id="newBlog"></input>
            <button className='form-control btn btn-info' id="button" onClick={saveBlog}>Save</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;