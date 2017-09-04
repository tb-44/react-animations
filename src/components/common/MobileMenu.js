import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import '../../styles/MobileMenu.css';


const MobileMenu = ({closeMenu,showMenu}) => {
  return (
    <aside className={"mobile_menu_container " + (showMenu ? 'show' : 'hidden')}>
      <ul className="desktop_nav">
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        {" | "}
        <Link to="/courses" activeClassName="active">Courses</Link>
        {" | "}
        <Link to="/about" activeClassName="active">About</Link>
      </ul>
    </aside>
  );
};

MobileMenu.propTypes = {
  closeMenu: React.PropTypes.func.isRequired,
  showMenu:React.PropTypes.bool.isRequired
};

export default MobileMenu;
