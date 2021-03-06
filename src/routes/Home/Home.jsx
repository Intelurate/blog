import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
	loadPagesAsync
} from '../../actions/pageActions';

import Navbar from '../../components/Navbar/Navbar';
import HomeSlider from '../../components/HomeSlider/HomeSlider';
import PostColumn from '../../components/Post/Column/PostColumn';
import PostRow from "../../components/Post/Row/PostRow";
import Container from "../../components/Container";
import BigPostWithList from "../../components/Post/BigPostWithList/BigPostWithList";
import BigPostWithRow from "../../components/Post/BigPostWithRow/BigPostWithRow";
import TopCommenters from "../../components/Widgets/TopCommentersWidget/TopCommenters";
import ImageContainer from "../../components/ImageContainer";
import MostVisited from '../../components/Widgets/MostVisitedWidget';
import Newshub from "../../components/Widgets/NewshubWidget/Newshub";
import Sport from "../../components/Sport/Sport";

import Author1 from '../../assets/images/others/author1.png';
import Author2 from '../../assets/images/others/author2.png';
import Post16 from '../../assets/images/post/16.jpg';
import Post17 from '../../assets/images/post/17.jpg';
import Image1 from '../../assets/images/advertise/1.jpg';
import Image2 from "../../assets/images/advertise/2.jpg";
import Image3 from '../../assets/images/advertise/3.jpg';
import Image4 from "../../assets/images/advertise/4.jpg";
import Image5 from '../../assets/images/advertise/5.jpg';

class Home extends Component {
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
                                    share="445"
                                    time="1 Hour ago"
                                    detailsPost="details1.html"
                                    titlePost="Slow TV finds life online with Facebook Live and Periscope"
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
                                    share="255"
                                    time="9 Hour ago"
                                    detailsPost="details1.html"
                                    titlePost="We Are Seeing The Effects Of The Minimum Wage Rise In San Francisco"
                                />
                            </Container>

                            <BigPostWithRow {...this.props} />

                        </div>
                    </div>

                    <div className="col-sm-4 col-md-3 medium-PostColumn-responsive tr-sticky">
                        <div className="theiaStickySidebar">
                            {/*<Container kind="theme" title="Sports" link="/">*/}
                            {/*    <Sport />*/}
                            {/*</Container>*/}

                            <Container classContainer="tr-ad">
                                <ImageContainer link="#" src={Image3} alt="Image" />
                            </Container>

                            <BigPostWithList {...this.props}/>

                        </div>
                    </div>

                    <div className="col-sm-3 tr-sidebar tr-sticky">
                        <div className="theiaStickySidebar">
                            <Container classContainer="tr-ad">
                                <ImageContainer link="#" src={Image2} alt="Image" />
                            </Container>
                            <MostVisited {...this.props} />
                            <Container classContainer="tr-ad">
                                <ImageContainer link="#" src={Image4} alt="Image" />
                            </Container>
                            {/*<Newshub />*/}
                            <TopCommenters {...this.props}/>
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
        mostVisitedPages: state.pages.get('mostVisitedPages'),
        topUsers: state.users.get('topUsers')
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
