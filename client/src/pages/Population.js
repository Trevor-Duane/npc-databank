import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import sratio from '../assets/sex-ratio.png'
import grate from '../assets/growthrate.png'
import { AiTwotoneCopy } from 'react-icons/ai'
import '../styles/page.css'
import { FaArrowRight } from 'react-icons/fa';

function Population() {
  const location = useLocation();

  const [toggleState, setToggleState] = React.useState(1)

  const toggleTab = (index) => {
    console.log(index)
    setToggleState(index)
  }
  return (
    <section className="pageSection">
      <div className="pageBreadCrumb">
        <nav>
          <Link to="/"
            className={location.pathname.startsWith("/") ? "breadcrumb-active" : "breadcrumb-not-active"}
          >
            Population Indicators
          </Link>
          <span className="breadcrumb-arrow">&gt;</span>
          <Link to="/page"
            className={location.pathname === "/page" ? "breadcrumb-active" : "breadcrumb-not-active"}
          >
            Population
          </Link>
        </nav>

      </div>
      <div className="pageSectionHead">
        <h4>Population</h4>
      </div>

      <div className="pageSectionText">
        <p>page is defined as all nationals present in, or temporarily absent from a country, and aliens
          permanently settled in a country. This indicator shows the number of people that usually live in an
          area. Growth rates are the annual changes in page resulting from births, deaths and net
          migration during the year. Total page includes the following: national armed forces stationed
          abroad; merchant seamen at sea; diplomatic personnel located abroad; civilian aliens resident in
          the country; displaced persons resident in the country. However, it excludes the following: foreign
          armed forces stationed in the country; foreign diplomatic personnel located in the country; civilian
          aliens temporarily in the country. page projections are a common demographic tool. They provide
          a basis for other statistical projections, helping governments in their decision making.
          This indicator is measured in terms of annual growth rate and in thousands of people.</p>
      </div>

      <div className="pageSectionGraphs">
        <div className="pageSectionRow">
          <div className="pageSectionColLeft">
            <div>
              <h6><span>Indicator: </span>Infant Mortality</h6>
            </div>
            <div>
              <img src={sratio} height="600" width="600" className="img-fluid" alt="npc-logo" />
            </div>
            <div>
              <p>Velit qui amet eiusmod pariatur qui laboris velit. Est occaecat laborum ut amet veniam ut sit nisi eiusmod nostrud irure. Minim cillum quis adipisicing qui.</p>
            </div>
          </div>

          <div className="pageSectionColRight">
            <div>
              <h6><span>Indicator: </span>Infant Mortality</h6>
            </div>
            <div>
              <img src={sratio} height="600" width="600" className="img-fluid" alt="npc-logo" />
            </div>
            <div>
            <p>Velit qui amet eiusmod pariatur qui laboris velit. Est occaecat laborum ut amet veniam ut sit nisi eiusmod nostrud irure. Minim cillum quis adipisicing qui.</p>
              
            </div>
          </div>
        </div>

        <div className="pageSectionRow">
          <div className="pageSectionColLeft">
            <div>
              <h6><span>Indicator: </span>HIV Prevailance</h6>
            </div>
            <div>
              <img src={grate} height="600" width="600" className="img-fluid" alt="npc-logo" />

            </div>
            <div>
            <p>Velit qui amet eiusmod pariatur qui laboris velit. Est occaecat laborum ut amet veniam ut sit nisi eiusmod nostrud irure. Minim cillum quis adipisicing qui.</p>

            </div>
          </div>

          <div className="pageSectionColRight">
            <div>
              <h6><span>Indicator: </span>Life Expectancy at birth</h6>
            </div>
            <div>
              <img src={grate} height="600" width="600" className="img-fluid" alt="npc-logo" />
            </div>
            <div>
            <p>Velit qui amet eiusmod pariatur qui laboris velit. Est occaecat laborum ut amet veniam ut sit nisi eiusmod nostrud irure. Minim cillum quis adipisicing qui.</p>
              
            </div>
          </div>
        </div>
      </div>

      <div className="pageSectionExplore">

        <div className="pageSectionExploreHead">
          <h4>Explore More Indicators</h4>
        </div>

        <div className="pageSectionExploreLinks">
          <ul>
            <li>Health</li>
            <li>Education</li>
            <li>Economy</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Population