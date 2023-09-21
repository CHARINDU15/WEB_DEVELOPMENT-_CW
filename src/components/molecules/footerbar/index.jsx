import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import facebook from '../../images/fb.jpg';
import instergram from '../../images/insta.jpg';
import whatsapp from '../../images/wtsapp.jpg';
import ssl from '../../images/ssl.jpg';
import pcl from '../../images/pcl.jpg';
import shield from '../../images/sheild.jpg';



const Footer = () =>{
    return( 
  <>
    <footer className="Footer"  fixed-bottom="true"  >
    <div className="Contact-info">
        <h3>Contact Information</h3>
        <p> Phone:+94734567896</p>
        <p>Email:info@evento.com</p>
        <p>Address:123 Main Street,Galle Road</p>
       
    </div>
    <div className="social-media">
    <h3 id="con">Contact-Us</h3>
    <a class="Footer-brand" href="#"><img src="Facebook.png" alt="Facebook"width="40" height="40"/></a>
    <a class="Footer-brand" href="#"><img src="Instagram.png" alt="Instagram"width="40" height="40"/></a>
    <a class="Footer-brand" href="#"><img src="Whatsapp.png" alt="Whatsapp"width="40" height="40"/></a>
  </div>

  <div className="copyright">
    <p>&copy; 2023 EVENTO All-in-One Event Management System. All Rights Reserved.</p>

  </div>

  <div  className="privacy-terms">
    <p ><a id="privacy" href="/privacy-policy">Privacy Policy</a> | <a id="privacy" href="/terms-of-use">Terms of Use</a></p>
  </div>

  <div className="navigation">
    <h3>Navigation Links</h3>
    <p>Home | About Us | Services | Contact Us | FAQ | Blog</p>
  </div>

  <div className="accessibility">
    <h3>Accessibility Information</h3>
    <p>We are committed to making our events accessible to all. For inquiries, please contact <a id="privacy" href="mailto:accessibility@eventmanagementsystem.com">accessibility@eventmanagementsystem.com</a>.</p>
  </div>

  <div className="partners">
    <h3>Partners or Sponsors</h3>
    <a class="Footer-brand" href="#"><image src="./partnership.jpg" alt="Partnership"width="30" height="15"/></a>
    <a class="Footer-brand" href="#"><image src="./planing.jpg" alt="Partnership"width="30" height="15"/></a>
    <a class="Footer-brand" href="#"><image src="./catering.jpg" alt="Partnership"width="30" height="15"/></a>
   
  </div>

  <div className="awards">
    <h3>Awards and Recognitions</h3>
    <p>Voted "Best Event Management Platform 2023" by Industry Experts.</p>
  </div>

  <div className="feedback">
    <h3>Feedback or Contact Form</h3>
    <input id="input1" type="text" placeholder="Your Name" /><br />
    <input id="input1" type="email" placeholder="Your Email" /><br />
    <textarea id="input1" placeholder="Your Message"></textarea><br />
    <button>Send</button>
  </div>

  <div className="faqs">
    <h3>FAQs</h3>
    <p>Find answers to common questions in our <a id="privacy" href="/faqs">FAQ section</a>.</p>
  </div>

  <div className="security-trust">
    <h3>Security and Trust Seals</h3>
    <a class="Footer-brand" href="#"><img id="im" src= {ssl} alt="SSL Certificate"width="30" height="15"/></a>
    <a class="Footer-brand" href="#"><img src= {pcl} alt="PCI DSS Compliance"width="30" height="15"/></a>
    <a class="Footer-brand" href="#"><img src={shield} alt="Google Safe Browsing"width="30" height="15"/></a>
  </div>

  <div className="language-selection">
    <h3>Language Selection</h3>
    <select>
      <option value="en">English</option>
      <option value="sn">Sinhala</option>
      
    </select>
   
  </div>

    </footer></>
    );
};

export default Footer ;