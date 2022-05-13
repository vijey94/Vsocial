import React from "react";
import Feed from "../../components/feed/Feed";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css";
export default function Home() {
  return (
    <>
      <Topbar />

      <div className="homecontainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
