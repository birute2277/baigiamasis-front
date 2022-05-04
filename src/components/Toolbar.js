import React from 'react';
import {Link} from "react-router-dom";
import { FaSearch, FaEye} from "react-icons/fa";
import http from "../plugins/http";
import {useNavigate} from "react-router-dom";
// import ReactDom from 'react-dom';
// import Popup from 'reactjs-popup';

const Toolbar = ({toolbar, setToolbar, userinfo, setUserinfo}) => {
    console.log(userinfo)
    const nav= useNavigate()
     const logout = async() => {
        const res = await http.get("logout")
         setToolbar(false)
         setUserinfo({username:"", photo:""})
         nav('/')
    }
    return (
        <div className="d-flex toolbar  align-center space-btw">
            {!toolbar && <>
                <div className="m-r-120">
                     <FaSearch size="35px"
                    onMouseOver={({target})=>target.style.color="rgba(64, 162, 148, 0.61)"}
                    onMouseOut={({target})=>target.style.color="black"}
                    />
                </div>

                <Link className="logo" to="/">
                    <div className="d-flex align-center  justify-center column">

                        <div className="d-flex align-center justify-center m-0-5">
                            <h5>WORLD </h5><FaEye size="30px"/><h5>VISION</h5>
                        </div>

                        <h5>FORUM</h5>
                    </div>
                </Link>
<div>
    <Link className="register" to="/register">Register</Link>
    <Link className="login" to="/login">Login</Link>
</div>

            </>
            }
            {toolbar && <>
                <div className="m-r-120">
                    <Link to="/search"> <FaSearch size="35px"
                                                  onMouseOver={({target})=>target.style.color="rgba(64, 162, 148, 0.61)"}
                    /></Link>
                </div>

                <Link className="logo" to="/">
                    <div className="d-flex align-center  justify-center column ">

                        <div className="d-flex align-center justify-center m-0-5">
                            <h5>WORLD </h5><FaEye size="30px"/><h5>VISION</h5>
                        </div>

                        <h5>FORUM</h5>
                    </div>
                </Link>
                <div className=" side-box d-flex justify-center">
                    <div className=" user-box d-flex justify-center">
                        {/*<div className="photoHover d-flex justify-center">*/}
                        {/*    <img className="userPhoto" src={userinfo.photo} alt=""/>*/}
                        {/*</div>*/}
                             <h5>User:</h5>
                        <h4 >{userinfo.username} </h4>
                    </div>
                    <button className="Logout" onClick={logout}>Logout</button>
                </div>


            </>
            }
        </div>
    );
};
export default Toolbar;