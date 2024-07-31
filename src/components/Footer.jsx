import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer">
                    <div className="footer-first">
                        <h3>Sunny kabira Portfolio</h3>
                    </div>
                    <div className="footer-third">
                        <ul>
                            <a href="https://github.com/kabirasunny">
                                <li><i className="fa-brands fa-github"></i></li>
                            </a>
                            <a href="https://www.linkedin.com/in/sunnykabira05">
                                <li><i className="fa-brands fa-linkedin"></i></li>
                            </a>
                            <a href="/">
                                <li><i className="fa-brands fa-instagram"></i></li>
                            </a>
                            <a href="/">
                                <li><i className="fa-brands fa-x-twitter"></i></li>
                            </a>
                        </ul>
                    </div>
                </div>
                <div className="footer-rights">
                    Copyright &#169; sunnysportfolio.com | All rights reserved.
                </div>
            </footer >
        </div >
    )
}

export default Footer
