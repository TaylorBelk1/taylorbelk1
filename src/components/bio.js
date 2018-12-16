import React from 'react';
import Skills from './skillset';

const Bio = () => {
    return(
        <div id="bio-skill-container">
            <div id="bio">
                <img id="thumbnail" src={require('./me.jpg')} alt="Taylor Belk"/>
                <h3>Get to know your <span>future employee:</span></h3>
                <p>I'm determined, passionate, eager to learn, and pick things up quickly. I thrive in stressful and challenging situations. Learning something new is beyond exciting to me, I love watching my skills increase over time and watching my applications evolve as they do!</p> 
                <p>I have experience in HTML5, CSS6, JavaScript ECMA 5 and 6, React.js, Bootstrap and ReactStrap. I'm not married to those languages, frameworks and libraries though, as I said I love learning and challenging myself! I am confident that you can lay any challenge in front of me and I can complete it.</p>
            
            </div>
            <div className="skillset">
                <Skills />
            </div>
        
    </div>
    )
}

export default Bio