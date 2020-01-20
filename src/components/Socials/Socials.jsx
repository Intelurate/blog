import React, { Component } from 'react';

export default class Socials extends Component {
    render() {
        return (
            <div>
                <li><a href="#"><i className="fa fa-facebook"
                                       aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"
                aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-google-plus"
                                   aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-rss" aria-hidden="true"></i></a>
                </li>
            </div>
        )
    }
}
