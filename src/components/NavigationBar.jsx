import { Link } from "react-router-dom";

import "../styles/Nav.css";

import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";

import Logo from "../media/Logo Cloud Background.svg"
import Logo1 from "../media/Logo Cloud.svg"

const NavigationBar = () => {

  return (
    <nav className="navbar montserrat-400-font" >
      <ul className="menus">
        <div>
        <Link to="/" className="logo-name">
          <img src={Logo}/>
          <li>
            <strong>Shamayal Syed</strong>
          </li>
        </Link>
        </div>

        <div className="menu-items-container">
          {menuItems.map((menu, index) => {
            const depthLevel = 0;
            return (
              <MenuItems items={menu} key={index} depthLevel={depthLevel} />
            );
          })}
        </div>

        <div>
          <p>Dark/Light Mode</p>
        </div>
      </ul>
    </nav>
  );
};

export default NavigationBar;
