import { Link } from "react-router-dom";

import "../styles/Nav.css";

import { menuItems } from "../menuItems";
import MenuItems from './MenuItems';

const NavigationBar = () => {

  return (
    <nav className='navbar'>
      <ul className="menus">

        <div>
          <li><strong>My Personal Website</strong></li>
        </div>

        <div className="menu-items-container font-quicksand">
          {menuItems.map((menu, index) => {
            const depthLevel = 0;
            return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
          })}
        </div>

      </ul>
    </nav>
  );
};

export default NavigationBar;
