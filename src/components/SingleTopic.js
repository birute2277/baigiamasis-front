import React, {useRef} from 'react';
import {useParams} from "react-router-dom";
import {useEffect, useState} from 'react';
import http from "../plugins/http";
import {useNavigate, Link} from "react-router-dom";
// import ReactPlayer from "react-player/youtube";
import ReactPlayer from "react-player/";
import ReactDOM from "react-dom";
import ReactPaginate from 'react-paginate';

const items = [1, 2, 3, 4, 5, 6, 7]
;
const SingleTopic = ({userinfo}) => {
    const [singleTopic, setSingleTopic] = useState([])
    const [topicName, setTopicName] = useState("")
    const {id} = useParams()
    // const priceRef =useRef()
    //const [singleTopics, setSingleTopics] = useState([])

    // <Pagination
    // count={10}
    // renderItem={(item) => (
    //     <PaginationItem
    //         components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
    //         {...item}
    //     />
    // )}
    // />


    const nav = useNavigate()

    function CreatePost(arg) {
        nav("/createPost/" + arg)
    }

    useEffect(() => {
        getSingleTopic()
    }, [])

    const getSingleTopic = async () => {
        http.get("singleTopic/" + id).then(res => {
            console.log(res)
            if (res.success) {
                setSingleTopic(res.singleTopic.posts)
                setTopicName(res.singleTopic.title)
                // setUserinfo(res.singleTopic.posts)
            }
        })
    }
    console.log(singleTopic, "single")

    return (
        <div>
            <div className="d-flex  align-center justify-center space-btw">

                <h1 className="d-flex title m-50">All posts on topic:    {topicName}</h1>
                <div className="d-flex">
                    {userinfo.username &&
                    <button className="b-create-post" onClick={() => CreatePost(id)}>Create post</button>}
                </div>
            </div>

            <div className="d-flex column align-center justify-center">
                {singleTopic.map((x, i) =>
                    <div className="d-flex post-box space-around" key={i}>

                        <div className=" d-flex post-image-box">
                            {x.photo &&
                            <img className="post-image" src={x.photo} alt=""/>
                            }
                            {x.youtubeUrl &&
                            <div className="player-wrapper">
                                <a href={x.youtubeUrl}>{x.youtubeUrl}</a>
                                <ReactPlayer className="react-player" url={x.youtubeUrl} width='370px' height='210px'
                                             controls={true}/>
                            </div>
                            }
                        </div>


                        <div className="d-flex">
                            <h3 className="post-text"> {x.text}</h3>
                        </div>
                        <div className="d-flex align-center column m-20">
                            <img className="userPhoto" src={x.userPhoto} alt=""/>
                            <h2 style={{textDecoration: "underline"}}>Post author: {x.name}</h2>
                            {(new Date(x.time)).toLocaleString('lt-Lt')}
                        </div>


                    </div>
                )}
            </div>

        </div>
    );
};
export default SingleTopic;