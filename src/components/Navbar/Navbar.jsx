import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div className="tr-menu menu-responsive">
                <nav className="navbar navbar-default">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>

                    <div className="collapse navbar-left navbar-collapse" id="navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="dropdown menu-item-icon"><Link to="#"><i className="fa fa-bars"></i></Link>
                                <ul className="sub-menu" role="menu">
                                    <li><Link to="#"><i className="fa fa-file-text" aria-hidden="true"></i>Dummy Menu</Link>
                                    </li>
                                    <li className="dropdown"><Link to="#"><i className="fa fa-file-text" aria-hidden="true"></i>Dummy Menu</Link>
                                        <ul className="sub-menu-2" role="menu">
                                            <li><Link to="#">Sub Dummy Menu</Link></li>
                                            <li><Link to="#">Sub Dummy Menu</Link></li>
                                            <li><Link to="#">Sub Dummy Menu</Link></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><Link to="#"><i className="fa fa-file-text" aria-hidden="true"></i>Dummy Menu</Link>
                                        <ul className="sub-menu-2" role="menu">
                                            <li><Link to="blog-four.html"><i className="fa fa-file-text" aria-hidden="true"></i>Sub Dummy Menu</Link></li>
                                            <li><Link to="blog-five.html"><i className="fa fa-file-text" aria-hidden="true"></i>Sub Dummy Menu</Link></li>
                                            <li><Link to="blog-six.html"><i className="fa fa-file-text" aria-hidden="true"></i>Sub Dummy Menu</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown active"><Link to="#">Home</Link>
                                <ul className="sub-menu">
                                    <li><Link to="index.html">Home Default</Link></li>
                                    <li><Link to="index1.html">Home Version-1</Link></li>
                                    <li className="active"><Link to="index2.html">Home Version-2</Link></li>
                                    <li><Link to="index3.html">Home Version-3</Link></li>
                                    <li><Link to="index4.html">Home Version-4</Link></li>
                                    <li><Link to="index5.html">Home Version-5</Link></li>
                                </ul>
                            </li>
                            <li><Link to="index2.html">Business</Link></li>
                            <li><Link to="index3.html">LifeStyle</Link></li>
                            <li><Link to="common-list.html">Politics</Link></li>
                            <li><Link to="index4.html">Sports</Link></li>
                            <li><Link to="index1.html">Social</Link></li>
                            <li className="dropdown"><Link to="#">About</Link>
                                <ul className="sub-menu">
                                    <li><Link to="about.html">About Page</Link></li>
                                    <li><Link to="about1.html">About Page-1</Link></li>
                                </ul>
                            </li>
                            <li className="dropdown"><Link to="#">Details</Link>
                                <ul className="sub-menu">
                                    <li><Link to="details.html">Details Page</Link></li>
                                    <li><Link to="details1.html">Details Page-1</Link></li>
                                    <li><Link to="details2.html">Details Page-2</Link></li>
                                </ul>
                            </li>
                            <li className="dropdown"><Link to="#">Contact</Link>
                                <ul className="sub-menu">
                                    <li><Link to="contact.html">Contact Page</Link></li>
                                    <li><Link to="contact1.html">Contact Page-1</Link></li>
                                </ul>
                            </li>
                            <li><Link to="login.html">Login</Link></li>
                            <li><Link to="register.html">Register</Link></li>
                            <li><Link to="404.html">404 Page</Link></li>
                        </ul>
                    </div>
                    <ul className="feed pull-right">
                        <li><Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                        <li><Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                        <li><Link to="#"><i className="fa fa-google-plus" aria-hidden="true"></i></Link></li>
                        <li><Link to="#"><i className="fa fa-rss" aria-hidden="true"></i></Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}
