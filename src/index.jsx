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
    <div className="flex justify-center items-center flex-1">
      <div>
        <div className="">{post?.data().content}</div>
      </div>
    </div>
  );
}

export default index;
