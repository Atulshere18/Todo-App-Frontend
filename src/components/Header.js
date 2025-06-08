import React, { useState } from 'react';
import todolist from './Images/Todolist.png';
import '../styles/Header.css';

function Header() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);


  const handleGetStartedClick = () => {
    setIsPopupVisible(true);
    document.body.style.overflow = 'hidden'; 
  }

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
    <div className="main2">
      <img src={todolist} alt="ToDo List" className="logo" />
      <div className="header">
        <div className="nav-item">About Us</div>
        <div className="nav-item">Features</div>
        <div className="nav-item">More Option</div>
        <div className="nav-item">Contact</div>
        <div className="auth-buttons">
          <button className="login-btn">Log In</button>
          <button className="signup-btn" onClick={handleGetStartedClick}>Sign Up</button>
        </div>
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

export default Header;
