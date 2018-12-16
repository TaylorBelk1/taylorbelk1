import React from 'react';
import Insta from './imgs/insta.png';
import Times from './imgs/lambdatimes.png';
import Newsfeed from './imgs/newsfeed.png';
import Snj from './imgs/snj.png';
import Todo from './imgs/todo.png';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: Insta,
    altText: 'Instagram Clone',
    caption: <a href="https://github.com/TaylorBelk1/React-Insta-Clone">Check it out on GitHub!</a>,
    header: 'Insta-Clone Project'
  },
  {
    src: Times,
    altText: 'Lambda Times',
    caption: <a href="https://github.com/TaylorBelk1/Sprint-Challenge-Applied-Javascript">Check it out on GitHub!</a>,
    header: 'Lambda Times Newspaper'
  },
  {
    src: Newsfeed,
    altText: 'NewsFeed Tab/Menu Components',
    caption: <a href='https://github.com/TaylorBelk1/Newsfeed-Components'>Check it out on GitHub!</a>,
    header: 'Tab and Menu Components'
  },
  {
    src: Snj,
    altText: 'S&J Mock Project',
    caption: <a href="https://github.com/TaylorBelk1/User-Interface-Project-Week">Check it out on GitHub!</a>,
    header: 'S&J Construction'
  },
  {
    src: Todo,
    altText: 'Todo Application',
    caption: <a href="https://github.com/TaylorBelk1/React-Todo">Check it out on GitHub!</a>,
    header: 'To-Do Application'
  }
];

const Projects = () => {
  return(
    <div className="projects-wrapper">
    <h3 className="proj-intro" id="proj">Check out a few of my <span>projects:</span></h3>
      <div className="projects">
        <UncontrolledCarousel items={items} />
      </div>
    </div>
  )
};

export default Projects;