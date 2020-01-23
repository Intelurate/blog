import React, { Component } from 'react';
import PostColumn from "../Column/PostColumn";
import Post21 from "../../../assets/images/post/21.jpg";
import Author3 from "../../../assets/images/others/author3.png";
import PostSmall from "../Small/PostSmall";
import Post22 from "../../../assets/images/post/22.jpg";
import Container from "../../Container";

export default class BigPostWithList extends Component {

    smallPosts() {
        return (
            <PostSmall
                img={Post22}
                author="Matt Cloey"
                title="Chelsea Handler slams Angelina yet again"
            />
        )
    }

    render() {
        return (
            <Container kind="theme" title="Technology" link="/">
                <PostColumn
                    img={Post21}
                    imgAuthor={Author3}
                    author="Jhon Dun"
                    share="205"
                    time="4 Hour ago"
                    detailsPost="details1.html"
                    titlePost="Most Stylish And Best-Dressed Women The World"
                    />
                <ul className="small-post-list">
                    {this.smallPosts()}
                </ul>
            </Container>
        )
    }
}
