import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const { mode, heading, showAlert } = props;
  const handleUpClick = (e) => {
    const newText = text.toUpperCase();
    setText(newText);
    showAlert("Converted to Uppercase", "success");
    
  };
  const hanleOnChange = (e) => {
    // e.target-> element
    setText(e.target.value);
  };
  const handleClearText = (e) => {
    setText("");
    showAlert("All text cleared", "success");
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    showAlert("Extra Spaces removed", "success");
  };
  return (
    <>
      <div
        className="container"
        style={{
          color: mode === "dark" ? "white" : "#05357b",
        }}
      >
        <h1>{heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows={8}
            style={{
              backgroundColor: mode === "dark" ? "#05357b" : "white",
              color: mode === "dark" ? "white" : "#05357b",
            }}
            value={text}
            onChange={hanleOnChange}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-3 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-3 my-1"
          onClick={handleClearText}
        >
          Clear Text
        </button>
        <button
          type="button"
          className="btn btn-primary mx-3 my-1"
          onClick={handleExtraSpace}
        >
          Remove Extra Space
        </button>
      </div>
    </>
  );
};

export default TextForm;
