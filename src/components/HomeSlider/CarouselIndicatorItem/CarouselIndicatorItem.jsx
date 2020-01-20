import React, { Component } from 'react';

export default class CarouselIndicatorItem extends Component {
    render() {
        let { theme, title, data } = this.props;
        return (
            <li data-target="#home-carousel" data-slide-to={data} className="active">
                <span className="catagory">{theme}</span>
                <span className="indicators-title">{title}</span>
            </li>
        );
    }
}
