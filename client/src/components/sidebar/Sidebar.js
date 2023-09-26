import React from 'react';
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'
import { useState } from "react";
import { showAnimation } from '../../utils';
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from './SidebarMenu';
import { MenuData } from '../Navbar/MenuData';
import TopNav from '../Navbar/TopNav';
import SideCard from '../cards/SideCard';
import MyFooter from '../Footer/MyFooter';

const Sidebar = ({ children }) => {

  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);


  return (
    <>
      <TopNav />

      <div className="main-container">
        <motion.div
          animate={{
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          {/* <div className="top_section">
            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div> */}
          <section className="routes">
            {MenuData.map((route, index) => {
              if (route.subRoutes.length > 0) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    // showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.title}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>
          <div className="main-content">{children}</div>
        </main>

        <div className="secondary-sidebar">

          <section className="about-us">
            <div className="aboutHeader">
              <span>About Us</span>
            </div>
            <div className="aboutInfo">
              <div>
                <img src={logo} height="190" width="190" className="img-fluid" alt="npc-logo" />
              </div>

              <div className="aboutVisionCol">
                <div className="aboutVisionTitle">
                  <span>Our Vision</span>

                </div>
                <div className="aboutVisionText">
                  <p>A hub of distinction for promoting and coordinating population policies and programmes in Africa</p>

                </div>
              </div>

              <div className="aboutMissionCol">
                <div className="aboutMissionTitle">
                  <span>Our Mission</span>

                </div>
                <div className="aboutMissionText">
                  <p>To improve the quality of life of the people of Uganda, by influencing Government policies and programmes to address population patterns and trends in a sustainable and inclusive manner</p>

                </div>
              </div>
            </div>
          </section>

          <section className="analyticsSection">
            <div className="analyticsSectionHead">
              <span>Analytics Section</span>
            </div>

            <SideCard
              className="side-card"
              text="Website Vists"
              primaryText="20,582"
              secondaryText="vs previous 30 days"
              otherText="180"
            />
            <SideCard
              className="side-card"
              text="Page Views"
              primaryText="22,495"
              secondaryText="vs previous 30 days"
              otherText="29"
            />
          </section>
        </div>
      </div>

      <MyFooter />

    </>
  );
};
export default Sidebar