import React from "react";
import { Icon } from "@iconify/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { firestore } from "./firebase";
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";

function about() {
  const [posts, loading, error] = useCollection(collection(firestore, "posts"));

  return (
    <div className=" flex gap-8 p-3 text-3xl">
      <div className="box-border h-fit w-fit p-4  border-white flex gap-8">

          {posts?.docs.map((post) => (
            <div className="border-4 flex flex-col">
              <div className="justify-center items-center flex underline underline-offset-3 ">
                {post.data().catogory}
              </div>
              <div className="flex">{post.data().content}</div>
              <div className="w-64 h-64 ">
                <img src={post.data().picture}></img>
              </div>
              <div className="p-3 underline">
              <Link to={`/index/${post.id}`}><button className="p-3 rounded-md button">read more</button></Link></div>
            </div>
          ))}
        
      </div>
    </div>
  );
}

export default about;
