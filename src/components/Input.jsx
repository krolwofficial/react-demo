import React, { useState, useEffect } from "react";

const Index = ({ setUrl }) => {
  // const Index = () => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // setUrl(value);
    console.log("test 1111");
    // setUrl("https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd");
    setUrl(text);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  // useEffect(() => {
  //   setUrl("https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd");
  // }, []);

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "50px" }}>
      <label>
        Url:
        <input
          type="text"
          value={text}
          onChange={handleChange}
          style={{ marginLeft: "20px", width: "300px" }}
        />
      </label>
      <input type="submit" value="Load" style={{ marginLeft: "20px" }} />
    </form>
  );
};

export default Index;
