import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import Image from "../../assets/images/upload2.png";
import PhotoIcon from "../../assets/images/photoicon.png";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import "./Upload.css";

const Upload = () => {
  return (
    <Layout image={Image} step={2}>
      <div className="add-photo-container">
        <div className="top-container">
          <h1 className="page-title">Add Photo</h1>
          <p>Add a photo so other memebers know who you are</p>
          <div className="photo-icon-box">
            <img src={PhotoIcon} alt="" />
          </div>
        </div>
        <input type="file" className="file-input" />
        <div className="bottom-container">
          <Button type="submit" label="Upload Photo" className="button" />
          <Link>Skip</Link>
        </div>
      </div>
    </Layout>
  );
};

export default Upload;