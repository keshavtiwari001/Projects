import React, { useState, useEffect } from "react";
import "./form.css";
import Process from "./loader/Process";

const Form = () => {
  const [data, setData] = useState(0);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    setData(parseInt(e.target.value));
  };

  useEffect(() => {});

  function btn() {
    {
      <Process />;
    }
  }

  return (
    <>
      <div className="formdiv">
        <div className="innerDiv">
          <label htmlFor="">Think of a number between 1 to 10 :</label>
          <input
            value={data}
            type="number"
            name=""
            id=""
            onChange={handleInputChange}
          />
          <button onClick={handleSubmit} disabled={setLoading} >Read my mind</button>
        </div>
      </div>
    </>
  );
};

export default Form;
