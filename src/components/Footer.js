import '../styles/Footer.css'
import facebook from './Images/FacebookF.png'
import instagram from './Images/Instagram.png'
import X from './Images/X.png'
import linkedin from './Images/Linkedin.png'
import youtube from './Images/Youtube.png'
import Todolist from './Images/Todolist.png'
function Footer(){
    return(
    <div>
        <div className='main3'>
            <div className='div1'>
                <img src={Todolist}></img>
                <p className='para3'>Subscribe to our newsletter for the latest features and updates delivered to you.</p>
                <div>
                    <input placeholder='Your email here' id='email' required></input>
                    <button className='btn7'>Join</button>
                </div>
                <p className='para4'>By subscribing, you consent to our Privacy Policy and agree to receive updates.</p>
            </div>
            <div className='div2'>
                <h5>Useful Links</h5>
                <a href='#'>Home </a>
                <a href='#'>About Us</a>
                <a href='#'>Contact Us</a>
                <a href='#'>Blog Posts</a>
                <a href='#'>FAQs</a>
            </div>
            <div className='div3'>
                 <h5>Resources</h5>
                <a href='#'>Help Center</a>
                <a href='#'>User Guide</a>
                <a href='#'>Community Forum</a>
                <a href='#'>Feedback</a>
                <a href='#'>Support</a>
            </div>
           <div className='div4'>
    <h5>Connect With Us</h5>
    <a href='#'><img src={facebook} alt='Facebook' className='social-icon' /> Facebook</a>
    <a href='#'><img src={instagram} alt='Instagram' className='social-icon' /> Instagram</a>
    <a href='#'><img src={X} alt='X' className='social-icon' /> X</a>
    <a href='#'><img src={linkedin} alt='LinkedIn' className='social-icon' /> LinkedIn</a>
    <a href='#'><img src={youtube} alt='YouTube' className='social-icon' /> YouTube</a>
    </div>

        </div>
        <div className='footer-line'> </div>
        <div className='footer-bottom'>
            <p className='left'>© 2024 Osumare. All rights reserved.</p>
            <p className='right'>Privacy Policy</p>
        </div>
    </div>)
}
export default Footer;