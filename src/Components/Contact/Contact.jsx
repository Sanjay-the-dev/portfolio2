import React from 'react'
import theme_pattern from '../../assets/main assets/theme_pattern.svg'
import mail_icon from '../../assets/gmail.png'
import call_icon from '../../assets/mobile.png'
import location_icon from '../../assets/location.png'
import './Contact.css'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a657a70f-af70-4ffd-9d9d-7002f7015325");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      window.alert(data.message);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  
  return (
    <div id='Contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt=''/>
        </div>

        <div className="contact-section">

            <div className="contact-left">

               <h1 className="contact-title-left">Contact</h1>
               
               <p className='contact-info'>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <br />
              <div className='contact-items'> <img src={mail_icon} alt="" /><p>sanjay525522@gmail.com</p></div>
                <br />
              <div className='contact-items'><img src={call_icon} alt="" /><p>9025979021</p></div>
                <br />
              <div className='contact-items'><img src={location_icon} alt="" /><p>Salem,TamilNadu</p></div>
                <br />

            </div>  

            <div className="contact-right">

              <form onSubmit={onSubmit} className="contact-form">
                <label htmlFor="name">Name</label>
            
                <input id='name' name='Name:' type="text "  autoComplete='off'  placeholder='Enter your name' />
            

                <label htmlFor="gmail">Email</label>
          
                <input type="email" name ="e-mail:" id="gmail"  autoComplete='off'  placeholder='Enter your email'/>

                <label htmlFor="number">Contact</label>
                <input type="number" name="Number:" id='text' autoComplete='off' placeholder='Enter your number '/>

               <br />
                <label htmlFor="message">Write you message</label> 
                <textarea name="message" id="message" autoComplete='off' rows={8} cols={37} placeholder='Write you message...'></textarea>

                <button type='submit'>Submit</button>

              

              </form>

            </div>
        </div>
    </div>
  )
}

export default Contact