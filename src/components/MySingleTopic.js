import React from 'react';
import { useParams} from "react-router-dom";
import {useEffect, useState} from 'react';
import http from "../plugins/http";

const MySingleTopic = ({userinfo}) => {
    const {id} =useParams()
    console.log('mano', id)

    const [mySingleTopics, setMySingleTopics] = useState([])

    useEffect(() => {
        console.log(id)
        http.get("mySingleTopic/" + id).then(res => {

            console.log(res)

            if (res.success) {
                setMySingleTopics(res.forum)
            }
        })

    }, [])

    return (

        <div className="d-flex column  justify-center align-center ">
            <h1 className="title m-50">My Single Topic</h1>
            <div className="single-auction d-flex wrap space-around">
                <img className="auction-image" src={mySingleTopics.photo} alt=""/>
                <div className="d-flex column justify-center">
                    <h1>User Name: {mySingleTopics.username}</h1>
                    <h1> Money: {userinfo.name}</h1>
                </div>
                <div className="d-flex column justify-center">
                    <h1>{mySingleTopics.title}</h1>
                    <h1>{mySingleTopics.posts.length}</h1>
                    <h1>Time created: {mySingleTopics.time}</h1>
                </div>
            </div>
        </div>
    );
};
export default MySingleTopic;