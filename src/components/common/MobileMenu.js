import React, {PropTypes} from 'react';
import '../../styles/MobileMenu.css';

const MobileMenu = ({closeMenu,showMenu}) => {

  return (
      <aside  className={"mobile_menu_container " + (showMenu ? 'show' : 'hidden')} >
        <ul className="">
          <li className={"mobile_menu_link " + (showMenu ? 'show_link' : 'hide_link')}>Home</li>
          <li className={"mobile_menu_link " + (showMenu ? 'show_link' : 'hide_link')}>Course</li>
          <li className={"mobile_menu_link " + (showMenu ? 'show_link' : 'hide_link')}>About</li>
        </ul>
      </aside>
  );
};

MobileMenu.propTypes = {
  closeMenu: React.PropTypes.func.isRequired,
  showMenu:React.PropTypes.bool.isRequired
};

export default MobileMenu;
