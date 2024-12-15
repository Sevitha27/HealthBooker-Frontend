import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            HealthBooker simplifies healthcare by seamlessly connecting patients with trusted providers. Our platform offers an all-in-one solution for scheduling appointments, managing medical records, and tracking your health journey. With a secure and user-friendly app, we make it easier than ever to take control of your well-being
            <br></br>
            <br></br>
            Your health, our priority.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
