import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import Image from "../../assets/images/upload2.png";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import PhotoIcon from "../../assets/images/photoicon.png";
import "./Addphoto.css";
const AddPhoto = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <Layout image={Image} step={2}>
      <div className="add-photo-container">
        <div className="top-container">
          <h1 className="page-title">Add Photo</h1>
          <p>Add a photo so other memebers know who you are</p>
          <div className="photo-icon-box">
            {previewImage ? (
              <img src={previewImage} alt="" className="selected-image" />
            ) : (
              <img src={PhotoIcon} alt="" />
            )}

            <input
              type="file"
              className="file-input"
              onChange={handleImageUpload}
            />
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <br/>

        <div className="bottom-container">
          {previewImage ? (
            <Button type="submit" label="Continue" className="button" />
          ) : (
            <Button type="submit" label="Upload Photo" className="button" />
          )}


          <br/>
          {!previewImage && <Link>Skip</Link>}
        </div>
      </div>
    </Layout>
  );
};

export default AddPhoto;