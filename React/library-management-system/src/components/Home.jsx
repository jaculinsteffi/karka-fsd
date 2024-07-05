import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';

import {
  Collapse,Card,CardBody,CardSubtitle,CardText,CardTitle,Button,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

const Home = (args) => {
  const [data,setdata]=useState([])
  console.log(data)
   
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const fetch=async()=>{
      try{
         const resp = await axios.get("http://localhost:3001/books")
         const response=resp.data
         setdata(response)
        }
      catch(err){
        console.log(err)
      }
    }
    useEffect(()=>{
      fetch()
    },[])
  
    return (
      <div>
         <Navbar {...args}>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle}   />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto"  navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
      
      <div className='row' >
      {data.map((data,i)=>(
        <div key={i} className='col-lg-3 col-md-2 col-sm-1'>
        <Card
        style={{
          width: '18rem',margin:"10px"
        }}
      >
        <img
    alt="Sample"
    src={data.image} 
  />
        
        <CardBody >
          <CardTitle tag="h5">
          {data.title}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            {data.Author}
          </CardSubtitle>
          <CardText>
            ISBN:{data.ISBN}
          </CardText>
          <CardText>
            {data.Publisher}
          </CardText>
          <Button>
            Button
          </Button>
        </CardBody>
      </Card>
      </div>
     
      ))}
      </div>
      </div>
    );
  }
  

export default Home
