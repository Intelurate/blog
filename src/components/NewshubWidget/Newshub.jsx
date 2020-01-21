import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from "../Container";

export default class Newshub extends Component {
    render() {
        return (
            <Container classContainer="tr-widget">
                <div className="tr-twitter text-center">
                    <div id="twitter-carousel" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#twitter-carousel" data-slide-to="0" className="active"></li>
                            <li data-target="#twitter-carousel" data-slide-to="1"></li>
                            <li data-target="#twitter-carousel" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="item active">
                                <div className="twitter">
                                    <div className="twitter-icon">
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                    </div>
                                    <h2><Link to="#">#newshub</Link></h2>
                                    <p>Confusing <Link to="#">#design</Link> terms: what's the difference between quis nostrud
                                        exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. <span><Link to="#">#UX, #UI and #IA?</Link> <Link to="#">http://buff.ly/1KdjpEi</Link></span></p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="twitter">
                                    <div className="twitter-icon">
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                    </div>
                                    <h2><Link to="#">#newshub</Link></h2>
                                    <p>Confusing <Link to="#">#design</Link> terms: what's the difference between quis nostrud
                                        exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. <span><Link to="#">#UX, #UI and #IA?</Link> <Link to="#">http://buff.ly/1KdjpEi</Link></span></p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="twitter">
                                    <div className="twitter-icon">
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                    </div>
                                    <h2><Link to="#">#newshub</Link></h2>
                                    <p>Confusing <Link to="#">#design</Link> terms: what's the difference between quis nostrud
                                        exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. <span><Link to="#">#UX, #UI and #IA?</Link> <Link to="#">http://buff.ly/1KdjpEi</Link></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}
