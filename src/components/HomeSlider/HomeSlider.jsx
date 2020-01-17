import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Slider1 from '../../assets/images/post/slider1.jpg';
import Slider3 from '../../assets/images/post/slider3.jpg';
import Slider4 from '../../assets/images/post/slider4.jpg';
import Slider5 from '../../assets/images/post/slider5.jpg';

export default class HomeSlider extends Component {
    render() {
        return (
            <div className="tr-home-slider slider-style-two">
                <div id="home-carousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#home-carousel" data-slide-to="0" className="active">
                            <span className="catagory">World</span>
                            <span className="indicators-title">U.S. marshal killed serving warrant at mobile</span>
                        </li>
                        <li data-target="#home-carousel" data-slide-to="1">
                            <span className="catagory">Technology</span>
                            <span className="indicators-title">Chelsea Handler slams Angelina yet again</span>
                        </li>
                        <li data-target="#home-carousel" data-slide-to="2">
                            <span className="catagory">Business</span>
                            <span className="indicators-title">Mirum est notare quam littera gothica</span>
                        </li>
                        <li data-target="#home-carousel" data-slide-to="3">
                            <span className="catagory">Politics</span>
                            <span className="indicators-title">Duis autem vel eum iriure dolor in hendrerit in</span>
                        </li>
                    </ol>

                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <div className="item-content">
                                <div className="item-image-content" data-animation="animated slideInLeft">
                                    <div className="item-image" style={{ backgroundImage: `url(${Slider3})` }}>
                                    </div>
                                </div>
                                <div className="post-content"  data-animation="animated fadeInDown">
                                    <span className="catagory" data-animation="animated fadeInDown"><Link to="#">World</Link></span>
                                    <h2 className="entry-title" data-animation="animated fadeInDwn">
                                        <Link to="details1.html">U.S. marshal killed serving warrant at mobile</Link>
                                    </h2>
                                    <div className="entry-meta" data-animation="animated fadeInDwn">
                                        <ul>
                                            <li>By <Link to="#">Adam Hianks</Link></li>
                                            <li>643 Share /<Link to="#"> 9 Hour ago</Link></li>
                                        </ul>
                                    </div>
                                    <p data-animation="animated fadeInUp">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ex ea commodo consequat.</p>
                                    <div className="read-more" data-animation="animated fadeInUp">
                                        <div className="continue-reading pull-left">
                                            <Link to="#">Continue Reading <i className="fa fa-angle-right"></i></Link>
                                        </div>
                                        <div className="feed pull-right">
                                            <ul>
                                                <li>Share</li>
                                                <li><Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                                                <li><Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                                <li><Link to="#"><i className="fa fa-google-plus" aria-hidden="true"></i></Link></li>
                                                <li><Link to="#"><i className="fa fa-rss" aria-hidden="true"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item-content">
                                <div className="item-image-content" data-animation="animated slideInLeft">
                                    <div className="item-image" style={{ backgroundImage: `url(${Slider4})`}}>
                                    </div>
                                </div>
                                <div className="post-content" data-animation="animated fadeInDown">
                                    <span className="catagory" data-animation="animated fadeInDown"><Link to="#">Technology</Link></span>
                                    <h2 className="entry-title" data-animation="animated fadeInDown">
                                        <Link to="details1.html">Chelsea Handler slams Angelina yet again</Link>
                                    </h2>
                                    <div className="entry-meta"  data-animation="animated fadeInDown">
                                        <ul>
                                            <li>By <Link to="#">Matt Cloey</Link></li>
                                            <li>218 Share /<Link to="#"> 5 Hour ago</Link></li>
                                        </ul>
                                    </div>
                                    <p data-animation="animated fadeInUp">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ex ea commodo consequat.</p>
                                    <div className="read-more" data-animation="animated fadeInUp">
                                        <div className="continue-reading pull-left">
                                            <Link to="#">Continue Reading <i className="fa fa-angle-right"></i></Link>
                                        </div>
                                        <div className="feed pull-right">
                                            <ul>
                                                <li>Share</li>
                                                <li><Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                                                <li><Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                                <li><Link to="#"><i className="fa fa-google-plus" aria-hidden="true"></i></Link></li>
                                                <li><Link to="#"><i className="fa fa-rss" aria-hidden="true"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item-content">
                                <div className="item-image-content" data-animation="animated slideInLeft">
                                    <div className="item-image" style={{ backgroundImage: `url(${Slider5})`}}>
                                    </div>
                                </div>
                                <div className="post-content" data-animation="animated fadeInDown">
                                    <span className="catagory" data-animation="animated fadeInDown"><Link to="#">Business</Link></span>
                                    <h2 className="entry-title" data-animation="animated fadeInDown">
                                        <Link to="details1.html">Mirum est notare quam littera gothica</Link>
                                    </h2>
                                    <div className="entry-meta"  data-animation="animated fadeInDown">
                                        <ul>
                                            <li>By <Link to="#">Jhon Dun</Link></li>
                                            <li>512 Share /<Link to="#"> 3 Hour ago</Link></li>
                                        </ul>
                                    </div>
                                    <p data-animation="animated fadeInUp">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ex ea commodo consequat.</p>
                                    <div className="read-more" data-animation="animated fadeInUp">
                                        <div className="continue-reading pull-left">
                                            <Link to="#">Continue Reading <i className="fa fa-angle-right"></i></Link>
                                        </div>
                                        <div className="feed pull-right">
                                            <ul>
                                                <li>Share</li>
                                                <li><Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                                                <li><Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                                <li><Link to="#"><i className="fa fa-google-plus" aria-hidden="true"></i></Link></li>
                                                <li><Link to="#"><i className="fa fa-rss" aria-hidden="true"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item-content">
                                <div className="item-image-content" data-animation="animated slideInLeft">
                                    <div className="item-image" style={{ backgroundImage: `url(${Slider1})`}}>
                                    </div>
                                </div>
                                <div className="post-content" data-animation="animated fadeInDown">
                                    <span className="catagory" data-animation="animated fadeInDown"><Link to="#">Politics</Link></span>
                                    <h2 className="entry-title" data-animation="animated fadeInDown">
                                        <Link to="details1.html">Duis autem vel eum iriure dolor in hendrerit in</Link>
                                    </h2>
                                    <div className="entry-meta"  data-animation="animated fadeInDown">
                                        <ul>
                                            <li>By <Link to="#">Kolony Wispe</Link></li>
                                            <li>610 Share /<Link to="#"> 7 Hour ago</Link></li>
                                        </ul>
                                    </div>
                                    <p data-animation="animated fadeInUp">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ex ea commodo consequat.</p>
                                    <div className="read-more" data-animation="animated fadeInUp">
                                        <div className="continue-reading pull-left">
                                            <Link to="#">Continue Reading <i className="fa fa-angle-right"></i></Link>
                                        </div>
                                        <div className="feed pull-right">
                                            <ul>
                                                <li>Share</li>
                                                <li><Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                                                <li><Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                                <li><Link to="#"><i className="fa fa-google-plus" aria-hidden="true"></i></Link></li>
                                                <li><Link to="#"><i className="fa fa-rss" aria-hidden="true"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
