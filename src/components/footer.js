import React from 'react';
import Resume from './resume.pdf';

const Footer = () => {
    return (
        <div className="footer">

            <div className="contact">
                <h4>Contact me:</h4>
                <a href="mailto:belktaylor12@gmail.com?Subject=Contact Inquiry">bekltaylor12@gmail.com</a>
            </div>

            <div className="resume">
            <a href={Resume} download>Grab a copy of my Resume</a>
            </div>

            <div className="icons">
                <a href="https://www.linkedin.com/in/taylor-belk-387a63172/" target="_blank"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin icon" /></a>
                
                <a href="https://github.com/TaylorBelk1" target="_blank"><img src="https://img.icons8.com/color/48/000000/github.png" alt="github icon"/></a>
            </div>
        </div>
    )
} 

export default Footer;