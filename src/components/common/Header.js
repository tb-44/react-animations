import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import '../../styles/Header.css';


const Header = ({loading,openMobileMenu}) => {
  return (
    <nav className="main_header">
    <div className="logo"></div>
      <ul className="desktop_nav">
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        {" | "}
        <Link to="/courses" activeClassName="active">Courses</Link>
        {" | "}
        <Link to="/about" activeClassName="active">About</Link>
        {loading && <LoadingDots interval={100} dots={20}/>}
      </ul>

      <ul className="mobile_nav">
      
        <li to="/" activeClassName="active" onClick={openMobileMenu}>Open menu</li>
      </ul>
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  openMobileMenu:PropTypes.func.isRequired
};

export default Header;
