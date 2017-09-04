import React, {PropTypes} from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import '../../styles/MobileMenu.css';


const MobileMenu = ({closeMenu,showMenu}) => {
  return (
    <CSSTransitionGroup
      transitionName="example"
      className={"mobile_menu_container " + (showMenu ? 'show' : 'hidden')}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}>
      <aside>
        <ul className="desktop_nav">
          <li onClick={closeMenu}>Close menu</li>
        </ul>
      </aside>
    </CSSTransitionGroup>

  );
};

MobileMenu.propTypes = {
  closeMenu: React.PropTypes.func.isRequired,
  showMenu:React.PropTypes.bool.isRequired
};

export default MobileMenu;
