import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron animateContainer">
        <h1>DevMountain</h1>
        <p>Animating using css keyframes, React, Redux and React Router in ES6</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
