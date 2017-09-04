import React from 'react';

class AboutPage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>About page</h1>
        <Link to="about" className="btn btn-primary btn-lg"/>
      </div>
    );
  }
}

export default AboutPage;
