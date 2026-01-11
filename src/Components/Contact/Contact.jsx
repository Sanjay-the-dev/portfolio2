import React from 'react'
import { useState } from 'react'
/* import theme_pattern from '../../assets/main assets/theme_pattern.svg' */
import mail_icon from '../../assets/gmail.png'
import call_icon from '../../assets/mobile.png'
import location_icon from '../../assets/location.png'
import './Contact.css'
import { Toast,ToastBody,ToastContainer } from 'react-bootstrap'
import { useRef, useEffect } from 'react'

const Contact = () => {


  const email = "sanjay525522@gmail.com";
  const phone = "+91 9025979021";
const [show_W , setShow_W] = useState(false);
const [show_A , setShow_A] = useState(false);

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


    const { name, email, number, message } = formData;
    if (!name || !email || !number || !message) {


      setShow_W(true);
      return;
    }

    setResult("Sending...");


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

        setShow_A(true);
        setFormData({ name: "", email: "", number: "", message: "" }); 
      } else {
        setResult("Error: " + resultData.message);
        console.log("Error", resultData);
      }
    } catch (error) {
      setResult("Error submitting form");
      console.log(error);
    }
  };


  const sectionRef = useRef(null);

  useEffect(()=>
  {
    const anim_elements = sectionRef.current.querySelectorAll('.anim');
    const observer = new IntersectionObserver((entries)=>
  {
    
     entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
     });
  }, {threshold:"0.2"})

  anim_elements.forEach((element)=> observer.observe(element))

  },[])

  return (
    <div ref={sectionRef} id="Contact" className="contact">


      <ToastContainer className=" position-fixed top-0  start-50 p-3" position={ 'top-center'} style={{ zIndex: 1 }}>
    <Toast onClose={() => setShow_A(false)} show={show_A} delay={3000} autohide>
      <Toast.Body className={'bg-success text-light text-center fs-6'}>Form Submitted Successfully</Toast.Body>
    </Toast>
  </ToastContainer>



  <ToastContainer className=' position-fixed top-0 start-50 p-3' position= { 'top-center'} style={{ zIndex: 1 }}>
    <Toast onClose={()=>{setShow_W(false); }} show={show_W} delay={3000} autohide>
      <ToastBody className={'bg-danger text-light text-center fs-6 '} >Please fill the form Properly</ToastBody>
    </Toast>
  </ToastContainer>




      <div className="contact-title">
        <h5 className='display-1 text-primary  position-relative vw-100 text-center overflow-hidden' >Get In Touch<p className='anim title-slide-down '>-</p> <p className='anim title-slide-up'>-</p></h5>      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1 className="contact-title-left">Contact</h1>
          <p className="contact-info">
            I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.
          </p>
          <br />
          <div className="contact-items">
            <img src={mail_icon} alt="" />
            <p>
              
              <a href={`mailto:${email}`} className='nav-link' target="_blank" rel="noopener noreferrer">
                {email}
              </a>
            </p>
          </div>
          <br />
          <div className="contact-items">
            <img src={call_icon} alt="" />
              <p>
               <a href={`tel:${phone}`} className='nav-link'>{phone}</a>
             </p>
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
            <p className='d-none'>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact