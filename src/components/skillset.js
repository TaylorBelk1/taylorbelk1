import React from 'react';
import { Progress } from 'reactstrap';

const Skills = () => {
  return (
    <div className="skillset">
      <h3>What do I know?</h3>
      <div className="text-center">HTML5</div>
      <Progress value="70"/>
      <div className="text-center">CSS</div>
      <Progress value="60" />
      <div className="text-center">LESS</div>
      <Progress value={60} />
      <div className="text-center">JavaScript</div>
      <Progress value="70" />
      <div className="text-center">React.js</div>
      <Progress value={50} />
      <div className="text-center">BootStrap/ReactStrap</div>
      <Progress value="40" />
      <div className="text-center">UI/UX</div>
      <Progress value="30" />
      <div className="text-center">Git Version Control</div>
      <Progress value="80" />
    </div>
  );
};

export default Skills;