import React, { Component } from "react";
import { Link } from 'react-router-dom';

import Container from '../Container'
import ImageContainer from "../ImageContainer";
import Socials from "../Socials/Socials";

export default class Test extends Component {
    render() {
        const { titleTheme, linkTheme, img, imgAuthor, author, share, time, detailsPost, titlePost, descriptionPost } = this.props;
        return (
            <Container kind="theme" title={titleTheme} link={linkTheme}>
                <div className="tr-post">
                    <div className="entry-header">
                        <div className="entry-thumbnail">
                            <ImageContainer link={detailsPost} src={img} alt="Image"/>
                        </div>
                    </div>
                    <div className="post-content">
                        <div className="author">
                            <ImageContainer link="#" src={imgAuthor} alt="Image" circle />
                        </div>
                        <div className="entry-meta">
                            <ul>
                                <li>By <Link to="#">{author}</Link></li>
                                <li>{share} Share /<Link to="#">{time}</Link></li>
                                <li>
                                    <Socials share/>
                                </li>
                            </ul>
                        </div>
                        <h2 className="entry-title">
                            <Link to={detailsPost}>{titlePost}</Link>
                        </h2>
                        <p>{descriptionPost}</p>
                        <div className="read-more">
                            <div className="continue-reading pull-left">
                                <Link to="#">Continue Reading <i className="fa fa-angle-right"></i></Link>
                            </div>
                            <div className="feed pull-right">
                                <Socials />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}
