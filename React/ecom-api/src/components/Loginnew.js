import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginNew = () => {
    const [loginData, setLoginData] = useState({
        email: "eve.holt@reqres.in",
        password: "pistol"
    });
    const [token, setToken] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLoginChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }

    const handleLogin = async () => {
        setLoading(true);
        try {
            const fetchData = await axios.post("https://reqres.in/api/login", {
                email: loginData.email,
                password: loginData.password
            });
            console.log(fetchData.data);
            const tokenData = fetchData.data.token;

            setToken(tokenData);
            console.log(tokenData);

            if (tokenData) {
                navigate("/ProductNew"); 
            } else {
                alert("Credential Failed");
            }
        } catch (error) {
            console.error("Login Error:", error);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <h1>Login Page</h1>

            <input type='text' placeholder='Enter your email' onChange={handleLoginChange} value={loginData.email} name='email' />
            <input type='password' placeholder='Enter your password' onChange={handleLoginChange} value={loginData.password} name='password' />

            <button onClick={handleLogin}>Login</button>

            {loading && <p>Loading....</p>}
        </div>
    );
}

export default LoginNew;