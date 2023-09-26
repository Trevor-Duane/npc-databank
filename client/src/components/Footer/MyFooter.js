import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaRss, FaTwitter, FaVoicemail, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/logo.png'
import './footer.css'

function MyFooter() {
    return (
        <section className="footerSection">
            <div className="footerItemsWrapper">
                <div className="footerAboutItem">
                    <img className="img-fluid" src={logo} height="140" width="140" alt="NPC logo" />
                    <h6>National Population Databank</h6>
                    <p>Implementation of the National Population Policy and Programme</p>
                </div>
                <div className="footerItemCenter">
                    <ul>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div className="footerItemSocial">
                    <p>Follow Us</p>
                    <div>
                        <FaFacebook className="socialMedisLink" size={28} color="#fff" />
                        <FaTwitter className="socialMedisLink" size={28} color="#fff" />
                        <FaYoutube className="socialMedisLink" size={28} color="#fff" />
                        <FaLinkedin className="socialMedisLink" size={28} color="#fff" />
                        <FaInstagram className="socialMedisLink" size={28} color="#fff" />
                        <FaRss className="socialMedisLink" size={28} color="#fff" />
                        <FaVoicemail className="socialMedisLink" size={28} color="#fff" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default MyFooter