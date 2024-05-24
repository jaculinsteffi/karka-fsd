import React from 'react'
import {Nav,NavItem} from 'reactstrap'
import { MdOutlineAddTask } from "react-icons/md"; 
import { NavLink } from 'react-router-dom'; 
import UserProject from './UserProject';

const UserHome = () => {
  return (
    <div className='userhead'>
    <div className='userhead1'>
    
      <h1><MdOutlineAddTask /> Task Management System</h1>
    </div>
    <div className='userhead2'>
    <Nav>
      
        <li>
<NavItem>
    <NavLink to='/UserProject'
    active href="#" style={{textDecoration : "none",color:" rgb(3, 184, 255)"}}
    >
    My Projects
  </NavLink>
</NavItem></li>
<li>
<NavItem>
  <NavLink to='/' href="#" style={{textDecoration : "none",color:" rgb(3, 184, 255)"}}>
    
    LogOut
  </NavLink>
</NavItem>
</li>

</Nav>

    </div>
   
  </div>
  )
}

export default UserHome
