import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Container extends Component {
    render() {
        const { theme, title, link, children } = this.props;
        return (
            <div className="tr-section">
                {theme &&
                    <div className="section-title title-before">
                        <h1><Link to={link}>{title}</Link></h1>
                    </div>
                }
                {children}
            </div>
        );
    }
}
