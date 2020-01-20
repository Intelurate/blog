import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import _ from 'lodash';

export default class ImageContainer extends Component {
    render() {
        const { link, src, alt, classContainer, classImage, circle} = this.props;
        return (
            <div>
                {!_.isEmpty(classContainer) ?
                    <div className={cx(classContainer)}>
                        <Link to={link}><img className={cx("img-responsive", classImage, circle && 'img-circle')} src={src} alt={alt} /></Link>
                    </div>
                : <Link to={link}><img className={cx("img-responsive", classImage, circle && 'img-circle')} src={src} alt={alt} /></Link>}
            </div>
        )
    }
}
