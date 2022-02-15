import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Feed from "../../components/Feed/Feed";
import Sidebar from "../../components/Sidebar/Sidebar";
import Rightbar from "../../components/Rightbar/Rightbar";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import {  useSelector } from "react-redux";

function Home() {
  const navigate = useNavigate();

  const postData = useSelector((state) => state.post.post);
  const postID = postData;

  useEffect(() => {
    let ab = localStorage.getItem("token");
    if (ab) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <Navbar />

      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
}

export default Home;
