import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FooterLogo from '../../assets/images/footer-logo.png'

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <div className="footer-menu">
                    <div className="container">
                        <ul className="nav navbar-nav">
                            <li className="active"><Link to="#">Home</Link></li>
                            <li><Link to="#">About</Link></li>
                            <li><Link to="#">Products</Link></li>
                            <li><Link to="#">Career</Link></li>
                            <li><Link to="#">Advertisement</Link></li>
                            <li><Link to="#">Team</Link></li>
                            <li><Link to="#">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-widgets">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="widget widget-menu-2">
                                    <h2>Category</h2>
                                    <ul>
                                        <li><Link to="#">Business</Link></li>
                                        <li><Link to="#">Politics</Link></li>
                                        <li><Link to="#">Sports</Link></li>
                                        <li><Link to="#">World</Link></li>
                                        <li><Link to="#">Technology</Link></li>
                                        <li><Link to="#">Environment</Link></li>
                                        <li><Link to="#">Health</Link></li>
                                        <li><Link to="#">Entertainment</Link></li>
                                        <li><Link to="#">Lifestyle</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="widget">
                                    <h2>Editions</h2>
                                    <ul>
                                        <li><Link to="#">United States</Link></li>
                                        <li><Link to="#">China</Link></li>
                                        <li><Link to="#">India</Link></li>
                                        <li><Link to="#">Maxico</Link></li>
                                        <li><Link to="#">Middle East</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="widget widget-menu-3">
                                    <h2>Tag</h2>
                                    <ul>
                                        <li><Link to="#">Gallery</Link></li>
                                        <li><Link to="#">Sports</Link></li>
                                        <li><Link to="#">Featured</Link></li>
                                        <li><Link to="#">Fashion</Link></li>
                                        <li><Link to="#">Entertainment</Link></li>
                                        <li><Link to="#">Business</Link></li>
                                        <li><Link to="#">Tech</Link></li>
                                        <li><Link to="#">Movies</Link></li>
                                        <li><Link to="#">Music</Link></li>
                                        <li><Link to="#">Packages</Link></li>
                                        <li><Link to="#">Amazon</Link></li>
                                        <li><Link to="#">Cars</Link></li>
                                        <li><Link to="#">Phones</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="widget">
                                    <h2>Products</h2>
                                    <ul>
                                        <li><Link to="#">Ebooks</Link></li>
                                        <li><Link to="#">Newsfeeds</Link></li>
                                        <li><Link to="#">Reprints & Permissions</Link></li>
                                        <li><Link to="#">Magazine</Link></li>
                                        <li><Link to="#">College Guide</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom text-center">
                    <div className="container">
                        <div className="footer-bottom-content">
                            <div className="footer-logo">
                                <Link to="index.html"><img className="img-responReactsive" src={FooterLogo}
                                                          alt="Logo"/></Link>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <address>
                                <p>&copy; 2017 <Link to="#">Newshub</Link>. Email: <Link to="#">info@newshub.com</Link> |
                                    News: <Link to="#">news.newshub.com</Link> | Advertising: <Link to="#">ad.newshub.com</Link>
                                    <br/>Phone: + 1234 8812345, 880112345 + 1359, 6356 + 112-11-9874</p>
                            </address>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
