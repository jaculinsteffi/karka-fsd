// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   useLocation,
// } from "react-router-dom";
// import "./App.css";
// import React, { useState } from "react";
// import Home from "./componets/Home";
// import NavbarComp from "./componets/NavbarComp";
// import Login from "./componets/Login";
// import VideoPlayer from "./componets/VideoPlayer";
// import Sidebar from "./componets/Sidebar";
// import Register from "./componets/Register";
// import Feed from "./componets/Feed";
// import Profile from "./componets/Profile";

// const App = () => {
//   const [sidebar, setSidebar] = useState(true);

//   return (
//     <Router>
//       <AppContent sidebar={sidebar} setSidebar={setSidebar} />
//     </Router>
//   );
// };

// const AppContent = ({ sidebar, setSidebar }) => {
//   const location = useLocation();
//   const isSignInPage = location.pathname === "/signin";
//   const isRegisterPage = location.pathname === "/register";
//   const isProfilePage = location.pathname === "/profile";
//   const isHomePage = location.pathname === "/";
//   const isFeedPage = location.pathname === "/feed";

//   const showNavbar = !isSignInPage && !isRegisterPage && !isProfilePage;
//   const showSidebar = isHomePage || isFeedPage;

//   return (
//     <div className="total-body">
//       {showNavbar && <NavbarComp setSidebar={setSidebar} />}
//       <div className="content-wrapper">
//         {showSidebar && <Sidebar sidebar={sidebar} />}
//         <div className={`main-content ${!showSidebar ? "no-sidebar" : ""}`}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/signin" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/profile" element={<Profile />} />
//             <Route path="/videoplayer" element={<VideoPlayer />} />
//             <Route path="/feed" element={<Feed sidebar={sidebar} />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import React, { useState } from "react";
import Home from "./componets/Home";
import NavbarComp from "./componets/NavbarComp";
import Login from "./componets/Login";
import VideoPlayer from "./componets/VideoPlayer";
import Sidebar from "./componets/Sidebar";
import Register from "./componets/Register";
import Feed from "./componets/Feed";
import Profile from "./componets/Profile";

const App = () => {
  const [sidebar, setSidebar] = useState(true);
  // const [filterCategory, setFilterCategory] = useState("Home");

  return (
    <Router>
      <AppContent sidebar={sidebar} setSidebar={setSidebar} />
    </Router>
  );
};

const AppContent = ({ sidebar, setSidebar }) => {
  const location = useLocation();
  const isSignInPage = location.pathname === "/signin";
  const isRegisterPage = location.pathname === "/register";
  const isProfilePage = location.pathname === "/profile";
  const isHomePage = location.pathname === "/";
  const isFeedPage = location.pathname === "/feed";

  const showNavbar = !isSignInPage && !isRegisterPage && !isProfilePage;
  const showSidebar = isHomePage || isFeedPage;

  return (
    <div className="total-body">
      {showNavbar && <NavbarComp setSidebar={setSidebar} />}
      <div className="content-wrapper">
        {showSidebar && <Sidebar sidebar={sidebar} />}
        <div className={`main-content ${!showSidebar ? "no-sidebar" : ""}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/videoplayer"
              element={<VideoPlayer sidebar={sidebar} />}
            />
            <Route
              path="/feed"
              element={
                <Feed sidebar={sidebar} />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
