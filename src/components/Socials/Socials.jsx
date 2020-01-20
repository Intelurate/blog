import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Socials extends Component {
    render() {
        const {share} = this.props;
        return (
            <ul>
                {share && <li>Share</li>}
                <li><Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                <li><Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                <li><Link to="#"><i className="fa fa-google-plus" aria-hidden="true"></i></Link></li>
                <li><Link to="#"><i className="fa fa-rss" aria-hidden="true"></i></Link>
                </li>
            </ul>
        )
    }
}
