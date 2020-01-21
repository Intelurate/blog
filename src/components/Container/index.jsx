import React, { Component } from 'react';
import {Link} from "react-router-dom";
import cx from 'classnames';

export default class Container extends Component {
    render() {
        const { theme, kind, title, link, classContainer, children } = this.props;
        return (
            <div className={cx("tr-section", classContainer)}>
                {kind === "widget" ?
                    <div className="widget-title title-before">
                        <span>{title}</span>
                    </div>
                    : (kind==="theme") &&
                    <div className="section-title title-before">
                        <h1><Link to={link}>{title}</Link></h1>
                    </div>
                }
                {children}
            </div>
        );
    }
}
