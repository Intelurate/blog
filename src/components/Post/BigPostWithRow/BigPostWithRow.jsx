import React, { Component } from 'react';
import PostColumn from "../Column/PostColumn";
import Post18 from "../../../assets/images/post/18.jpg";
import Author3 from "../../../assets/images/others/author3.png";
import Post19 from "../../../assets/images/post/19.jpg";
import Author1 from "../../../assets/images/others/author1.png";
import Post20 from "../../../assets/images/post/20.jpg";
import Author2 from "../../../assets/images/others/author2.png";
import Container from "../../Container";

export default class BigPostWithRow extends Component {
    render() {
        return (
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
                <div className="medium-post-content row">
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
        )
    }
}
