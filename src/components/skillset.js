import React from 'react';
import { Progress } from 'reactstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Skills = () => {
  return (
    <div className="skillset">

      <h3>What do I know?</h3>
      
      <div className="text-center">HTML5</div>
      <Progress animated value="70"/>

      <div className="text-center">CSS</div>
      <Progress animated value="60" />

      <div className="text-center">LESS</div>
      <Progress animated value={60} />

      <div className="text-center">JavaScript</div>
      <Progress animated value="70" />

      <div className="text-center">React.js</div>
      <Progress animated value={50} />

      <div className="text-center">BootStrap/ReactStrap</div>
      <Progress animated value="40" />

      <div className="text-center">UI/UX</div>
      <Progress animated value="30" />

      <div className="text-center">Git Version Control</div>
      <Progress animated value="80" />

      <div className="next">
        <AnchorLink href="#proj">
        <img src="https://img.icons8.com/color/48/000000/expand-arrow.png" />
        </AnchorLink>
      </div>

    </div>
  );
};

export default Skills;