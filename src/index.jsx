import React from "react";
import { Icon } from "@iconify/react";
import { useDocument } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { firestore } from "./firebase";
import { useParams } from "react-router-dom";

function index() {
  const { id } = useParams();
  const [post, loading, error] = useDocument(doc(firestore, "posts", id));
  return (
    <div className="flex justify-center items-center ">
      <div>
        <div className=" border-2 w-full h-24">Ads to let me earn money</div>
        <div className="justify-center flex p-3 text-2xl text-bold">{post?.data().catogory}</div>
        
        
        <div className="p-3 max-w-xl max-h-xl"><img src={post?.data().picture}></img></div>
        <div className="p-3">{post?.data().content}</div>
      </div>
    </div>
  );
}

export default index;
