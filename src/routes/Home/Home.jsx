import React, { Component } from 'react';
import {Link} from "react-router-dom";

import Navbar from '../../components/Navbar/Navbar';
import HomeSlider from '../../components/HomeSlider/HomeSlider';
import Test from '../../components/Test/Test';
import Container from "../../components/Container/Container";
import ImageContainer from "../../components/ImageContainer/ImageContainer";
import Post16 from '../../assets/images/post/16.jpg';
import Author1 from '../../assets/images/others/author1.png';
import Post18 from '../../assets/images/post/18.jpg';
import Author3 from '../../assets/images/others/author3.png';
import Image1 from '../../assets/images/advertise/1.jpg';
import Image3 from '../../assets/images/advertise/3.jpg';
import Image5 from '../../assets/images/advertise/5.jpg';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <HomeSlider />
                <div className="row tr-content">
                    <div className="col-sm-5 col-md-6 tr-sticky">
                        <div className="theiaStickySidebar">
                            <Test
                                titleTheme="Business"
                                linkTheme="/"
                                img={Post16}
                                imgAuthor={Author1}
                                author="Kolony Wispe"
                                share="445"
                                time="1 Hour ago"
                                detailsPost="details1.html"
                                titlePost="Slow TV finds life online with Facebook Live and Periscope"
                                descriptionPost="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut ex ea commodo consequat."
                            />

                            <ImageContainer link="#" src={Image1} alt="Image" classContainer="tr-ad"/>

                            <Test
                                titleTheme="Business"
                                linkTheme="/"
                                img={Post18}
                                imgAuthor={Author3}
                                author="Kolony Wispe"
                                share="123"
                                time="2 Hour ago"
                                detailsPost="details1.html"
                                titlePost="Peyton Manning deserved a better ending -- if he's telling the truth"
                                descriptionPost="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ex ea commodo consequat."
                            />

                        </div>
                    </div>
                    <div className="col-sm-4 col-md-3 medium-post-responsive tr-sticky">
                        <div className="theiaStickySidebar">
                            <Container classContainer="tr-ad ad-before">
                                <ImageContainer link="#" src={Image3} alt="Image" />
                            </Container>
                        </div>
                    </div>
                </div>
                <ImageContainer link="#" src={Image5} alt="Image" classContainer="tr-ad ad-image text-center"/>
            </div>
        );
    }
}
