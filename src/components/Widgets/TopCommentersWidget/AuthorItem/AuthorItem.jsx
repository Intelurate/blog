import React, { Component } from 'react';

export default class AuthorItem extends Component {
    render() {
        const { author, imageSrc } = this.props;
        return (
            <li>
                <div className="entry-meta">
                    <div className="author-image">
                        <img className="img-responsive" src={imageSrc} alt="Image" />
                    </div>
                    <div className="author-info">
                        <h5>{author}</h5>
                    </div>
                </div>
            </li>
        )
    }
}
