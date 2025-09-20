import React from 'react'
import { useState } from 'react'
import theme_pattern from '../../assets/main assets/theme_pattern.svg'
import mail_icon from '../../assets/gmail.png'
import call_icon from '../../assets/mobile.png'
import location_icon from '../../assets/location.png'
import './Contact.css'

const Contact = () => {
const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Validation: check if any field is empty
    const { name, email, number, message } = formData;
    if (!name || !email || !number || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    setResult("Sending...");

    // Prepare FormData for Web3Forms
    const data = new FormData();
    data.append("access_key", "a657a70f-af70-4ffd-9d9d-7002f7015325");
    data.append("name", name);
    data.append("email", email);
    data.append("number", number);
    data.append("message", message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const resultData = await response.json();

      if (resultData.success) {
        setResult("Form Submitted Successfully");
        window.alert(resultData.message);
        setFormData({ name: "", email: "", number: "", message: "" }); // clear form
      } else {
        setResult("Error: " + resultData.message);
        console.log("Error", resultData);
      }
    } catch (error) {
      setResult("Error submitting form");
      console.log(error);
    }
  };

  return (
    <div id="Contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1 className="contact-title-left">Contact</h1>
          <p className="contact-info">
            I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.
          </p>
          <br />
          <div className="contact-items">
            <img src={mail_icon} alt="" />
            <p>sanjay525522@gmail.com</p>
          </div>
          <br />
          <div className="contact-items">
            <img src={call_icon} alt="" />
            <p>9025979021</p>
          </div>
          <br />
          <div className="contact-items">
            <img src={location_icon} alt="" />
            <p>Salem, TamilNadu</p>
          </div>
          <br />
        </div>

        <div className="contact-right">
          <form onSubmit={onSubmit} className="contact-form">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="off"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />

            <label htmlFor="gmail">Email</label>
            <input
              id="gmail"
              name="email"
              type="email"
              autoComplete="off"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="number">Contact</label>
            <input
              id="number"
              name="number"
              type="number"
              autoComplete="off"
              placeholder="Enter your number"
              value={formData.number}
              onChange={handleChange}
            />

            <label htmlFor="message">Write your message</label>
            <textarea
              id="message"
              name="message"
              autoComplete="off"
              rows={8}
              cols={37}
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
            />

            <button type="submit">Submit</button>
            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact