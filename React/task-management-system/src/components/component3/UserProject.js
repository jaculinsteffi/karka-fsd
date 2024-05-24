

// import React, { useEffect, useState } from 'react';
// import UserHome from './UserHome';
// import axios from 'axios';
// import { format } from 'date-fns';

// const UserProject = () => {
//   const [target, settarget] = useState([]);
//   console.log(target)
//   const [action,setaction]=useState({
//               ProjectName: "",
//               ProjectEmail: "",
//               ProjectDescription: "",
//               ProjectRequirement:"",
//               ProjectDeadline: "",
//               ProjectStatus:""
//   })
//   console.log(action)
//   const currentuser = localStorage.getItem('currentUser');
 
//   const getuser = async () => {
//     try {
//       const response = await axios.get("http://localhost:3001/addproject");
//       const projects = response.data;

//       const userproject = projects.filter(project => project.ProjectEmail === currentuser);
//       settarget(userproject);
      
//     } catch (err) {
//       console.log(err);
//     }
//   };
// const handleButton=(id)=>{
//             setaction({
//               ProjectName: target.ProjectName,
//               ProjectEmail: target.ProjectEmail,
//               ProjectDescription: target.ProjectDescription,
//               ProjectRequirement: target.ProjectRequirement,
//               ProjectDeadline: target.ProjectDeadline,
//               ProjectStatus:"Completed"
//             })
// }
 

//   useEffect(() => {
//     getuser();
//   }, []);

//   const date = new Date();
//   const formatdate = format(date, 'dd-MM-yyyy');

//   return (
//     <div>
//       <UserHome />
//       <div>
//         <h3 style={{ color: "white", textAlign: "center", backgroundColor: "skyblue" }}>My Project</h3>
//         <div className='usertab'>
//           <table>
//             <thead>
//               <tr>
//                 <th>Project Id</th>
//                 <th>Project Name</th>
//                 <th>Project Email</th>
//                 <th>Project Description</th>
//                 <th>Project Requirement</th>
//                 <th>Project Assign date</th>
//                 <th>Project Deadline</th>
//                 <th>Project Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {target.map((data, i) => (
//                 <tr key={i}>
//                   <td>{data.id}</td>
//                   <td>{data.ProjectName}</td>
//                   <td>{data.ProjectEmail}</td>
//                   <td>{data.ProjectDescription}</td>
//                   <td>{data.ProjectRequirement}</td>
//                   <td>{formatdate}</td>
//                   <td>{data.ProjectDeadline}</td>
//                   <td>
//                     <button onClick={() => handleButton(data.id)}>
//                       {data.ProjectStatus}
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProject;

import React, { useEffect, useState } from 'react';
import UserHome from './UserHome';
import axios from 'axios';
import { format } from 'date-fns';

const UserProject = () => {
  const [target, setTarget] = useState([]);
  const [currentStatus, setCurrentStatus] = useState({});
  const currentuser = localStorage.getItem('currentUser');

  const getuser = async () => {
    try {
      const response = await axios.get("http://localhost:3001/addproject");
      const projects = response.data;
      const userproject = projects.filter(project => project.ProjectEmail === currentuser);
      setTarget(userproject);
    } catch (err) {
      console.log(err);
    }
  };

  const handleButton = async (id, currentStatus) => {
    try {
      const newStatus = currentStatus === "Pending" ? "Completed" : "Pending";
      await axios.patch(`http://localhost:3001/addproject/${id}`, { ProjectStatus: newStatus });
      setTarget(prevState =>
        prevState.map(project =>
          project.id === id ? { ...project, ProjectStatus: newStatus } : project
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
  const formatdate = format(date, 'dd-MM-yyyy');

  return (
    <div>
      <UserHome />
      <div>
        <h3 style={{ color: "white", textAlign: "center", backgroundColor: "skyblue" }}>My Project</h3>
        <div className='usertab'>
          <table>
            <thead>
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
            <tbody>
              {target.map((data, i) => (
                <tr key={i}>
                  <td>{data.id}</td>
                  <td>{data.ProjectName}</td>
                  <td>{data.ProjectEmail}</td>
                  <td>{data.ProjectDescription}</td>
                  <td>{data.ProjectRequirement}</td>
                  <td>{formatdate}</td>
                  <td>{data.ProjectDeadline}</td>
                  <td>
                    <button className='button2' onClick={() => handleButton(data.id, data.ProjectStatus)}>
                      {data.ProjectStatus}
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
