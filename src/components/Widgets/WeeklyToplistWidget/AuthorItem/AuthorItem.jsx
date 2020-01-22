import React, { Component } from 'react';
import {Link} from "react-router-dom";
import ImageContainer from "../../../ImageContainer";

export default class AuthorItem extends Component {
    render() {
        const { author, imageSrc } = this.props;
        return (
            <li>
                <div className="entry-meta">
                    <div className="author-image">
                        <ImageContainer link="#" src={imageSrc} alt="Image" />
                    </div>
                    <div className="author-info">
                        <h2><Link to="#">{author}</Link></h2>
                    </div>
                </div>
            </li>
        )
    }
}
