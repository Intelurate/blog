import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import MostVisited from '../../components/MostVisited';

import {
	loadPagesAsync
} from '../../actions/pageActions';

import Navbar from '../../components/Navbar/Navbar';
import HomeSlider from '../../components/HomeSlider/HomeSlider';
import PostColumn from '../../components/Post/Column/PostColumn';
import PostRow from "../../components/Post/Row/PostRow";
import Container from "../../components/Container";
import ImageContainer from "../../components/ImageContainer";
import Weather from "../../components/WeatherWidget/Weather";
import Newshub from "../../components/NewshubWidget/Newshub";
import WeeklyToplist from "../../components/WeeklyToplistWidget/WeeklyToplist";

import Author1 from '../../assets/images/others/author1.png';
import Author2 from '../../assets/images/others/author2.png';
import Author3 from '../../assets/images/others/author3.png';
import Post16 from '../../assets/images/post/16.jpg';
import Post17 from '../../assets/images/post/17.jpg';
import Post18 from '../../assets/images/post/18.jpg';
import Post19 from '../../assets/images/post/19.jpg';
import Post20 from '../../assets/images/post/20.jpg';
import Image1 from '../../assets/images/advertise/1.jpg';
import Image2 from "../../assets/images/advertise/2.jpg";
import Image3 from '../../assets/images/advertise/3.jpg';
import Image4 from "../../assets/images/advertise/4.jpg";
import Image5 from '../../assets/images/advertise/5.jpg';

import data from '../../data/home';
import PhotoGallery from "../../components/PhotoGallery/PhotoGallery";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rising: null
        };
    }

    componentDidMount() {
        this.setState({rising: data.rising});
    }

    render() {
        return (
            <div>
                <Navbar />
                <HomeSlider />
                <div className="row tr-content">
                    <div className="col-sm-5 col-md-6 tr-sticky">
                        <div className="theiaStickySidebar">
                            <Container kind="theme" title="Business" link="/">
                                <PostColumn
                                    img={Post16}
                                    imgAuthor={Author1}
                                    author="Kolony Wispe"
                                    share="445"
                                    time="1 Hour ago"
                                    detailsPost="details1.html"
                                    titlePost="Slow TV finds life online with Facebook Live and Periscope"
                                    descriptionPost="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut ex ea commodo consequat."
                                    socials
                                />
                            </Container>

                            <ImageContainer link="#" src={Image1} alt="Image" classContainer="tr-ad"/>

                            <Container>
                                <PostRow
                                    link="#"
                                    title="Technology"
                                    img={Post17}
                                    imgAuthor={Author2}
                                    author="Jhon Dun"
                                    share="255"
                                    time="9 Hour ago"
                                    detailsPost="details1.html"
                                    titlePost="We Are Seeing The Effects Of The Minimum Wage Rise In San Francisco"
                                    descriptionPost="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
                                />
                            </Container>

                            <Container kind="theme" title="Business" link="/">
                                <PostColumn
                                    img={Post18}
                                    imgAuthor={Author3}
                                    author="Kolony Wispe"
                                    share="123"
                                    time="2 Hour ago"
                                    detailsPost="details1.html"
                                    titlePost="Peyton Manning deserved a better ending -- if he's telling the truth"
                                    descriptionPost="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ex ea commodo consequat."
                                    socials
                                />
                                <div className="medium-PostColumn-content row">
                                    <div className="col-md-6 left-PostColumn">
                                        <PostColumn
                                            img={Post19}
                                            imgAuthor={Author1}
                                            author="Janet Jackson"
                                            share="10"
                                            time="3 Hour ago"
                                            detailsPost="details1.html"
                                            titlePost="Duis autem vel eum iriure dolor in hendrerit"
                                            descriptionPost="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore।"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <PostColumn
                                            img={Post20}
                                            imgAuthor={Author2}
                                            author="Kolony Wispe"
                                            share="25"
                                            time="7 Hour ago"
                                            detailsPost="details1.html"
                                            titlePost="Martha Stewart, Snoop Dogg and Anna Kendrick"
                                            descriptionPost="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore।"
                                        />
                                    </div>
                                </div>
                            </Container>

                            <Container kind="theme" title="Photo Gallery" link="/">
                                <PhotoGallery />
                            </Container>

                        </div>
                    </div>

                    <div className="col-sm-4 col-md-3 medium-PostColumn-responsive tr-sticky">
                        <div className="theiaStickySidebar">
                            <Container classContainer="tr-ad ad-before">
                                <ImageContainer link="#" src={Image3} alt="Image" />
                            </Container>
                        </div>
                    </div>

                    <div className="col-sm-3 tr-sidebar tr-sticky">
                        <div className="theiaStickySidebar">
                            <Container classContainer="tr-ad ad-before">
                                <ImageContainer link="#" src={Image2} alt="Image" />
                            </Container>
                            <MostVisited {...this.props} />
                            <Weather />
                            <Container classContainer="tr-ad ad-before">
                                <ImageContainer link="#" src={Image4} alt="Image" />
                            </Container>
                            <Newshub />
                            <WeeklyToplist />
                        </div>
                    </div>

                </div>
                <ImageContainer link="#" src={Image5} alt="Image" classContainer="tr-ad ad-image text-center"/>
            </div>
        );
    }
}



const mapStateToProps = (state) =>{
    return {
        mostVisitedPages: state.pages.get('mostVisitedPages')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            loadPagesAsync,
        },
        dispatch)
    }
};


Home = connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;
