import React, {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
// import axios from "axios";
import {useParams} from "react-router-dom";
import http from "../plugins/http";

const CreatePost = ({userinfo, socket}) => {

    const nav = useNavigate()
    const {id} = useParams()
    const [message, setMessage] = useState("")

    const inputs ={
        text: useRef(),
        photo: useRef(),
        youtubeUrl: useRef()
    }
    // const photoRef = useRef()
    // const titleRef = useRef()
    // const currentPriceRef = useRef()
    // const timeCreatedRef = useRef()



    async function update() {
        const regExp= /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/;
        let url1=""
        let text1=""
        if(regExp.exec(inputs.text.current.value) === null){
            url1=""
            text1 = inputs.text.current.value
            // console.log("not youtube", url1)
        }else {
            url1 = regExp.exec(inputs.text.current.value)[0]
            text1 = inputs.text.current.value.replace(url1,"")
            // console.log(url1)
        }
        const post={
            //text: inputs.text.current.value,
            text: text1,
            photo: inputs.photo.current.value,
            youtubeUrl: inputs.youtubeUrl.current.value,
            //youtubeUrl: url1
        }
        // console.log(post)
        const res = await http.post(post,'createPost/'+id)
        // console.log("result from http", res, res.message)

        setMessage(res.message)
        inputs.text.current.value=''
        inputs.photo.current.value=""
        inputs.youtubeUrl.current.value=""
        if(res.success){
            // console.log("socket must be there")
            socket.emit("newPost", userinfo.username+" has written new post in this topic "+ '"'+res.oneTopic.title+'" ')
            nav('/singleTopic'+ id)
            setMessage(res.data.message)
        }

    }





    //     const user = {
    //         photo: inputs.photo.current.value,
    //         // title: titleRef.current.value,
    //         text: inputs.text.current.value,
    //        youtubeUrl: inputs.youtubeUrl.current.value   //cia tvarkyti
    //
    //     }
    //     try {
    //         const res = await axios.post("http://localhost:4000/createPost/"+id, user, {withCredentials: true})
    //         console.log(res.data)
    //
    //         setMessage(res.message)
    //         inputs.text.current.value=''
    //         inputs.photo.current.value=""
    //
    //         if(res.data.success){
    //             nav('/singleTopic/'+ id)
    //             socket.emit("newPost", userinfo.username+"Has written new post in this topic"+""+res.oneTopic.title )
    //         } else {
    //            setMessage(res.data.message)
    //         }
    //     } catch(e) {
    //         console.log(e)
    //     }
    // }

    return (
        <div className="d-flex column align-center">
            <h1 className="title">Create Post</h1>
            <textarea  cols="30" rows="10" placeholder="Type your post" ref={inputs.text}/>
            <input type="text" size="60" ref={inputs.photo} placeholder="Photo Link "/>
            <input className="m-20" type="text" size="60" ref={inputs.youtubeUrl} placeholder="Youtube Url"/>
            <button onClick={update}>Create Post</button>
            <h3>{message}</h3>
        </div>
    );
};

export default CreatePost;