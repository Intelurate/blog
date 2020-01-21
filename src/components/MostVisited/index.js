import React, { Component } from 'react';
import Immutable from 'immutable';

import Container from '../Container';
import ImageContainer from "../ImageContainer";
import Image2 from "../../assets/images/advertise/2.jpg";
import Image4 from "../../assets/images/advertise/4.jpg";
import Weather from "../WeatherWidget/Weather";

export default class MostVisited extends Component {


    rendeMostVisitedPages() {

        const { mostVisitedPages } = this.props;
        console.log(mostVisitedPages);
        return !mostVisitedPages || !mostVisitedPages.size ? Immutable.fromJS([]) : mostVisitedPages.map(d => {
            return (
                <li className="tr-post">
                    <div className="entry-header">
                        <div className="entry-thumbnail">
                            <a href="details1.html"><img className="img-responsive" src="images/post/9.jpg" alt="Image" /></a>
                        </div>
                    </div>
                    <div className="post-content">
                        <div className="catagory">
                            <a href="#">Visited By: {d.get('visited')}</a>
                        </div>
                        <h2 className="entry-title">
                            <a href="details1.html">{d.get('title')}</a>
                        </h2>
                    </div>
                </li>
            )
        })
    }

    render() {

        return (
            <div className="theiaStickySidebar">
                <Container classContainer="tr-ad ad-before">
                    <ImageContainer link="#" src={Image2} alt="Image" />
                </Container>
                <Container kind="widget" title="This Is rising">
                    <ul className="medium-post-list">
                        {this.rendeMostVisitedPages()}
                    </ul>
                </Container>
                <Weather />
                <Container classContainer="tr-ad ad-before">
                    <ImageContainer link="#" src={Image4} alt="Image" />
                </Container>
            </div>
        );
    }
}
