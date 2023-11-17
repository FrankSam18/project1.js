import React, { useState } from "react";

import Layout from "../../components/layout/Layout";
import Image from "../../assets/images/register.png";
import "./Register.css";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";
import Button1 from"../../components/Button1/button1";
import { useNavigate } from "react-router-dom";

const Register = () => {
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
  };
  return (
    <Layout image={Image} step={1} page="register">
      <div className="register-container">
        <h1 className="page-title">Create Account</h1>
        <form onSubmit={handleForm}>
          <TextInput
            type="text"
            name="name"
            label="Name"
            placeholder="John Doe"
            value={form.name}
            onChange={(value) => setForm({ ...form, name: value })}
          />
          <br />

          <TextInput
            type="email"
            name="email"
            label="Email"
            placeholder="🫥@gmail.com"
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
          <Button type="submit" label="Create Account" className="button" />
          <br />
          <Button1 type="submit" label="Sign up with Google" className="button1" />
        </form>
      </div>
    </Layout>
  );
};

export default Register;
