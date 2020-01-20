import React, { Component } from "react";

import Container from '../Container/Container'
import Post16 from '../../assets/images/post/16.jpg';
import Author1 from '../../assets/images/others/author1.png';
import ImageContainer from "../ImageContainer/ImageContainer";

export default class Test extends Component {
    render() {
        return (
            <Container theme title="Business" link="/">
                <div className="tr-post">
                    <div className="entry-header">
                        <div className="entry-thumbnail">
                            <ImageContainer link="details1.html" src={Post16} alt="Image"/>
                        </div>
                    </div>
                    <div className="post-content">
                        <div className="author">
                            <ImageContainer link="#" src={Author1} alt="Image" classImage="image-circle" />
                        </div>
                        <div className="entry-meta">
                            <ul>
                                <li>By <a href="#">Kolony Wispe</a></li>
                                <li>445 Share /<a href="#"> 1 Hour ago</a></li>
                                <li>
                                    <ul>
                                        <li>Share</li>
                                        <li><a href="#"><i className="fa fa-facebook"
                                                           aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"
                                                           aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-google-plus"
                                                           aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-rss" aria-hidden="true"></i></a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <h2 className="entry-title">
                            <a href="details1.html">Slow TV finds life online with Facebook Live and
                                Periscope</a>
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut ex ea commodo
                            consequat. </p>
                        <div className="read-more">
                            <div className="continue-reading pull-left">
                                <a href="#">Continue Reading <i className="fa fa-angle-right"></i></a>
                            </div>
                            <div className="feed pull-right">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook"
                                                       aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                    </li>
                                    <li><a href="#"><i className="fa fa-google-plus"
                                                       aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-rss" aria-hidden="true"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}
