import React, {useState} from "react";
import './Post.css';

function Post(props) {

    
 const [count,setcount] = useState(0)
 

 function clickHandler(){

    setcount(count+1)
 }


  return (
    <div >
      {
      /*  props.item.map(
            views =>(
                <div User={views.id}

                />
            )
        )*/
        <div>
      {props.item.map(doc => (
    
        <div className="postDiv">
        <img id="image" src="https://picsum.photos/200?random=${post.id}" />
        <p>'user'={doc.id}</p>
        <p>{doc.title}</p>
        <p> 'likes'</p> 
        <p>{count}</p>
        <button onClick={clickHandler}>like post</button>
        </div>
    
      ))}
     </div>
      }
      <button id="btn"> load more posts</button>
    </div>
  );
}

export default Post;