import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Header = () => {
    return(
        <div className="header-wrap">
            <div className="tagline">
                <h1>Hi, I'm <span>Taylor Belk</span>,</h1>
                <h1>I'm a Full-Stack Web Developer.</h1>
                <button className="btn btn-primary" ><AnchorLink href="#bio-skill-container" id="butn">Check Me Out!</AnchorLink></button>
            </div>
            
        </div>
    )
}

export default Header