import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import SingleTopicCard from "../components/SingleTopicCard";


const MyAccountPage = () => {

    const [topics, setTopics] = useState()
    // const nav = useNavigate()
    // const {id} = useParams()
    useEffect(async () => {
        try {
            const res = await axios.get("http://localhost:4000/userTopics", {withCredentials: true})
            // console.log(res)
            setTopics(res.data.posts)
        } catch (e) {
            // console.log(e)
        }

    }, [])


    return (
        <div className="d-flex column justify-center align-center">
            <h1 className="title m-50">My Topics</h1>

            {/*<div className="a-header d-flex ">*/}
            {/*    <h1 className="width">Topic item</h1>*/}
                {/*<div className="d-flex a-header-info wrap align-center just-evenly">*/}
                {/*    <h1>Title</h1>*/}
                {/*    <h1>Last price</h1>*/}
                {/*    <h1>User</h1>*/}
                {/*    <h1>Time left</h1>*/}
                {/*</div>*/}

            {/*</div>*/}
            <div className="auction-1">
                {topics && topics.map((x, i ) =>
                    <div className="d-flex auction" key={i}>
                        <SingleTopicCard item={x} />

                    </div>)}
            </div>

        </div>
    );
};
export default MyAccountPage;