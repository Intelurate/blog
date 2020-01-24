import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AuthorItem from "./AuthorItem/AuthorItem";
import CommentItem from "./CommentItem/CommentItem";

import Author4 from '../../../assets/images/others/author4.png';

export default class WeeklyToplist extends Component {

    topAuthors() {
        return (
            <AuthorItem author="Janet Jackson" imageSrc={Author4} />
        )
    }

    topComments() {
        return (
            <CommentItem author="Jhon dun" title="3 students arrested after body-slamming principal" />
        )
    }

    render() {
        return (
            <div className="tr-widget meta-widget">
                <div className="widget-title title-before">
                    <span>Weekly Toplist</span>
                </div>
                <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" className="active"><Link to="#author" data-toggle="tab"><i
                        className="fa fa-user"></i>Authors</Link></li>
                </ul>
                <div className="tab-content">
                    <div role="tabpanel" className="tab-pane active fade in" id="author">
                        <ul className="authors-post">
                            {this.topAuthors()}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
