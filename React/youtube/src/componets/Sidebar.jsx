import React, { useEffect, useState } from "react";
import { CiHome } from "react-icons/ci";
import { SiYoutubeshorts, SiYoutubegaming } from "react-icons/si";
import {
  MdOutlineSubscriptions,
  MdOutlinePlaylistPlay,
  MdHistory,
  MdAccessTime,
} from "react-icons/md";
import { LuUserSquare2, LuClapperboard } from "react-icons/lu";
import { GoVideo } from "react-icons/go";
import { AiTwotoneLike } from "react-icons/ai";
import { ImFire } from "react-icons/im";
import { HiOutlineTrophy } from "react-icons/hi2";
import { IoNewspaperOutline, IoMusicalNoteOutline } from "react-icons/io5";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ sidebar,setFilterCategory  }) => {
  const [profile, setProfile] = useState([]);

  const fetchProfile = async () => {
    try {
      const response = await axios.get("http://localhost:3001/ytdata");
      const value = response.data;
      setProfile(value);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };
  const handleFilter = (category) => {
    setFilterCategory(category);
  };
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="side">
        <div className="side-link" onClick={handleHome}>
          <CiHome style={{ height: 30, width: 30, opacity: 0.7 }} />
          <span>Home</span>
        </div>
        <div className="side-link">
          <SiYoutubeshorts style={{ height: 30, width: 30, opacity: 0.7 }} />
          <span>Shorts</span>
        </div>
        <div className="side-link">
          <MdOutlineSubscriptions
            style={{ height: 30, width: 30, opacity: 0.7 }}
          />
          <span>Subscription</span>
        </div>

        <hr />
        <div className="info">
          <p>Explore</p>
          <div className="side-link" onClick={() => handleFilter("trending")}>
            <ImFire style={{ height: 30, width: 30, opacity: 0.7 }} />
            <span>Trending</span>
          </div>
          <div className="side-link"onClick={() => handleFilter("gaming")}>
            <SiYoutubegaming style={{ height: 30, width: 30, opacity: 0.7 }} />
            <span>Gaming</span>
          </div>
          <div className="side-link"onClick={() => handleFilter("music")}>
            <IoMusicalNoteOutline
              style={{ height: 30, width: 30, opacity: 0.7 }}
            />
            <span>Music</span>
          </div>
          <div className="side-link"onClick={() => handleFilter("movies")}>
            <LuClapperboard style={{ height: 30, width: 30, opacity: 0.7 }} />
            <span>Movies</span>
          </div>
          <div className="side-link" onClick={() => handleFilter("sports")}>
            <HiOutlineTrophy style={{ height: 30, width: 30, opacity: 0.7 }} />
            <span>Sports</span>
          </div>
          <div className="side-link" onClick={() => handleFilter("news")}>
            <IoNewspaperOutline
              style={{ height: 30, width: 30, opacity: 0.7 }}
            />
            <span>News</span>
          </div>
        </div>
        <hr />
        <div className="info">
          <p>You</p>
          <div className="side-link">
            <LuUserSquare2 style={{ height: 30, width: 30, opacity: 0.7 }} />
            <span>Your Channel</span>
          </div>
          <div className="side-link">
            <MdHistory style={{ height: 30, width: 30, opacity: 0.7 }} />
            <span>History</span>
          </div>
          <div className="side-link">
            <MdOutlinePlaylistPlay
              style={{ height: 30, width: 30, opacity: 0.7 }}
            />
            <span>Playlist</span>
          </div>
          <div className="side-link">
            <GoVideo style={{ height: 30, width: 30, opacity: 0.7 }} />
            <span>Your videos</span>
          </div>
          <div className="side-link">
            <MdAccessTime style={{ height: 30, width: 30, opacity: 0.7 }} />
            <span>Watch Later</span>
          </div>
          <div className="side-link">
            <AiTwotoneLike style={{ height: 30, width: 30, opacity: 0.7 }} />
            <span>Liked Videos</span>
          </div>
        </div>

        <hr />
        <div className="info">
          <p>Subscriptions</p>
          {profile.map((item, i) => (
            <div key={i} className="side-link">
              <div className="profilepic">
                <img src={item.channelLogo} alt={item.channelName} />
              </div>
              <span>{item.channelName}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
