import React from "react";
import Layout from "../../components/layout/Layout";
import Image from "../../assets/images/upload5.png";
import Button from "../../components/Button/Button";
import "./interest3.css";
import Shapes from "../../assets/images/Group.png";

const completion = () => {
  return (
    <Layout image={Image}>
      <div className="add-photo-container">
        <div className="top-container">
          <h1 className="page-title">Wohoo!</h1>
          <p>
            Hey there! Your registration is complete,get
            <br />
            exicted for the ultimate quiz experience of your
            <br />
            life. Let's do this!
          </p>
          <img src={Shapes} alt="" />
        </div>
      </div>
      <div className="bottom-container" />
      <Button type="submit" label="Continue" className="button" />
    </Layout>
  );
};

export default completion;