import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from "../../assets/images/logo.png";
import User from "../../assets/images/others/user.png";

export default class Header extends Component {
    render() {
        return (
            <div className="tr-topbar clearfix margin-bottom-0">
                <div className="row">
                    <div className="col-sm-3">
                        <Link className="navbar-brand" to="/">
                            <img className="img-responsive" src={Logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="col-sm-9">
                        <div className="topbar-left">
                            <div className="breaking-news">
                                <span># Newsfeed</span>
                                <div id="ticker">
                                    <ul>
                                        <li><Link to="#">Remarkable Women - character design project</Link></li>
                                        <li><Link to="#">Remarkable Women - character design project</Link></li>
                                        <li><Link to="#">Remarkable Women - character design project</Link></li>
                                        <li><Link to="#">Remarkable Women - character design project</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="topbar-right">
                            <div className="user">
                                <div className="user-image">
                                    <img className="img-responsive img-circle" src={User} alt="Image" />
                                </div>
                                <div className="dropdown user-dropdown">
                                    Hello,
                                    <Link to="#" aria-expanded="true"> Jhon Player<i className="fa fa-caret-down"
                                                                                   aria-hidden="true"></i></Link>
                                    <ul className="sub-menu text-left">
                                        <li><Link to="#">My Profile</Link></li>
                                        <li><Link to="#">Settings</Link></li>
                                        <li><Link to="#">Log Out</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="searchNlogin">
                                <ul>
                                    <li className="search-icon"><i className="fa fa-search"></i></li>
                                    <li><Link to="#"><i className="fa fa-bookmark-o" aria-hidden="true"></i></Link></li>
                                    <li><Link to="#"><i className="fa fa-bell-o" aria-hidden="true"></i></Link></li>
                                    <li className="dropdown language-dropdown">
                                        <Link to="#" aria-expanded="true">
                                            EN
                                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                                        </Link>
                                        <ul className="sub-menu text-center">
                                            <li><Link to="#">EN</Link></li>
                                            <li><Link to="#">FR</Link></li>
                                            <li><Link to="#">GR</Link></li>
                                            <li><Link to="#">ES</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className="search">
                                    <form action="#">
                                        <input type="text" className="search-form" autoComplete="off"
                                               placeholder="Type & Press Enter"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
