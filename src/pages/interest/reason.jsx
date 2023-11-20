import React from "react";
import Layout from "../../components/layout/Layout";
import Image from "../../assets/images/upload3.png";
import Button from "../../components/Button/Button";
import "./reason.css";
import { useNavigate } from "react-router-dom";

const Reason= () => {
  const navigate = useNavigate();
  const handleForm = (e) => {
    e.preventDefault(); //prevent page from refreshing
    localStorage.setItem("user", JSON.stringify(form));

    navigate("/interest2");
  };
  return (
    <Layout image={Image}>
      <br></br>
      <h1> Hey there! What brings you here</h1>
      This will help us make a great recommendations
      <Button type="submit" label="Continue" className="button5" />
      <Button type="submit" label="Continue" className="button6" />
      <Button type="submit" label="Continue" className="button7" />
      <Button type="submit" label="Continue" className="button8" />
      <Button type="submit" label="Continue" className="button9" />
      <Button type="submit" label="Continue" className="button" />
    </Layout>
  );
};

export default Reason;