import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Author4 from '../../../assets/images/others/author4.png';
import Author5 from '../../../assets/images/others/author5.png';
import Author6 from '../../../assets/images/others/author6.png';
import Author7 from '../../../assets/images/others/author7.png';
import Author8 from '../../../assets/images/others/author8.png';

export default class WeeklyToplist extends Component {
    render() {
        return (
            <div className="tr-widget meta-widget">
                <div className="widget-title title-before">
                    <span>Weekly Toplist</span>
                </div>
                <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" className="active"><Link to="#author" data-toggle="tab"><i
                        className="fa fa-user"></i>Authors</Link></li>
                    <li role="presentation"><Link to="#comment" data-toggle="tab"><i className="fa fa-comment-o"></i>Comments</Link>
                    </li>
                </ul>
                <div className="tab-content">
                    <div role="tabpanel" className="tab-pane active fade in" id="author">
                        <ul className="authors-post">
                            <li>
                                <div className="entry-meta">
                                    <div className="author-image">
                                        <Link to="#"><img className="img-responsive" src={Author4}
                                                         alt="Image"/></Link>
                                    </div>
                                    <div className="author-info">
                                        <h2><Link to="#">Janet Jackson</Link></h2>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="entry-meta">
                                    <div className="author-image">
                                        <Link to="#"><img className="img-responsive" src={Author5}
                                                         alt="Image"/></Link>
                                    </div>
                                    <div className="author-info">
                                        <h2><Link to="#">Matt Cloey</Link></h2>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="entry-meta">
                                    <div className="author-image">
                                        <Link to="#"><img className="img-responsive" src={Author6}
                                                         alt="Image"/></Link>
                                    </div>
                                    <div className="author-info">
                                        <h2><Link to="#">Kolony Wispe</Link></h2>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="entry-meta">
                                    <div className="author-image">
                                        <Link to="#"><img className="img-responsive" src={Author7}
                                                         alt="Image"/></Link>
                                    </div>
                                    <div className="author-info">
                                        <h2><Link to="#">Matt Cloey</Link></h2>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="entry-meta">
                                    <div className="author-image">
                                        <Link to="#"><img className="img-responsive" src={Author8}
                                                         alt="Image"/></Link>
                                    </div>
                                    <div className="author-info">
                                        <h2><Link to="#">Jhon dun</Link></h2>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div role="tabpanel" className="tab-pane fade in" id="comment">
                        <ul className="comment-list">
                            <li>
                                <div className="post-content">
                                    <div className="entry-meta">
                                        <span><Link to="#">Jhon dun</Link></span>
                                    </div>
                                    <h2 className="entry-title">
                                        <Link to="#">3 students arrested after body-slamming principal</Link>
                                    </h2>
                                </div>
                            </li>
                            <li>
                                <div className="post-content">
                                    <div className="entry-meta">
                                        <span><Link to="#">Matt Cloey</Link></span>
                                    </div>
                                    <h2 className="entry-title">
                                        <Link to="#">2 students arrested after body-slamming principal</Link>
                                    </h2>
                                </div>
                            </li>
                            <li>
                                <div className="post-content">
                                    <div className="entry-meta">
                                        <span><Link to="#">Kolony Wispe</Link></span>
                                    </div>
                                    <h2 className="entry-title">
                                        <Link to="#">6 students arrested after body-slamming principal</Link>
                                    </h2>
                                </div>
                            </li>
                            <li>
                                <div className="post-content">
                                    <div className="entry-meta">
                                        <span><Link to="#">Janet Jackson</Link></span>
                                    </div>
                                    <h2 className="entry-title">
                                        <Link to="#">3 students arrested after body-slamming principal</Link>
                                    </h2>
                                </div>
                            </li>
                            <li>
                                <div className="post-content">
                                    <div className="entry-meta">
                                        <span><Link to="#">Matt Cloey</Link></span>
                                    </div>
                                    <h2 className="entry-title">
                                        <Link to="#">5 students arrested after body-slamming principal</Link>
                                    </h2>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
