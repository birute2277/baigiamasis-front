import {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";


const RegisterPage = () => {
    const nameRef = useRef()
    const pass1Ref = useRef()
    const pass2Ref = useRef()
    const photoRef = useRef()

    const [message, setMessage] = useState("")
    const nav = useNavigate()

    async function registerUser() {
        const user = {
            username: nameRef.current.value,
            password: pass1Ref.current.value,
            passwordTwo: pass2Ref.current.value,
            photo: photoRef.current.value,
        }

        console.log(user)
        try {
            const res = await axios.post("http://localhost:4000/register", user ,{withCredentials: true})
            console.log(res.data)
            if(res.data.success) {
                setMessage(res.data.message)
                nav('/login')
            }   else {
                setMessage(res.data.message)
            }
        } catch (e) {
        }
    }

    return (
        <div className="d-flex column align-center m-20">
            <h1>Register</h1>
            <input type="text" ref={nameRef} placeholder="Name"/>
            <input type="text" ref={pass1Ref} placeholder="Password one"/>
            <input type="text" ref={pass2Ref} placeholder="Repeat password"/>
            <input type="text" size="60" ref={photoRef} placeholder="Photo must includes 'http'"/>

            <button onClick={registerUser}>Register</button>
            <h3>{message}</h3>
        </div>
    );
};

export default RegisterPage