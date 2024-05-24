import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const nav = useNavigate();
    const [data, setData] = useState({
        username: "",
        password: ""
    });

    

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })

    };

    const handleLogin = () => {
        const datadetails = JSON.parse(localStorage.getItem("DATA")) || [];
       datadetails.forEach(element => {
        (element.username == data.username) && (element.password == data.password)?
        nav('/Welcome'):alert("please enter correct details")        
       });
    };

    const handleClick = () => {
        nav("Registration");
    };

    return (
        <div>
            <h2>Login</h2>
            <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" className="username" name="username" value={data.username} onChange={handleChange} required 
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input 
                    type="password" className="password" name="password" value={data.password} onChange={handleChange} required 
                />
            </div>
            <div className='b1'> 
                <button type="button" className='button' onClick={handleLogin}>Login</button>
            </div>
            <div className='b1'> 
                <button type="button" className='button' onClick={handleClick}>Register</button>
            </div>
        </div>
    );
};

export default Login;
