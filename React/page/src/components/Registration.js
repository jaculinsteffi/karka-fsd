import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const [data, setData] = useState({
        username: "",
        password: "",
        dob: "",
        gender: "",
        skills: [],
        location: ""
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = value;

        if (type === 'checkbox') {
            setData({
                ...data,
                skills: checked ? [...data.skills, value] : data.skills.filter(skill => skill !== value)
            });
        } else {
            setData({ ...data, [name]: newValue });
        } 
    };

    const nav = useNavigate();

    const handleClk = () => {
        nav("/");
        console.log(data);
        let mydata=localStorage.getItem("DATA")?
        JSON.parse(localStorage.getItem("DATA")):[]
        mydata.push(data) 
        console.log(mydata)
        localStorage.setItem("DATA",JSON.stringify(mydata))
       
        
    };

    return (
        <div className='body'>
            <div className="container">
                <h2>Register</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" className="username" name="username" required value={data.username} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="password" name="password" required value={data.password} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dob">Date of Birth:</label>
                        <input type="date" className="dob" name="dob" required value={data.dob} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Gender: &nbsp;</label><br />
                        <input type="radio" id="male" name="gender" value="male" required checked={data.gender === "male"} onChange={handleChange}/>
                        <label htmlFor="male">Male &nbsp;</label>
                        <input type="radio" id="female" name="gender" value="female" required checked={data.gender === "female"} onChange={handleChange}/>
                        <label htmlFor="female">Female &nbsp;</label>
                        <input type="radio" id="other" name="gender" value="other" required checked={data.gender === "other"} onChange={handleChange}/>
                        <label htmlFor="other">Other &nbsp;</label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="skills">Skills: &nbsp;</label><br />
                        <input type="checkbox" id="html" name="HTML" value="HTML" checked={data.skills.includes("HTML")} onChange={handleChange} />
                        <label htmlFor="html">HTML &nbsp;</label>
                        <input type="checkbox" id="css" name="CSS" value="CSS" checked={data.skills.includes("CSS")} onChange={handleChange} />
                        <label htmlFor="css">CSS &nbsp;</label>
                        <input type="checkbox" id="js" name="JavaScript" value="JavaScript" checked={data.skills.includes("JavaScript")} onChange={handleChange} />
                        <label htmlFor="js">JavaScript &nbsp;</label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Location: &nbsp;</label>
                        <select id="location" name="location" required value={data.location} onChange={handleChange}>
                            <option value="" disabled>Select Location</option>
                            <option value="ngl">Nagercoil</option>
                            <option value="chennai">Chennai</option>
                            <option value="bangalore">Bangalore</option>
                        </select>
                    </div>
                    <div className='b1'>
                        <button type="submit" className='button' onClick={handleClk}> Submit </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Registration;