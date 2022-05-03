import React, {useRef} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useState} from "react";


const LoginPage = ({toolbar, setToolbar, setUserinfo}) => {
    const nameRef = useRef()
    const pass1Ref = useRef()

    const [message, setMessage] = useState("")

    const nav = useNavigate()

   async function loginUser() {
        const user = {
            username: nameRef.current.value,
            password: pass1Ref.current.value,
        }
            try {
                const res = await axios.post("http://localhost:4000/login", user ,{withCredentials: true})
                console.log(res.data)
                    if(res.data.success) {
                        setToolbar(true)
                        console.log(res.data.userExists.username)
                        setUserinfo(res.data.userExists)

                        nav('/')
                    }   else {
                            setMessage(res.data.message)
                    }

            } catch (e) {
                }
    }

    return (

    <div className="d-flex column align-center m-50">
        {!toolbar && <>
        <h1>Login</h1>
        <input type="text" ref={nameRef} placeholder="Name"/>
        <input type="text" ref={pass1Ref} placeholder="Password"/>


        <button onClick={loginUser}>Login</button>
        <h3>{message}</h3>
        </>
        }
        {toolbar && <>
       <h3>Jūs sėkmingai prisiregistravote</h3>
        </>
        }
    </div>


    );
};

export default LoginPage
