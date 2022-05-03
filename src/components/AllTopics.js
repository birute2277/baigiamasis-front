import React from 'react';
import {useEffect, useState} from 'react';
import axios from "axios";
import SingleTopicCard from "./SingleTopicCard";
import {useParams} from "react-router-dom";

const AllTopics = () => {
    const [topics, setTopics] = useState([])
 // const nav = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        getAllTopics()
    }, [])
    const getAllTopics = async () => {
        const res = await axios.get("http://localhost:4000/allTopics", {withCredentials: true})
        // console.log(res.data, "visi topikai")
        if (res.data.message === 'all topics') {
            // console.log('Topics', res.data.allTopics)
            setTopics(res.data.allTopics)
        } else {
            // console.log("Visi topikai, kai vartotojas neprisijunges")
            setTopics(res.data.allTopics)
        }
    }

    return (
        <div className="d-flex column justify-center align-center ">

            <h2 className="title m-50">All Topics</h2>

            <div className="auction-1">
                {topics && topics.map((item, i) =>
                    <div className="d-flex auction" key={i}>
                        <SingleTopicCard item={item}/>

                    </div>)}
            </div>
        </div>
    );
};

export default AllTopics;