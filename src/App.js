import React, {useState,useEffect} from "react";
import './App.css';
import Search from "./Components/Search";
import Post from "./Components/Post";

function App() {

  const[posts,setPosts] = useState([]);

  useEffect(() =>{

  fetch('https://jsonplaceholder.typicode.com/posts?_page=$%7Bpage%7D&_limit=20')
  .then(
    res => res.json())
    .then(data =>
    setPosts(data),
  );

  },[]);

  return (
    <div  >
    <Search/>
    <div id="post-div">
    <Post item={posts}/>
    </div>
    
    </div>
  );
}

export default App;
