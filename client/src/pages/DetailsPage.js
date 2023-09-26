import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import { AiTwotoneCopy } from 'react-icons/ai'
import '../styles/detailsPage.css'

function Population() {
  const location = useLocation();

  const [toggleState, setToggleState] = React.useState(1)

  const toggleTab = (index) => {
    console.log(index)
    setToggleState(index)
  }
  return (
    <section className="detailsSection">
      <div className="pageBreadCrumb">
        <nav>
          <Link to="/"
            className={location.pathname.startsWith("/") ? "breadcrumb-active" : "breadcrumb-not-active"}
          >
            Population Indicators
          </Link>
          <span className="breadcrumb-arrow">&gt;</span>
          <Link to="/population"
            className={location.pathname === "/products/1" ? "breadcrumb-active" : "breadcrumb-not-active"}
          >
            Population
          </Link>
        </nav>

      </div>
      <div className="populationSectionHead">
        <h4>Population</h4>
      </div>

      <div className="populationSectionText">
        <p>Population is defined as all nationals present in, or temporarily absent from a country, and aliens
          permanently settled in a country. This indicator shows the number of people that usually live in an
          area. Growth rates are the annual changes in population resulting from births, deaths and net
          migration during the year. Total population includes the following: national armed forces stationed
          abroad; merchant seamen at sea; diplomatic personnel located abroad; civilian aliens resident in
          the country; displaced persons resident in the country. However, it excludes the following: foreign
          armed forces stationed in the country; foreign diplomatic personnel located in the country; civilian
          aliens temporarily in the country. Population projections are a common demographic tool. They provide
          a basis for other statistical projections, helping governments in their decision making.
          This indicator is measured in terms of annual growth rate and in thousands of people.</p>
      </div>
      <div className="populationSectionContent">
        <div className="tab">
          <button className={toggleState === 1 ? "tablink active-tablink" : "tablink"} onClick={() => toggleTab(1)}><AiTwotoneCopy size={16} color="#43d4be"/>Young population</button>
          <button className={toggleState === 2 ? "tablink active-tablink" : "tablink"} onClick={() => toggleTab(2)}><AiTwotoneCopy size={16} color="#43d4be"/>Eldery population</button>
          <button className={toggleState === 3 ? "tablink active-tablink" : "tablink"} onClick={() => toggleTab(3)}><AiTwotoneCopy size={16} color="#43d4be"/>Working age population</button>
        </div>

        <div id="1" className={toggleState === 1 ? "tabcontent active-tabcontent" : "tabcontent"}>
          <h3>Population</h3>
          <p>Tempor deserunt anim laborum quis fugiat cupidatat. Ex veniam officia et cillum eiusmod est nostrud. Elit elit tempor quis ipsum ipsum ut est. Sit laboris non anim deserunt occaecat quis reprehenderit culpa eiusmod commodo ullamco id voluptate minim. Do esse nostrud ut sunt aliqua amet et voluptate duis dolor cupidatat proident. Laborum proident ea quis proident commodo laboris pariatur. Incididunt duis voluptate sunt voluptate velit sunt culpa.</p>
        </div>

        <div id="2" className={toggleState === 2 ? "tabcontent active-tabcontent" : "tabcontent"}>
          <h3>Eldery Population</h3>
          <p>Reprehenderit irure elit nulla eiusmod cillum dolor commodo. Ut sunt aliqua minim eiusmod nulla proident dolore sit magna nostrud dolor ad quis do. Non commodo cupidatat cillum elit adipisicing eiusmod. Ipsum enim dolor ad minim minim mollit excepteur dolor laboris ut enim proident sunt. Enim commodo tempor voluptate laboris ex nisi dolor ut Lorem ut. Tempor incididunt magna cupidatat nostrud eiusmod cillum incididunt ad..</p>
        </div>

        <div id="3" className={toggleState === 3 ? "tabcontent active-tabcontent" : "tabcontent"}>
          <h3>Youth Population</h3>
          <p>Sunt do dolor dolore adipisicing amet Lorem sunt culpa incididunt minim amet. Dolor dolore nisi ad labore ut eu. Nisi aliqua magna pariatur do tempor eiusmod eu.</p>
        </div>
      </div>
    </section>
  )
}

export default Population