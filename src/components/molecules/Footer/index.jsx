import React from "react";

const Footer = ()=>{
    return(
        <Footer className="Footer">
        <div className="Contact-info">
            <h3>Contact Information</h3>
            <p> Phone:+94734567896</p>
            <p>Email:info@evento.com</p>
            <p>Address:123 Main Street,Galle Road</p>
           
        </div>
        <div className="social-media">
        <h3>Contact-Us</h3>
        <a class="Footer-brand" href="#"><Image src="C:\Users\HP\Desktop\fb.png" alt="Facebook"width="30" height="15"/></a>
        <a class="Footer-brand" href="#"><Image src="C:\Users\HP\Desktop\insta.jpeg" alt="Instagram"width="30" height="15"/></a>
        <a class="Footer-brand" href="#"><Image src="C:\Users\HP\Desktop\wtdp.jpeg" alt="Whatsapp"width="30" height="15"/></a>
      </div>

      <div className="copyright">
        <p>&copy; © 2023 EVENTO All-in-One Event Management System. All Rights Reserved.</p>

      </div>

      <div className="privacy-terms">
        <p><a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-use">Terms of Use</a></p>
      </div>

      <div className="navigation">
        <h3>Navigation Links</h3>
        <p>Home | About Us | Services | Contact Us | FAQ | Blog</p>
      </div>

      <div className="newsletter">
        <h3>Newsletter Signup</h3>
        <input type="email" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>

      <div className="testimonials">
        <h3>Testimonials</h3>
        <p>"The event organized by EMS was exceptional! - John Doe"</p>
        <p>"I had a great time at the last event. Looking forward to the next one! - Jane Smith"</p>
      </div>

      <div className="quick-links">
        <h3>Quick Links</h3>
        <p>FAQs | Event Calendar | Blog | Careers</p>
      </div>

      <div className="sitemap">
        <h3>Sitemap</h3>
        <p><a href="/sitemap">Sitemap</a></p>
      </div>

      <div className="accessibility">
        <h3>Accessibility Information</h3>
        <p>We are committed to making our events accessible to all. For inquiries, please contact <a href="mailto:accessibility@eventmanagementsystem.com">accessibility@eventmanagementsystem.com</a>.</p>
      </div>

      <div className="partners">
        <h3>Partners or Sponsors</h3>
        <a class="Footer-brand" href="#"><Image src="C:\Users\HP\Desktop\wedd.png" alt="Partnership"width="30" height="15"/></a>
        <a class="Footer-brand" href="#"><Image src="C:\Users\HP\Desktop\par.jpeg" alt="Partnership"width="30" height="15"/></a>
        <a class="Footer-brand" href="#"><Image src="C:\Users\HP\Desktop\caterin.png" alt="Partnership"width="30" height="15"/></a>
       
      </div>

      <div className="awards">
        <h3>Awards and Recognitions</h3>
        <p>Voted "Best Event Management Platform 2023" by Industry Experts.</p>
      </div>

      <div className="feedback">
        <h3>Feedback or Contact Form</h3>
        <input type="text" placeholder="Your Name" /><br />
        <input type="email" placeholder="Your Email" /><br />
        <textarea placeholder="Your Message"></textarea><br />
        <button>Send</button>
      </div>

      <div className="faqs">
        <h3>FAQs</h3>
        <p>Find answers to common questions in our <a href="/faqs">FAQ section</a>.</p>
      </div>

      <div className="security-trust">
        <h3>Security and Trust Seals</h3>
        <a class="Footer-brand" href="#"><Image src="C:\Users\HP\Desktop\ssl.jpeg" alt="SSL Certificate"width="30" height="15"/></a>
        <a class="Footer-brand" href="#"><Image src="C:\Users\HP\Desktop\pci.png" alt="PCI DSS Compliance"width="30" height="15"/></a>
        <a class="Footer-brand" href="#"><Image src="C:\Users\HP\Desktop\g sfe b.png" alt="Google Safe Browsing"width="30" height="15"/></a>
      </div>

      <div className="language-selection">
        <h3>Language Selection</h3>
        <select>
          <option value="en">English</option>
          <option value="sn">Sinhala</option>
          
        </select>
       
      </div>

        </Footer>
    );
};
export default Footer;