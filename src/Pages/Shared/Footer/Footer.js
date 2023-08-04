import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='footer-bg-color mt-5'>

            <div className='row'>
            <div className="col ">
            <Link to={"/"} className="fw-bold text-decoration-none ms-3" href="#home"><span className="fs-2 text-white">Sky</span> <span className="bg-danger text-white px-1 rounded">News</span></Link>
            </div>
            </div>
            <div className='text-center'>
                <p className='text-white p-2'>Copyright © 2023 Sky News.All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;