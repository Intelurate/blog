import React, { Component } from 'react';
import _ from 'lodash';

import CarouselIndicatorItem from './CarouselIndicatorItem/CarouselIndicatorItem';
import CarouselInnerItem from './CarouselInnerItem/CarouselInnerItem';

import data from '../../data/home';

export default class HomeSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            top: null
        };
    }

    componentDidMount() {
        this.setState({top: data.top});
    }

    render() {
        let {top} = this.state;
        return (
            <div className="tr-home-slider slider-style-two">
                <div id="home-carousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        {top && _.map(top, (item, index) =>
                            <CarouselIndicatorItem theme={item.theme} title={item.title} data={index} key={index}/>
                        )}
                    </ol>

                    <div className="carousel-inner" role="listbox">
                        {top && _.map(top, (item, index) =>
                            <CarouselInnerItem
                                active={index === 0}
                                bgImage={item.bgImage}
                                theme={item.theme}
                                title={item.title}
                                author={item.author}
                                share={item.share}
                                time={item.time}
                                key={index}
                            />
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
