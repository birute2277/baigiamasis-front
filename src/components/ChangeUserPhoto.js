import React from 'react';
import {useRef, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import http from "../plugins/http";


const ChangeUserPhoto = ({userinfo, setUserinfo, message}) => {
    const nav = useNavigate()
    const photoRef = useRef()


    async function changePhoto() {

        const userPh = {
            photo: photoRef.current.value
        }
        // console.log(userPh)

        const res = await http.post(userPh, 'changeUserPhoto')
        // console.log("userio nuotraukos keitimo duomenys is serverio", res.success, res.message)
        if (res.success) {
            const thisName = userinfo.username
            setUserinfo({username: thisName, photo: userPh})
            nav('/')
        }
    }

    return (

        <div className="d-flex justify-center column align-center">
            <h1>Change user photo</h1>
            {/*<img className="userPhoto" src={userinfo.photo} alt=""/>*/}
            <input type="text" ref={photoRef} placeholder="New user photo link 'http' "/>
            <button onClick={changePhoto}>Change Photo</button>
            <h1>{message}</h1>
        </div>
    );
};

export default ChangeUserPhoto;