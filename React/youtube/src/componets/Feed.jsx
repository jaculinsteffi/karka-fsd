import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Feed = ({ sidebar,filterCategory  }) => {
  const [videodata, setvideoData] = useState([]);
  console.log(videodata)
  const fetch = async () => {
    try {
      const response = await axios.get("http://localhost:3001/ytdata");
      const value = response.data;
      setvideoData(value);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    fetch();
  }, []);

  const navigate = useNavigate();

  const handleVideo = (title) => {
    
    const newdata=videodata.find(item=>item.title===title)
    console.log(newdata)
    if(newdata){
      localStorage.setItem("currentdata",newdata.title)
      navigate("/videoplayer");
    }
  };
  const filteredData = filterCategory === "Home"
  ? videodata
  : videodata.filter(item => item.category === filterCategory);

  return (
    <div className={`feed-content ${sidebar ? "sidebar-open" : "sidebar-closed"}`}>

      {videodata.map((item, i) => (
        <div key={i} className="card-body" onClick={() => handleVideo(item.title)}>
          <img
            src={item.thumbnailUrl}
            className="thumbnail-card"
            alt="thumbnail"
          />
          <div className="profilepic">
            <img src={item.channelLogo} alt="channelLogo" />
          </div>
          <div className="desc">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-channel">{item.channelName}</p>
            <p className="card-text">{item.views} <b>.</b> {item.uploadTime}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
