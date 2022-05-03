import './App.css'
import React from "react"
import {useState, useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import http from "./plugins/http";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

import Toolbar from "./components/Toolbar";
import CreateTopic from "./pages/CreateTopic";
import CreatePost from "./pages/CreatePost";
import AllTopicsPage from "./pages/AllTopicsPage";
import MyAccountPage from "./pages/MyAccountPage";
import SingleTopic from "./components/SingleTopic";
import Rules from "./components/Rules";
import Footer from "./components/Footer";
import Search from "./components/Search";
import ChangeUserPhoto from "./components/ChangeUserPhoto";
import io from "socket.io-client";
const socket = io.connect("http://location:4000")

function App() {
  const [toolbar, setToolbar] = useState(false)
  const [userinfo, setUserinfo] = useState({username:"", photo:""})
  const[infoFromServer, setInfoFromServer]= useState("")
  const [message, setMessage] = useState("")
  const [allUsers, setAllUsers] =useState([])



  useEffect(() => {
    socket.on('infoToAll', message => {
      // console.log(message);
      setInfoFromServer(message+' (close)');
    });
    return () => socket.off('infoToAll');
  }, [socket, message]);
  return (
      <div>
        <BrowserRouter>
          <Toolbar toolbar={toolbar} setToolbar={setToolbar} userinfo={userinfo}  setUserinfo={setUserinfo} />

          <div onClick={()=>setInfoFromServer("")} className="sock-message pointer">
            <i>{infoFromServer}</i>
          </div>
          <Routes>
            <Route path="/" element={<AllTopicsPage setUserinfo={setUserinfo} />}/>
            <Route path="/register" element={<RegisterPage setUserinfo={setUserinfo}/>}/>
            <Route path="/login" element={<LoginPage setUserinfo={setUserinfo} setToolbar={setToolbar} toolbar={toolbar}/>}/>
            <Route path="/createTopic" element={<CreateTopic socket={socket}/>}/>
            <Route path="/createPost/:id" element={<CreatePost socket={socket}/>}/>

            <Route path="/singleTopic/:id" element={<SingleTopic userinfo={userinfo} socket={socket}/>}/>
            <Route path="/myAccount" element={<MyAccountPage/>}/>
            <Route path="/rules" element={<Rules/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/changeUserPhoto" element={<ChangeUserPhoto userinfo={userinfo} setUserinfo={setUserinfo} message={message}/>}/>
            {/*<Route path="/allPosts" element={<allPosts/>}/>*/}

          </Routes>
          <Footer/>
        </BrowserRouter>
        {/*{forumNotification && <forumNotification notifications={notifications} setForumNotification={setForumNotification}/>}*/}

      </div>
  );
}
export default App;