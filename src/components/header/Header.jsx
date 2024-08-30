import React, { useState } from 'react'
import './header.css'
import "../../App.css";
import '../hero/Hero'

const Header = () => {
    /* === Toggle Menu === */
    const [Toggle, showMenu] = useState(false);
    // const showMenu = () => showMenu(!Toggle);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="/" className="nav_logo">Quick<span>Bite</span></a>

                <div className={Toggle ? "nav_menu show_menu" : "nav_menu"}>

                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <a href="/" className="nav_link active-link">
                                <i className="uil uil-estate nav_icon "></i>
                                Home
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#menu" className="nav_link">
                                <i className="uil uil-file-alt nav_icon"></i>
                                Menu
                            </a>
                        </li>

                        {/* <li className="nav_item">
                            <a href="#projects" className="nav_link">
                                <i className="uil uil-scenery nav_icon"></i>
                                Projects
                            </a>
                        </li> */}

                        <li className="nav_item">
                            <a href="#contact" className="nav_link">
                                <i className="uil uil-message nav_icon"></i>
                                Contact Us
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav_close" onClick={() => showMenu(!Toggle)}></i>


                </div>

                <div className='nav_btns grid'>

                    {/* <i className="uil uil-search nav_btn-icon"></i> */}
                    <a href="/cart" >
                        <i className="fa-solid fa-cart-shopping nav_btn-icon"></i>
                    </a>

                    {/* <button className='button' id='nav_signin'>Sign in</button> */}
                    <img src="https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg" alt="" className='header-user-logo'/>
                </div>
                <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header