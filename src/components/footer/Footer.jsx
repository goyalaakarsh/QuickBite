import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer >
            <div className='name'>
                <h2>QuickBite</h2>
            </div>
            <div className='footer_social-icons'>
                <i className="uil uil-instagram footer_icon "></i>
                <i className="uil uil-github footer_icon "></i>
                <i className="uil uil-linkedin footer_icon "></i>
            </div>
            <div className='copyright'>
                <p>© Copyright 2024. All rights reserved. </p>
            </div>
        </footer>
    )
}

export default Footer