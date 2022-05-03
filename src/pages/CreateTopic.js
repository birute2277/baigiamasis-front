import React, {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

const CreateTopic = ({socket}) => {

    const titleRef = useRef()
    const [message, setMessage] = useState("")

    const nav = useNavigate()

    async function update() {

        const user = {
            title: titleRef.current.value,
        }
        try {
            const res = await axios.post("http://localhost:4000/createTopic", user, {withCredentials: true})
            console.log("nauja tema", res.data)
            if(res.success){
                console.log("socket must be there", res.newTopic.username)
                socket.emit("newTopic", res.newTopic.username+"Created new topic"+res.newTopic.title+"")
                nav('/')
            } else {
                setMessage(res.data.message)
            }
        } catch (e) {
            console.log(e)
        }
    }
    return (
            <div className="d-flex column align-center m-50">
                <h1 className="title m-50 ">Create Topic</h1>
                <input type="text" size="60" ref={titleRef} placeholder="Title"/>
                <button onClick={update}>Create Topic</button>
                <h3>{message}</h3>
            </div>
    );
};

export default CreateTopic;


