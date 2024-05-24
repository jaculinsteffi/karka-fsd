import React, { useEffect, useState } from 'react';
import { Form, Label, FormGroup, Input, Button } from 'reactstrap';
import '../component2/AdminLogin.css'; // Ensure the correct path to your CSS file
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const nav = useNavigate();
  const [Admindata, setAdmindata] = useState({
    Email: "",
    Password: ""
  });
  const [Adminjson, setAdminjson] = useState([]);

  const adminlogindata = async () => {
    try {
      const responseAdmin = await axios.get("http://localhost:3001/adminlogin");
      const datas = responseAdmin.data;
      setAdminjson(datas);
    } catch (err) {
      console.log(err);
    }
  };

  const HandleAdmin = (e) => {
    setAdmindata({ ...Admindata, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    adminlogindata();
  }, []);

  const handleClickAdmin = () => {
    const success = Adminjson.find(item => item.Email === Admindata.Email && item.Password === Admindata.Password);
    if (success) {
      nav('/AdminHome');
    } else {
      alert("Enter Correct Login Credentials");
    }
  };

  return (
    <div className='Admin'>
      <Form>
        <legend style={{ color: "black" }}>Admin Login</legend>
        <FormGroup floating >
          <Input
            id="exampleEmail"
            name="Email"
            placeholder="Email"
            type="email"
            onChange={HandleAdmin}
            value={Admindata.Email}
          />
          <Label for="exampleEmail">
            Email
          </Label>
        </FormGroup>
        {' '}
        <FormGroup floating>
          <Input
            id="examplePassword"
            name="Password"
            placeholder="Password"
            type="password"
            onChange={HandleAdmin}
            value={Admindata.Password}
          />
          <Label for="examplePassword">
            Password
          </Label>
        </FormGroup>
        {' '}
        <Button className='adminlogin' onClick={handleClickAdmin} >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default AdminLogin;
