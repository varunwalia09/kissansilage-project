import React, { useState } from "react";

// Import Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
    // State variables for form inputs
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [message, setMessage] = useState("");

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the form from being submitted automatically

        // Handle the form submission logic (e.g., send data to the server)
        console.log("Form submitted:", { name, mobile, email, message });

        // Clear the form fields
        setName("");
        setEmail("");
        setMobile("");
        setMessage("");
    };

    return (
        <div className="contact-page">
            <div className="cont-img">
                <img src="./assests/logo1.jpg" alt="about2.jpg" />
            </div>
            
            <div className="contact-container">
                <h2>Contact Us</h2>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile:</label>
                        <input
                            type="text"
                            id="mobile"
                            name="mobile"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            required
                        />
                      
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit">Submit</button>
                </form>
                
                {/* Social media links */}
                <div className="social-links">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a className="facebook"
                            href="https://www.facebook.com/your-profile"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a className="twitter"
                            href="https://twitter.com/your-profile"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        <a className="instagram"
                            href="https://www.instagram.com/your-profile"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                        <a className="linkedin"
                            href="https://www.linkedin.com/your-profile"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                    </div>
                </div>
            </div>
            <h2 className="address">
              Address : Vill- Pubri, Opp Anaj Mandi, City-Rajpura,
              Distt - Patiala, Punjab Pincode-140401
              </h2>
              <a className="address1" href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel="noopener noreferrer">
            Click any Query = Email : silagekissan@gmail.com
            </a>
              <h3 className="address2">Mobile : (+91) 76528-58035, 88720-05235</h3>
              <a className="address3" href="https://www.google.com/maps/place/kissan+silage,+rajpura/@30.4689884,76.5373062,15z/data=!4m6!3m5!1s0x390fdf52ff1678a7:0x78190d8b94ae39cf!8m2!3d30.4689884!4d76.5373062!16s%2Fg%2F11rzswfgc3?entry=ttu" target="_blank" rel="noopener noreferrer">
            Google Map Location Here = Kissan Silage, Rajpura, Punjab
            </a>

        </div>
        
    );
}

export default Contact;
