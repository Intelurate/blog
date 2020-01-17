import React, { Component } from 'react';

export default class HomeCarouselItem extends Component {
    render() {
        let { title, description, data } = this.props;
        return (
            <li data-target="#home-carousel" data-slide-to={data} className="active">
                <span className="catagory">{title}</span>
                <span className="indicators-title">{description}</span>
            </li>
        );
    }
}
