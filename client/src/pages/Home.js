import React from 'react';
import pie from '../assets/pie.png'
import pyramid from '../assets/pyramid2.png'
import grate from '../assets/growthrate.png'
import sratio from '../assets/sex-ratio.png'
import imrate from '../assets/infant-m.png'
import frate from '../assets/fertility.svg'
import '../styles/componentStyles.css'
import '../styles.css'
import Button from '../components/formComponents/Button';
import Dropdown from '../components/formComponents/Dropdown';
import { useNavigate } from 'react-router-dom';
// import { handleDropdownChange } from '../helpers/Helpers';

const options = [
    { label: "2023", value: 1 },
    { label: "2022", value: 2 },
    { label: "2021", value: 3 },
];

function Home() {
    const navigate = useNavigate();

    const navigateToDetails = () => {
        navigate('/population_indicators/population')
    }

    return (
        <div className="home-content">
            <div>
                {/* pie graph seection */}
                <section className="current-population">
                    <div className="spans-section">
                        <div>
                            <span>Current Population</span>
                        </div>
                        <div>
                        <div>
                            <Button type="outline" onClick={navigateToDetails}>
                                Explore
                            </Button>

                        </div>
                        <div>
                            <Button type="solid" onClick={navigateToDetails}>
                                Get this data
                            </Button>

                        </div>
                        </div>
                        
                    </div>

                    <div className=" pie-graph">
                        <div className="pie-left">
                            <img src={pie} height="400" width="400" className="img-fluid" alt="npc-logo" />
                            <span className="pie-center">
                                <p className="fw-bold">Total Population</p>
                                <p className="fw-lighter">45,039,000</p>
                            </span>
                        </div>

                        <div className="pie-right">
                            <div>
                                <span>Implication</span>
                            </div>
                            <div>
                                <p>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, m
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, m
                                    aking it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
                                    aking it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
                                    more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
                                    more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* population pyramid section */}
                <section className="population-pyramid">
                    <div className="spans-section">
                        <div>
                            <span>Population Pyramid of Uganda</span>
                        </div>
                        <div>
                            <div>
                                <Dropdown
                                    id={"dd1"}
                                    name={"ddpyramid"}
                                    options={options}
                                    className="pyramidDropdown"
                                    handleChange={() => { }}
                                />
                            </div>
                            <div>
                                <Button type="solid" onClick={() => { }}>
                                    Get this data
                                </Button>
                            </div>


                        </div>
                    </div>

                    <div className="pyramid-graph">
                        <div className="pyramid-left">
                            <img src={pyramid} height="800" width="800" className="img-fluid" alt="npc-logo" />

                        </div>
                        <div className="pyramid-right">
                            <div>
                                <span>Implication</span>

                            </div>
                            <div>
                                <p>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, m
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, m
                                    aking it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
                                    aking it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
                                    more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
                                    more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* line graphs */}
                <section className="sectionWrapper">
                    <div className="leftSection">
                        <div className="spans-section">
                            <div>
                                <span>Population Growth Rate</span>

                            </div>
                            <div>
                                <Button type="solid" onClick={() => { }}>
                                    Get this data
                                </Button>

                            </div>
                        </div>
                        <div className="graphWrapper">
                            <img src={grate} height="600" width="600" className="img-fluid" alt="npc-logo" />
                        </div>

                    </div>
                    <div className="rightSection">
                        <div className="spans-section">
                            <div>
                                <span>Sex Ratio</span>

                            </div>
                            <div>
                                <Button type="solid" onClick={() => { }}>
                                    Get this data
                                </Button>

                            </div>
                        </div>
                        <div className="sex-ratio">
                            <img src={sratio} height="600" width="600" className="img-fluid" alt="npc-logo" />
                        </div>
                    </div>
                </section>

                {/* line graphs */}
                <section className="sectionWrapper">
                    <div className="leftSection">
                        <div className="spans-section">
                            <div>
                                <span>Population Growth Rate</span>

                            </div>
                            <div>
                                <Button type="solid" onClick={() => { }}>
                                    Get this data
                                </Button>

                            </div>
                        </div>
                        <div className="graphWrapper">
                            <img src={frate} height="600" width="600" className="img-fluid" alt="npc-logo" />
                        </div>
                    </div>

                    <div className="rightSection">
                        <div className="spans-section">
                            <div>
                                <span>Infant Mortality Rate</span>

                            </div>
                            <div>
                                <Button type="solid" onClick={() => { }}>
                                    Get this data
                                </Button>

                            </div>
                        </div>
                        <div className="graphWrapper">
                            <img src={imrate} height="600" width="600" className="img-fluid" alt="npc-logo" />
                        </div>
                    </div>
                </section>

                {/* line graphs */}
                <section className="sectionWrapper">
                    <div className="leftSection">
                        <div className="spans-section">
                            <div>
                                <span>Unmate Need for Family Planning(Currently Married)</span>

                            </div>
                            <div>
                                <Button type="solid" onClick={() => { }}>
                                    Get this data
                                </Button>

                            </div>
                        </div>
                        <div className="graphWrapper">
                            <img src={frate} height="600" width="600" className="img-fluid" alt="npc-logo" />
                        </div>
                    </div>
                    <div className="rightSectionDisabled">
                        <div>
                            {/* <span>Infant Mortality Rate</span> */}
                            {/* <span className="spanButton">Get this data</span> */}

                        </div>
                        <div className="graphWrapper">
                            {/* <img src={imrate} height="600" width="600" className="img-fluid" alt="npc-logo" /> */}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home