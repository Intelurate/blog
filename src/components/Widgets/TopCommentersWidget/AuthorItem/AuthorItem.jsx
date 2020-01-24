import React, { Component } from 'react';
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
                        <h5>{author}</h5>
                    </div>
                </div>
            </li>
        )
    }
}
