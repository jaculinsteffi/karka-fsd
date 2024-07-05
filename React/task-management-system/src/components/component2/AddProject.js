import React, { useEffect, useState } from 'react';
import AdminHome from './AdminHome';
import axios from 'axios';
import './AdminHome.css'

const AddProject = () => {
  const [AddPro, setAddPro] = useState({
    projectname: "",
    projectemail: "",
    projectdescription: "",
    projectrequirement: "",
    projectdeadline: "",
    projectstatus:"Pending"
  });

  const [getnew, setgetnew] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3333/user/alluser");
        setgetnew(response.data);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setAddPro({ ...AddPro, [name]: value });
  };

  const handleSelectChange = (e) => {
    setAddPro({ ...AddPro, projectemail: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();

    const proData = async () => {
      try {
        const response = await axios.post(`http://localhost:3333/task/add`, AddPro);
        console.log("Project added:", response.data);
      } catch (error) {
        console.error("Error adding project:", error);
      }
    };

    proData();

    setAddPro({
      projectname: "",
      projectemail: "",
      projectdescription: "",
      projectrequirement: "",
      projectdeadline: "",
      projectstatus:"Pending"
    });
  };

  return (
    <div>
      <AdminHome />
      <div className='addpro'>
        <div className='addprosection'>
          <h3>Add Project</h3>
          <div className='inp'>
            <label htmlFor="dropdown"><b>User   </b></label>
            <select
              name='ProjectEmail'
              style={{ color: "tomato", border: "1px solid white" }}
              value={AddPro.projectemail}
              onChange={handleSelectChange}
            >
              <option value="">--Select User--</option>
              {getnew.map((task, i)  => (
                <option key={i} value={task.email} style={{ color: "tomato" }}>
                  {task.email}
                </option>
              ))}
            </select>
          </div>
          <div className='inp'>
            <p>Project Name</p>
            <input type='text' name='projectname' onChange={handleAddChange} value={AddPro.projectname} />
          </div>
          <div className='inp'>
            <p>Project Description</p>
            <textarea type='text' cols={60} rows={3} name='projectdescription' onChange={handleAddChange} value={AddPro.projectdescription} />
          </div>
          <div className='inp'>
            <p>Project Requirement</p>
            <input type='text' name='projectrequirement' onChange={handleAddChange} value={AddPro.projectrequirement} />
          </div>
          <div className='inp'>
            <p>Project Deadline</p>
            <input type='date' name='projectdeadline' onChange={handleAddChange} value={AddPro.projectdeadline} />
          </div>
          <div className='inp'>
            <button onClick={handleAdd}>Add & Assign</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
