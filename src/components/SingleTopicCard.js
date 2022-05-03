import React from 'react';
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const SingleTopicCard = ({item}) => {

    const nav = useNavigate()
    const {id} = useParams()

    const gotoSingle = (id) => {
        // console.log("click", id)
        nav('/singleTopic/' + id)
    }

    return (
        <div className="topic">
            <div className="">
                <div className="title-box d-flex space-btw">
                    <div className="underline">
                        <h2 onClick={() => gotoSingle(item._id)}>{item.title}</h2>
                    </div>
                    <h2>Total posts on topic: {item.posts.length}</h2>
                </div>

            </div>
            <div>

                <div>
                    <div className="user-boxT d-flex justify-center align-center">
                        {/*<div className="photoHoverH d-flex justify-center align-center">*/}
                        {/*    <img className="userPhoto" src={item.photo} alt=""/>*/}
                        {/*</div>*/}
                        <h2>Topic author:  {item.username}</h2>
                    </div>

                    {(new Date( item.time)).toLocaleString('lt-Lt')}
                </div>
            </div>
        </div>
    );
};
export default SingleTopicCard;
