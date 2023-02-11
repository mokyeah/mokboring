import react from "react";
import { Icon } from "@iconify/react";
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import {signInWithGoogle} from "./firebase";
function user() {
  return (
    <div className="justify-center items-center flex w-full h-screen">
      <div className="w-96 rounded-md text-black h-72 justify-center flex bg-white ">
        <div className="flex-row p-3 ">
          <div className=" flex flex-row">
            <div className="text-m ">
              <div className="font-bold text-2xl gap-3">LOGIN </div>to continue
            </div>
          </div>

          <div className="items-center flex flex-col">
            <div class="input-group">
              <label class="label">Email address</label>
              <input
                autocomplete="off"
                name="Email"
                id="Email"
                class="input"
                type="email"
              ></input>
              <div></div>
            </div>

            <div class="input-group">
              <label class="label">Password</label>
              <input
                autocomplete="off"
                name="Email"
                id="Email"
                class="input"
                type="email"
              ></input>

             
              </div>
            </div>
            <div className="p-3">
              <button><div className="bg-black text-white rounded-md w-32 h-12 justify-center items-center flex" onClick={() => signInWithGoogle()}>Google </div></button>    
          </div>
        </div>
      </div>
    </div>
  );
}
export default user;
