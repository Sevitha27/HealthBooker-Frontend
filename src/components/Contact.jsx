import React, { useState } from "react";
import "../styles/contact.css";
import axios from "axios";

const Contact = () => {

  const initialState = {
    name: "",
    email: "",
    message: ""
  }

  const [formDetails, setFormDetails] = useState(initialState);

  const inputChange = (e) => {
    const { name, value } = e.target;
    return setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const sendMail = async(event) => {
    event.preventDefault()
    try{
      console.log(formDetails)
      const response = await axios.post(`${process.env.REACT_APP_MAILING_DOMAIN}/mail`, formDetails)
      console.log(response)
      if(response.status != 200){
        console.log("Failed")
      }
      else{
        setFormDetails(initialState)
      }
    }catch(err){
      console.log("Cannot Connect to Server")
    }
  }

  return (
    <section
      className="register-section flex-center"
      id="contact"
    >
      <div className="contact-container flex-center contact">
        <h2 className="form-heading">Contact Us</h2>
        <form className="register-form" onSubmit={sendMail}>
          <input
            type="text"
            name="name"
            className="form-input"
            placeholder="Enter your name"
            value={formDetails.name}
            onChange={inputChange}
          />
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={formDetails.email}
            onChange={inputChange}
          />
          <textarea
            type="text"
            name="message"
            className="form-input"
            placeholder="Enter your message"
            value={formDetails.message}
            onChange={inputChange}
            rows="8"
            cols="12"
          ></textarea>

          <button
            type="submit"
            className="btn form-btn"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
