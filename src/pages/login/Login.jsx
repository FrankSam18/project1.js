import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import Image from "../../assets/images/register.png";
import "./Login.css";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {


  const [form, setForm] = useState({
    name: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate();
  const handleForm = (e) => {
    e.preventDefault(); //prevent page from refreshing
    localStorage.setItem("user", JSON.stringify(form));
    console.log(form);
    navigate("/login");
  }

  return (
    <Layout image={Image} step={1} page="register">
      <div className="register-container">
        <h1 className="page-title">LOGIN</h1>
        <form onSubmit={handleForm}>
        <TextInput
            type="email"
            name="email"
            label="Email"
            placeholder="u@gmail.com"
            required={true}
            onChange={(value) => setForm({ ...form, email: value })}
          />
          <br />
          <TextInput
            type="Password"
            name="password"
            label="Password"
            required={true}
            onChange={(value) => setForm({ ...form, password: value })}
          />
          <br />
          <Button type="submit" label="LOGIN" className="button" />
        </form>
      </div>
    </Layout>)
};

export default LoginPage;
 