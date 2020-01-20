import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CarouselIndicatorItem from './CarouselIndicatorItem/CarouselIndicatorItem';
import CarouselInnerItem from './CarouselInnerItem/CarouselInnerItem';

import Slider1 from '../../assets/images/post/slider1.jpg';
import Slider3 from '../../assets/images/post/slider3.jpg';
import Slider4 from '../../assets/images/post/slider4.jpg';
import Slider5 from '../../assets/images/post/slider5.jpg';

export default class HomeSlider extends Component {
    render() {
        return (
            <div className="tr-home-slider slider-style-two">
                <div id="home-carousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <CarouselIndicatorItem title="World" description="U.S. marshal killed serving warrant at mobile" data="0"/>
                        <CarouselIndicatorItem title="Technology" description="Chelsea Handler slams Angelina yet again" data="1"/>
                        <CarouselIndicatorItem title="Business" description="Mirum est notare quam littera gothica" data="2"/>
                        <CarouselIndicatorItem title="Politics" description="Duis autem vel eum iriure dolor in hendrerit in" data="3"/>
                    </ol>

                    <div className="carousel-inner" role="listbox">
                        <CarouselInnerItem
                            active
                            bgImage={Slider3}
                            category="World"
                            title="U.S. marshal killed serving warrant at mobile"
                            author="Adam Hianks"
                            share="643"
                            time="9 Hour ago"
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ex ea commodo consequat."
                        />

                        <CarouselInnerItem
                            bgImage={Slider4}
                            category="Technology"
                            title="Chelsea Handler slams Angelina yet again"
                            author="Matt Cloey"
                            share="218"
                            time="5 Hour ago"
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ex ea commodo consequat."
                        />

                        <CarouselInnerItem
                            bgImage={Slider5}
                            category="Business"
                            title="Mirum est notare quam littera gothica"
                            author="Jhon Dun"
                            share="512"
                            time="3 Hour ago"
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ex ea commodo consequat."
                        />

                        <CarouselInnerItem
                            bgImage={Slider1}
                            category="Politics"
                            title="Duis autem vel eum iriure dolor in hendrerit in"
                            author="Kolony Wispe"
                            share="610"
                            time="7 Hour ago"
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ex ea commodo consequat."
                        />

                    </div>
                </div>
            </div>
        );
    }
}
