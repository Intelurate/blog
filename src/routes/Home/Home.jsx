import React, { Component } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import HomeSlider from '../../components/HomeSlider/HomeSlider';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <HomeSlider />
            </div>
        );
    }
}
