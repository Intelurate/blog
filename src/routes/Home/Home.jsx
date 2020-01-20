import React, { Component } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import HomeSlider from '../../components/HomeSlider/HomeSlider';
import Test from '../../components/Test/Test';
import ImageContainer from "../../components/ImageContainer/ImageContainer";
import Image1 from '../../assets/images/advertise/1.jpg';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <HomeSlider />
                <div className="row tr-content">
                    <div className="col-sm-5 col-md-6 tr-sticky">
                        <div className="theiaStickySidebar">
                            <Test />
                        </div>
                        <div className="tr-ad">
                            <ImageContainer link="#" src={Image1} alt="Image"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
