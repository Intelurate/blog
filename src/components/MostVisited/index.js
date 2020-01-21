import React, { Component } from 'react';
import Immutable from 'immutable';
import Container from '../Container';

export default class MostVisited extends Component {


    rendeMostVisitedPages() {

        const { mostVisitedPages } = this.props;

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
            <Container kind="widget" title="This Is rising">
                <ul className="medium-post-list">
                    {this.rendeMostVisitedPages()}
                </ul>
            </Container>
        );
    }
}
