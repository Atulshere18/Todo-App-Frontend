import React, { useState } from 'react';
import '../styles/HeroSection.css';
import card from './Images/Card.png';
import google from './Images/google.png';
import twitch from './Images/twitch.png';
import facebook from './Images/Facebook.png';
import pinterest from './Images/Pinterest.png';
import Todolist from '../components/TodolistFeatures';
import YT from './Images/YT.png';
import TodolistFeatures from '../components/TodolistFeatures';

function HeroSection() {
  
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleGetStartedClick = () => {
    setIsPopupVisible(true);
    document.body.style.overflow = 'hidden'; 
  };

  
  const closePopup = () => {
    setIsPopupVisible(false);
    setFormSubmitted(false); 
    document.body.style.overflow = 'auto'; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true); 
  };

  return (
    <div className='hero'>
      <div className='upper'>
        <div className='head'>Simplify Your Life with Our Todo App</div>
        <div className='body'>
          Stay organized and boost your productivity with our intuitive todo website. Experience a modern approach to task management that fits your lifestyle.
        </div>
        <div className='button'>
          <button className='btn1' onClick={handleGetStartedClick}>Get Started</button>
          <button className='btn2'>Learn More</button>
        </div>
      </div>

      <div className='lower'>
        <div className='banner'>
          <p className='para1'>Organize. Achieve. Relax.</p>
          <p className='para2'>
            Turn clutter into clarity, chaos into control, and dreams into done. Bold visions into market success.
          </p>
          <div>
            <button className='btn5' onClick={handleGetStartedClick}>Get Started Today</button>
            <button className='btn6'>Discover Features</button>
          </div>
        </div>
        <div className='bannerimg'>
          <img src={card} alt="card" />
        </div>
      </div>

      <div className='socialmedia'>
        <img src={google} alt="google" />
        <img src={facebook} alt="facebook" />
        <img src={YT} alt="YT" />
        <img src={pinterest} alt="pinterest" />
        <img src={twitch} alt="twitch" />
      </div>

       {isPopupVisible && (
  <div className="popup-overlay">
    <div className="popup">
      <button className="close-btn" onClick={closePopup}>X</button>

      {!formSubmitted ? (
        <>
          <p className='p'>Get Started Today!</p>
          <p className='p-1'>Fill in your details and take control of your tasks.</p>

          <form className="popup-form" onSubmit={handleSubmit} method='post'>
            <div className="name-fields">
              <div>
                <label >First Name</label>
                <input type="text" required />
              </div>
              <div>
                <label >Last Name</label>
                <input type="text"  required />
              </div>
            </div>

            <div className="gender">
              <p>Gender:</p>
              <label>
                <input type="radio" name="gender" value="male" required />
                Male
              </label>
              <label>
                <input type="radio" name="gender" value="female" required />
                Female
              </label>
            </div>

            <div className="language">
              <p>Languages:</p>
              <label>
                <input type="checkbox" name="language" value="English" />
                English
              </label>
              <label>
                <input type="checkbox" name="language" value="Hindi" />
                Hindi
              </label>
              <label>
                <input type="checkbox" name="language" value="Spanish" />
                Spanish
              </label>
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <input type="email"  name="email" required />
            </div>

            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
            </div>

            <div className="terms">
              <label>
                <input
                  type="checkbox"
                  name="terms"
                  required
                  onChange={(e) => e.target.parentNode.style.color = e.target.checked ? "#f44336" : "inherit"}
                />
                I agree to the terms and conditions
              </label>
            </div>

            <button type="submit" className="done">Done</button>
          </form>
        </>
      ) : (
        <>
          <h2>Thank You!</h2>
          <p>Thank you for connecting with us. <br />Our team will be contacting you soon.</p>
          <button onClick={closePopup} className='done'>Done</button>
        </>
      )}
    </div>
  </div>
)}
    </div>
  );
}

export default HeroSection;
