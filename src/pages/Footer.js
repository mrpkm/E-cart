import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/footer.css'
// import './Footer.css'; // Your footer's CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__section">
                    <h3>About Us</h3>
                    <p>Discover our story and mission.</p>
                    <Link to="#">Learn More</Link>
                </div>
                <div className="footer__section">
                    <h3>Customer Service</h3>
                    <ul>
                        <li><Link to="#">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="footer__section">
                    <h3>Shop</h3>
                    <ul>
                        <li><Link to="/list">Products</Link></li>
                    </ul>
                </div>

            </div>
            <div className="second">
                <div className="footer__sectionl">
                    <div className="socialMeida">
                        <div>
                            <h3>Follow Us</h3>
                            <p>Stay updated on our latest news and offers.</p>
                        </div>
                        <div className="footer__social">
                            <a href="#">Facebook</a>
                            <a href="#">Twitter</a>
                            <a href="#">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <p>&copy; {new Date().getFullYear()} Your E-commerce. All rights reserved.</p>
                <p><Link to="/privacy">Privacy Policy</Link> | <Link to="/terms">Terms & Conditions</Link></p>
            </div>
        </footer>
    );
};

export default Footer;
