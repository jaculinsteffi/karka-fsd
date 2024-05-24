import React from 'react'
import {Nav,NavItem} from 'reactstrap'
import { MdOutlineAddTask } from "react-icons/md";
import { Link } from 'react-router-dom';
import Login from '../component1/Login'

import { NavLink } from 'react-router-dom'; 
import ViewProjects from './ViewProjects';

const AdminHome = () => {
  return (
    <>
    <div className='homehead'>
      <div className='homehead1'>

        <h1><MdOutlineAddTask /> Task Management System</h1>
      </div>
      <div className='homehead2'>
        <Nav>
          <li>
            <NavItem>
              <NavLink to='/ViewProjects' href="#" style={{ textDecoration: "none" }}>
                View All Projects
              </NavLink>
            </NavItem>
          </li>
          <li>
            <NavItem>
              <NavLink to='/AddProject' href="#" style={{ textDecoration: "none" }}>
                Add Project
              </NavLink>
            </NavItem>
          </li>
          <li>
            <NavItem>
              <NavLink to='/ViewEmployees' href="#" style={{ textDecoration: "none" }}>
                View All Employees
              </NavLink>
            </NavItem></li>
          <li>
            <NavItem>
              <NavLink to='/' href="#" style={{ textDecoration: "none" }}>

                LogOut
              </NavLink>
            </NavItem>
          </li>

        </Nav>

      </div>

    </div></>
  )
}

export default AdminHome

