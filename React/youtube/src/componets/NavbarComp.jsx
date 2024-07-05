

// import React, { useEffect, useState } from "react";
// import { Navbar, NavbarBrand, Nav } from "reactstrap";
// import logo from "../assets/youtube-logo.png";

// import { IoMdSearch, IoIosMenu } from "react-icons/io";
// import { IoVideocamOutline } from "react-icons/io5";
// import { IoIosNotificationsOutline } from "react-icons/io";

// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const NavbarComp = ({ setSidebar }) => {
//   const navigate = useNavigate();
//   const [search, setSearch] = useState("");
//   const [data, setData] = useState([]);
//   const[filter,setfilter]=useState([])

//   const fetchData = async () => {
//     try {
//       const res = await axios.get("http://localhost:3002/ytdata");
//       const response = res.data;
//       setData(response);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleProfile = () => {
//     navigate("/profile");
//   };

//   const fixedNavStyle = {
//     position: 'fixed',
//     top: 0,
//     width: '100%',
//     backgroundColor: 'white',
//     zindex:1000,
//   };

//   const handleSearch = (e) => {
//     setSearch(e.target.value);
    
//     const filteredItems = data.filter((item) =>
//       item.title.toLowerCase().includes(e.target.value.toLowerCase())
//     );
//     setfilter(filteredItems)
//   };

//   return (
//     <>
//       <div className="nav-head" style={fixedNavStyle}>
//         <Navbar color="faded" light>
//           <Nav>
//             <IoIosMenu
//               style={{ fontSize: 30, marginLeft: 15 }}
//               onClick={() => setSidebar((prev) => !prev)}
//             />
//           </Nav>
//           <NavbarBrand href="/">
//             <img
//               alt="youtube"
//               src={logo}
//               style={{
//                 height: 40,
//                 width: 110,
//               }}
//             />
//           </NavbarBrand>

//           <Nav>
//             <input
//               type="text"
//               placeholder="Search"
//               className="searchbar"
//               onChange={handleSearch}
//               value={search}
//             />
//             <button className="search">
//               <IoMdSearch style={{ fontSize: 20 }} />
//             </button>
//           </Nav>
//           <Nav>
//             <IoVideocamOutline style={{ fontSize: 30, marginRight: 20 }} />
//             <IoIosNotificationsOutline style={{ fontSize: 30 }} />
//           </Nav>
//           <Nav>
//             <div className="mainprofilepic" onClick={handleProfile}></div>
//           </Nav>
//         </Navbar>
//       </div>
//       <div>
//         {filter.map((item)=>(
//           <div>{item.title}</div>
          
//         ))}
//       </div>
//     </>
//   );
// };

// export default NavbarComp;

import React, { useEffect, useState } from "react";
import { Navbar, NavbarBrand, Nav } from "reactstrap";
import logo from "../assets/youtube-logo.png";
import { IoMdSearch, IoIosMenu } from "react-icons/io";
import { IoVideocamOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NavbarComp = ({ setSidebar }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3001/ytdata");
      setData(res.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filteredItems = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filteredItems);
  }, [search, data]);

  const handleProfile = () => {
    navigate("/profile");
  };

  const fixedNavStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: 'white',
    zIndex: 1000,
  };

  return (
    <>
      <div className="nav-head" style={fixedNavStyle}>
        <Navbar color="faded" light>
          <Nav>
            <IoIosMenu
              style={{ fontSize: 30, marginLeft: 15 }}
              onClick={() => setSidebar((prev) => !prev)}
            />
          </Nav>
          <NavbarBrand href="/">
            <img
              alt="youtube"
              src={logo}
              style={{
                height: 40,
                width: 110,
              }}
            />
          </NavbarBrand>

          <Nav className="ml-auto" style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Search"
              className="searchbar"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button className="search">
              <IoMdSearch style={{ fontSize: 20 }} />
            </button>
          </Nav>
          <Nav className="ml-auto" style={{ display: 'flex', alignItems: 'center' }}>
            <IoVideocamOutline style={{ fontSize: 30, marginRight: 20 }} />
            <IoIosNotificationsOutline style={{ fontSize: 30 }} />
          </Nav>
          <Nav>
            <div className="mainprofilepic" onClick={handleProfile}></div>
          </Nav>
        </Navbar>
      </div>
      <div style={{ padding: '70px 20px' }}>
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div key={item.id} style={{ marginBottom: '10px' }}>
              {item.title}
            </div>
          ))
        ) : (
          <div>No results found</div>
        )}
      </div>
    </>
  );
};

export default NavbarComp;
