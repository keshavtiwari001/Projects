import React, { useState, useEffect } from "react";
import "./form.css";
import Process from "./loader/Process";

const

  Form = () => {
    const [data, setData] = useState(0); // Store the user's input
    const [loading, setLoading] = useState(false); // Initially not loading
    const [message, setMessage] = useState(""); // Store final message

    const handleClick = async () => {
      setLoading(true); // Start loading animation

      try {
        //  5-second delay 
        await new Promise((resolve) => setTimeout(resolve, 5000));

        // Validate user input 
        if (data < 1 || data > 10) {
          setMessage("Please enter a number between 1 and 10.");
        } else {
          setMessage(`Your number is: ${data}`);
        }
      } catch (error) {
        console.error("Error:", error);
        setMessage("Something went wrong. Please try again.");
      } finally {
        setLoading(false); // Stop loading animation after any outcome
      }
    };

    return (
      <>
        <div className="formdiv">
          <div className="innerDiv">
            <label htmlFor="">Think of a number between 1 to 10:</label>
            <input
              value={data}
              type="number" // Use type="number" for numeric input
              name=""
              id=""
              onChange={(e) => setData(parseInt(e.target.value))} // Parse to integer
            />
            <button onClick={handleClick}>Read my mind</button>
          </div>
          {loading && <Process />} {/* Conditionally render Process component */}
        </div>
        {message && <p>{message}</p>} {/* Display message below the form */}
      </>
    );
  };

export default Form;
