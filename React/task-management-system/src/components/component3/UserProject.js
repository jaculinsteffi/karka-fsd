import React, { useEffect, useState } from 'react';
import UserHome from './UserHome';
import axios from 'axios';
import { format } from 'date-fns';

const UserProject = () => {
  const [target, setTarget] = useState([]);
  console.log(target)
  const [currentStatus, setCurrentStatus] = useState({});
  const currentuser = localStorage.getItem('currentUser');

  const getuser = async () => {
    try {
      const response = await axios.get("http://localhost:3333/task/all");
      const projects = response.data;
      setTarget(projects)
      // const userproject = projects.filter(project => project.projectemail === currentuser);
      // setTarget(userproject);
    } catch (err) {
      console.log(err);
    }
  };

  const handleButton = async (_id, currentStatus) => {
    try {
      const newStatus = currentStatus === "Pending" ? "Completed" : "Pending";
      await axios.post(`http://localhost:3333/task/edit`, {_id, projectstatus: newStatus });
      setTarget(prevState =>
        prevState.map(project =>
          project._id === _id ? { ...project, projectstatus: newStatus } : project
        )
      );
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    getuser();
  }, []);

  const date = new Date();
  const formatdate = format(date, 'yyyy-MM-dd');

  return (
    <div>
      <UserHome />
      <div>
        <h3 style={{ color: "tomato", textAlign: "center", backgroundColor: "white" }}>My Project</h3>
        <div className='usertab'>
          <table>
            <thead >
              <tr>
                <th>Project Id</th>
                <th>Project Name</th>
                <th>Project Email</th>
                <th>Project Description</th>
                <th>Project Requirement</th>
                <th>Project Assign date</th>
                <th>Project Deadline</th>
                <th>Project Status</th>
              </tr>
            </thead>
            <tbody >
              {target.map((data, i) => (
                <tr key={i}>
                  <td>{i+1}</td>
                  <td>{data.projectname}</td>
                  <td>{data.projectemail}</td>
                  <td>{data.projectdescription}</td>
                  <td>{data.projectrequirement}</td>
                  <td>{formatdate}</td>
                  <td>{data.projectdeadline}</td>
                  <td>
                    <button className='button2' onClick={() => handleButton(data._id, data.projectstatus)}>
                      {data.projectstatus}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserProject;
