import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import Image from "../../assets/images/upload4.png";
import Button from "../../components/Button/Button";
import "./interest.css";
import SelectBoxItem from "../../components/SelectionBox/SelectionBox";

const interest = () => {
  const [options, setOptions] = useState({
    gaming: true,
    fashion: false,
    music: false,
    reading: false,
  });
  return (
    <Layout image={Image} step={4}>
      <h1>
        Let's get started by
        <br />
        some interests
      </h1>
      <br />
      Alright, let's pick something we're interested in and get started!
      <br />
      <SelectBoxItem
        title="Gaming"
        selected={options.gaming}
        onClick={() => {
          setOptions({ ...options, gaming: !options.gaming });
        }}
        style={{ backgroundColor: "#df9be0 " }}
      />
      <SelectBoxItem
        title="Fashion"
        selected={options.fashion}
        onClick={() => {
          setOptions({ ...options, fashion: !options.fashion });
        }}
        style={{ backgroundColor: "#cfc" }}
      />
      <br />
      <SelectBoxItem
        title="Music"
        selected={options.music}
        onClick={() => {
          setOptions({ ...options, music: !options.music });
        }}
        style={{ backgroundColor: "#ffc299" }}
      />
      <SelectBoxItem
        title="Reading"
        selected={options.reading}
        onClick={() => {
          setOptions({ ...options, reading: !options.reading });
        }}
        style={{ backgroundColor: "#2575d1" }}
      />
      <Button type="submit" label="Continue" className="button" />
    </Layout>
  );
};

export default interest;