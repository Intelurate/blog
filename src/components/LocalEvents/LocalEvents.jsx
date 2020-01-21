import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Post from '../../assets/images/post/3.jpg';
import Image2 from "../../assets/images/advertise/2.jpg";
import ImageContainer from "../ImageContainer";

export default class LocalEvents extends Component {
    render() {
        return (
            <div>
                <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" className="active"><Link to="#time1" data-toggle="tab">02.Jan</Link></li>
                    <li role="presentation"><Link to="#time2" data-toggle="tab">14.Jan</Link></li>
                    <li role="presentation"><Link to="#time3" data-toggle="tab"> 22.Jan</Link></li>
                </ul>
                <div className="tab-content">
                    <div role="tabpanel" className="tab-pane active fade in" id="time1">
                        <div className="tr-post">
                            <div className="entry-header">
                                <div className="entry-thumbnail">
                                    <ImageContainer link="details1.html" src={Post} alt="Image" />
                                </div>
                            </div>
                            <div className="post-content">
                                <div className="entry-meta">
                                    <ul>
                                        <li>Apple Events</li>
                                        <li>2:00 Pm</li>
                                        <li>02 January, 2017</li>
                                    </ul>
                                </div>
                                <h2 className="entry-title">
                                    <Link to="details1.html">Martha Stewart, Snoop Dogg and Anna Kendrick</Link>
                                </h2>
                            </div>
                        </div>
                        <span>N Street Sacramento, California, USA</span>
                    </div>
                    <div role="tabpanel" className="tab-pane fade in" id="time2">
                        <div className="tr-post">
                            <div className="entry-header">
                                <div className="entry-thumbnail">
                                    <ImageContainer link="details1.html" src={Post} alt="Image" />
                                </div>
                            </div>
                            <div className="post-content">
                                <div className="entry-meta">
                                    <ul>
                                        <li>Apple Events</li>
                                        <li>5:00 Pm</li>
                                        <li>14 January, 2017</li>
                                    </ul>
                                </div>
                                <h2 className="entry-title">
                                    <Link to="details1.html">Celeb Role Models You Can Feel Good About</Link>
                                </h2>
                            </div>
                        </div>
                        <span>N Street Sacramento, California, USA</span>
                    </div>
                    <div role="tabpanel" className="tab-pane fade in" id="time3">
                        <div className="tr-post">
                            <div className="entry-header">
                                <div className="entry-thumbnail">
                                    <ImageContainer link="details1.html" src={Post} alt="Image" />
                                </div>
                            </div>
                            <div className="post-content">
                                <div className="entry-meta">
                                    <ul>
                                        <li>Apple Events</li>
                                        <li>3:00 Pm</li>
                                        <li>22 January, 2017</li>
                                    </ul>
                                </div>
                                <h2 className="entry-title">
                                    <Link to="details1.html">18 Great Performances in Mediocre Movies in 2017</Link>
                                </h2>
                            </div>
                        </div>
                        <span>N Street Sacramento, California, USA</span>
                    </div>
                </div>
            </div>
        )
    }
}
