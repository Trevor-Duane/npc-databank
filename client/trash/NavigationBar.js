import React, { useState } from "react";

// ICONS
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi"

import { IconContext } from "react-icons";

// ROUTING

import { Link } from "react-router-dom";

// DATA FILE
import { MenuData } from "./MenuData";
// STYLES
import "./Navbar.css";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        {/* All the icons now are white */}
        <div className="main-navbar">
          <div className="main-navbar-left">
            <img className="img-fluid" src="http://154.72.200.77:8080/ords/npc/r/148/files/static/v21/logo_npccc-01.png" height="80" width="80" alt="NPC logo" />
            <span>National Population Databank</span>
          </div>
          <div className="main-navbar-right">
            <FaIcons.FaUserCircle size={28} />
            <span>Login</span>
          </div>
        </div>
        {/* <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div> */}
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              {/* <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link> */}
            </li>

            {MenuData.map((item, index) => {
              if (item.subRoutes.length > 0) {
                return (
                  <div className="insideMenu">
                    <div className="insideMenu-item">
                      <li className={item.cName}>
                        <Link>
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    </div>
                    <div>
                      <FaIcons.FaAngleDown />
                    </div>
                    <div>
                    {item.subRoutes.map((subRoute, i) => {
                      <li key={i} className={subRoute.cName}>
                        <Link to={subRoute.path}>
                          <span>{subRoute.title}</span>
                        </Link>
                      </li>
                    })}
                    </div>
                  </div>
                )
              }
              return (
               <ul>
                 <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
               </ul>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
