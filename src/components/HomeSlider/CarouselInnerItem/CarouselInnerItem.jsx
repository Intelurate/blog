import React, { Component } from 'react';
import {Link} from "react-router-dom";
import cx from "classnames";

export default class CarouselInnerItem extends Component {
    render() {
        let { active, bgImage, theme, title, author, time, share, description } = this.props;
        return (
            <div className={cx("item", active && "active")}>
                <div className={cx("item-content")}>
                    <div className={cx("item-image-content")} data-animation="animated slideInLeft">
                        <div className={cx("item-image")} style={{ backgroundImage: `url(${bgImage})` }}>
                        </div>
                    </div>
                    <div className={cx("post-content")}  data-animation="animated fadeInDown">
                        <span className={cx("catagory")} data-animation="animated fadeInDown"><Link to="#">{theme}</Link></span>
                        <h2 className={cx("entry-title")} data-animation="animated fadeInDwn">
                            <Link to="details1.html">{title}</Link>
                        </h2>
                        <div className={cx("entry-meta")} data-animation="animated fadeInDwn">
                            <ul>
                                <li>By <Link to="#">{author}</Link></li>
                                <li>{share} Share /<Link to="#">{time}</Link></li>
                            </ul>
                        </div>
                        <div className={cx("read-more")} data-animation="animated fadeInUp">
                            <div className={cx("continue-reading pull-left")}>
                                <Link to="#">Continue Reading <i className={cx("fa fa-angle-right")}></i></Link>
                            </div>
                            <div className={cx("feed pull-right")}>
                                <ul>
                                    <li>Share</li>
                                    <li><Link to="#"><i className={cx("fa fa-facebook")} aria-hidden="true"></i></Link></li>
                                    <li><Link to="#"><i className={cx("fa fa-twitter")} aria-hidden="true"></i></Link></li>
                                    <li><Link to="#"><i className={cx("fa fa-google-plus")} aria-hidden="true"></i></Link></li>
                                    <li><Link to="#"><i className={cx("fa fa-rss")} aria-hidden="true"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
