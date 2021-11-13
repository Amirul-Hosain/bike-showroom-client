import React from 'react';
import './Footer.css'
import logo from '../../../../src/images/logo/bike-logo.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container footer-container'>
                <div className='row footer-detail'>
                    <div className="footer-logo  col-lg-4 col-sm-6 col-12">
                        <img width='100' height='100' src={logo} alt="" />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, harum? Vitae perferendis illum asperiores vero!</p>
                    </div>

                    <div className="footer-contact  col-lg-4 col-sm-6 col-12">
                        <h2 style={{ borderBottom: '1px solid gray', width: '130px' }}>Contact</h2>
                        <p><i class="fas fa-map-marker-alt"></i> Kochukhet 21, Mirpur-10,  Dhaka, Bangladesh</p>
                        <p><i class="fas fa-phone"></i> Phone: 0123456789</p>
                        <p><i class="fas fa-envelope"></i> super@bike.com</p>
                    </div>


                    <div className="footer-social  col-lg-4 col-sm-6 col-12">
                        <h2 style={{ borderBottom: '1px solid gray', width: '120px' }}>Flow us</h2>
                        <a href="/"><i class="fab fa-facebook-square social-icon"></i></a>
                        <a href="/"><i class="fab fa-twitter-square  social-icon"></i></a>
                        <a href="/"><i class="fab fa-instagram-square social-icon"></i></a>
                        <a href="/"><i class="fab fa-linkedin social-icon"></i></a>
                    </div>
                </div>
            </div>
            <hr style={{ color: 'white', width: '85%', margin: 'auto' }} />
            {/* copy right */}
            <p className='copy-right'><i class="far fa-copyright"></i> Copyright Super Bike Showroom | All Right Reserved | Designed and Developed by Dev Amirul</p>
        </div>
    );
};

export default Footer;