import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PostSmall extends Component {
    render() {
        const { img, author, title } = this.props;
        return (
            <li>
                <div className="entry-header">
                    <div className="entry-thumbnail">
                        <Link to="details1.html"><img className="img-responsive" src={img} alt="Image"/></Link>
                    </div>
                </div>
                <div className="post-content media-body">
                    <div className="entry-meta">
                        <ul>
                            <li>By <Link to="#">{author}</Link></li>
                        </ul>
                    </div>
                    <h2 className="entry-title">
                        <Link to="details1.html">{title}</Link>
                    </h2>
                </div>
            </li>
        );
    }
}
