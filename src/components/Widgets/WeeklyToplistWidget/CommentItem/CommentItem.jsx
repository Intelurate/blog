import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class CommentItem extends Component {
    render() {
        const { author, title } = this.props;
        return (
            <li>
                <div className="post-content">
                    <div className="entry-meta">
                        <span><Link to="#">{author}</Link></span>
                    </div>
                    <h2 className="entry-title">
                        <Link to="#">{title}</Link>
                    </h2>
                </div>
            </li>
        )
    }
}
