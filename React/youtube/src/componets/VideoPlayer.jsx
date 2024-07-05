  import React, { useEffect, useState } from "react";
  import { SlLike, SlDislike } from "react-icons/sl";
  import { PiShareFat, PiDotsThreeBold } from "react-icons/pi";
  import { LiaDownloadSolid } from "react-icons/lia";
  import NavbarComp from "./NavbarComp";
  import axios from "axios";
  import CommentSection from "./CommentSection";

  const VideoPlayer = ({ sidebar}) => {
    const currentData = localStorage.getItem("currentdata");
    const [data, setData] = useState([]);
    const [suggdata, setSuggdata] = useState([]);
    console.log(data);

    const fetch = async () => {
      try {
        const response = await axios.get("http://localhost:3001/ytdata");
        const val = response.data;
        const userdata = val.filter((task) => task.title === currentData);
        setData(userdata);
        console.log(currentData);
      } catch (error) {
        console.log(error);
      }
    };
    const suggvideo = async () => {
      try {
        const resp = await axios.get("http://localhost:3001/ytdata");
        const value = resp.data;
        setSuggdata(value);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      fetch();
      suggvideo();
    }, []);

    const handleDownload = () => {
      alert("The video download process has started ");
    };
    const handleShare = () => {
      alert("Link copied to Clipboard");
    };
    return (
      <>
        <NavbarComp />
        <div className="video-body">
          {data.map((items, i) => (
            <div key={i} className={`main-content  ${sidebar ? "sidebar-open" : "sidebar-closed"}`}>
              <div className="videoplayer">
                <video src={items.videoUrl} controls></video>
              </div>

              <div className="suggestion">
                <h2>Suggested video</h2>

                {suggdata.map((info, i) => (
                  <div className="sug-vid">
                    <div className="tnail">
                      <img src={info.thumbnailUrl} alt="thumbnail" />
                    </div>
                    <div className="sug-cont">
                      <p>
                        <b>{info.title}</b>
                      </p>
                      <p>{info.channelname}</p>
                      <p>
                        {info.uploadTime} . {info.views}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="contents">
                <div className="title-cont">
                  <div className="videotitle">
                    <h2>{items.title}</h2>
                  </div>

                  <div className="writings">
                    <div className="chnnl">
                      <img src={items.channelLogo} alt="logo" />
                      <div className="chnnlname">
                        <h3>{items.channelName}</h3>
                        <p>{items.subscribers} </p>
                      </div>
                    </div>
                    <button className="subbtn">Subscribe</button>
                  </div>

                  <div className="btns">
                    <div className="likes">
                      <button className="like">
                        <SlLike style={{ height: 20, width: 20, opacity: 0.7 }} />
                      </button>
                      <button className="dislike">
                        <SlDislike
                          style={{ height: 20, width: 20, opacity: 0.7 }}
                        />
                      </button>
                    </div>

                    <button className="share" onClick={handleShare}>
                      <PiShareFat
                        style={{ height: 20, width: 20, opacity: 0.7 }}
                      />
                      share
                    </button>
                    <button className="download" onClick={handleDownload}>
                      <LiaDownloadSolid
                        style={{ height: 20, width: 20, opacity: 0.7 }}
                      />
                      Download
                    </button>
                    <button className="dots">
                      <PiDotsThreeBold
                        style={{ height: 20, width: 20, opacity: 0.7 }}
                      />
                    </button>
                  </div>
                </div>
                <div className="desc-cont">
                  <p>
                    {items.views} views . {items.uploadTime}
                  </p>
                  <p>{items.description}</p>
                </div>
                <div className="comment">
                  <h2>Comments</h2>
                  <CommentSection />
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  export default VideoPlayer;
