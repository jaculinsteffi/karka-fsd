import "../App.css";
import React, { useState } from "react";

const Profile = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => {
    setIsOn(!isOn);
  };
  return (
    <>
      <div
        className="profile-body"
        style={{
          background: isOn ? "black" : "white",
          color: isOn ? "white" : "black",
          width: "100%",
          height: "100vh",
          padding: "30px",
          margin: "auto",
        }}
      >
        <div className="profile">
          <h1>Profile</h1>
          <hr />
          <div className="uname">
            <h5>Username</h5>
            <p>Alen roro</p>
          </div>

          <div className="email">
            <h5>E-mail</h5>
          </div>
          <div className="mode">
            <p>Dark Mode</p>
          <button onClick={toggleLight}>{isOn ? "Light Mode" : "Dark Mode"}</button>

          </div>
          <button>Logout</button>
        </div>
      </div>
    </>
  );
};

export default Profile;
