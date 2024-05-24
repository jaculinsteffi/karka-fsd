import React, { useEffect, useState } from 'react';
import AdminHome from './AdminHome';
import axios from 'axios';
import './AdminHome.css'

const AddProject = () => {
  const [AddPro, setAddPro] = useState({
    ProjectName: "",
    ProjectEmail: "",
    ProjectDescription: "",
    ProjectRequirement: "",
    ProjectDeadline: "",
    ProjectStatus:"Pending"
  });

  const [getnew, setgetnew] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/data");
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
    setAddPro({ ...AddPro, ProjectEmail: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();

    const proData = async () => {
      try {
        const response = await axios.post(`http://localhost:3001/addproject`, AddPro);
        console.log("Project added:", response.data);
      } catch (error) {
        console.error("Error adding project:", error);
      }
    };

    proData();

    setAddPro({
      ProjectName: "",
      ProjectEmail: "",
      ProjectDescription: "",
      ProjectRequirement: "",
      ProjectDeadline: "",
      ProjectStatus:"Pending"
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
              style={{ color: "blue", border: "1px solid blue" }}
              value={AddPro.ProjectEmail}
              onChange={handleSelectChange}
            >
              <option value="">--Select User--</option>
              {getnew.map((task, i) => (
                <option key={i} value={task.Email} style={{ color: "blue" }}>
                  {task.Email}
                </option>
              ))}
            </select>
          </div>
          <div className='inp'>
            <p>Project Name</p>
            <input type='text' name='ProjectName' onChange={handleAddChange} value={AddPro.ProjectName} />
          </div>
          <div className='inp'>
            <p>Project Description</p>
            <textarea type='text' cols={60} rows={3} name='ProjectDescription' onChange={handleAddChange} value={AddPro.ProjectDescription} />
          </div>
          <div className='inp'>
            <p>Project Requirement</p>
            <input type='text' name='ProjectRequirement' onChange={handleAddChange} value={AddPro.ProjectRequirement} />
          </div>
          <div className='inp'>
            <p>Project Deadline</p>
            <input type='date' name='ProjectDeadline' onChange={handleAddChange} value={AddPro.ProjectDeadline} />
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
