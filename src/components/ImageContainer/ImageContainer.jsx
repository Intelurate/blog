import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

export default class ImageContainer extends Component {
    render() {
        const { link, src, alt, classImage} = this.props;
        console.log(classImage);
        return (
            <Link to={link}><img className={cx("img-responsive", classImage)} src={src} alt={alt} /></Link>
        )
    }
}
