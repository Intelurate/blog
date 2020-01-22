import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AuthorItem from "./AuthorItem/AuthorItem";
import CommentItem from "./CommentItem/CommentItem";

import Author4 from '../../../assets/images/others/author4.png';

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
                            <AuthorItem author="Janet Jackson" imageSrc={Author4} />
                        </ul>
                    </div>
                    <div role="tabpanel" className="tab-pane fade in" id="comment">
                        <ul className="comment-list">
                            <CommentItem author="Jhon dun" title="3 students arrested after body-slamming principal" />
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
