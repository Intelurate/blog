import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AuthorItem from "./AuthorItem/AuthorItem";
import Immutable from "immutable";

export default class TopCommenters extends Component {

    topAuthors() {
        const { topUsers } = this.props;
        return !topUsers || !topUsers.size ? Immutable.fromJS([]) : topUsers.map((d, i) => {
            return (
                <Link to={`/user/${d.get('id')}`} key={i}>
                    <AuthorItem author={d.get('name')} imageSrc={d.get('imageAuthor')}/>
                </Link>
            )
        })
    }

    render() {
        return (
            <div className="tr-widget meta-widget">
                <div className="widget-title title-before">
                    <span>Top Commenters</span>
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
