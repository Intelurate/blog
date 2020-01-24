import React, { Component } from "react";
import { Link } from 'react-router-dom';

import ImageContainer from "../../ImageContainer";
import Socials from "../../Socials/Socials";

export default class PostRow extends Component {
    render() {
        const { link, title, img, imgAuthor, author, share, time, detailsPost, titlePost, descriptionPost, socials } = this.props;
        return (
            <div className="tr-post  post-vertical">
                <div className="section-title title-before">
                    <h1><Link to={link}>{title}</Link></h1>
                </div>
                <div className="tr-post">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="entry-header">
                                <div className="entry-thumbnail">
                                    <ImageContainer link={detailsPost} src={img} alt="Image"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="post-content">
                                <div className="author">
                                    <ImageContainer link="#" src={imgAuthor} alt="Image" circle />
                                </div>
                                <div className="entry-meta">
                                    <ul>
                                        <li>By <Link to="#">{author}</Link></li>
                                        <li>{share} Share /<Link to="#">{time}</Link></li>
                                        {socials &&
                                            <li>
                                                <Socials share/>
                                            </li>
                                        }
                                    </ul>
                                </div>
                                <h2 className="entry-title">
                                    <Link to={detailsPost}>{titlePost}</Link>
                                </h2>
                            <p>{descriptionPost}</p>
                                <div className="read-more">
                                    <div className="continue-reading pull-left">
                                        <Link to="#">Visit this website<i className="fa fa-angle-right"></i></Link>
                                    </div>
                                    <div className="feed pull-right">
                                        <Socials />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
