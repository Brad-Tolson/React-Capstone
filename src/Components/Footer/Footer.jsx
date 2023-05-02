import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="about-us">
          <h3>About Us</h3>
          <p>
            At the Pet Adoption Hub, we are dedicated to finding loving homes
            for pets in need. With four shelters located on the north, south,
            east, and west sides of the city, we strive to make pet adoption as
            convenient and accessible as possible. Our team of experienced
            professionals works tirelessly to provide the best possible care for
            our animals and to match them with the perfect families. Contact us
            today to learn more about our adoption process or to make a donation
            to support our mission.
          </p>
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Main Street</p>
        </div>

        <div className="social-media">
          <h3>Connect with Us</h3>
          <p>Follow us on social media for updates and cute pictures of our pets available for adoption:</p>
          <ul>
            <li>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copywrite">
        <p>&copy; 2023 Pet Adoption Hub. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
