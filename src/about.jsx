import React from "react";
import { Icon } from "@iconify/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { firestore } from "./firebase";
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";

function about() {
  const [posts, loading, error] = useCollection(collection(firestore, "posts"));

  return (
    <div className=" flex  gap-8 p-3 text-3xl">
      <div className="h-fit w-fit flex gap-8">
          {posts?.docs.map((post) => (
            <div className="border-4 border-white p-3 relative">
              <div className="justify-center items-center flex  underline-offset-3">
                {post.data().catogory}
              </div>
              <div className="flex text-2xl">{post.data().content}</div>
              <div className={`${post.data().picture ? 'w-64 h-64 ':''}`}>  
                <img src={post.data().picture}></img>
              </div>
              <div className="p-3 ">  
              <Link to={`/index/${post.id}`}><button className="p-2 rounded-md ">read more</button></Link></div>
             
            </div>
            
          ))}
      </div>
    </div>
  );
}

export default about;
