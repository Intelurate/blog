import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Image1 from "../../assets/images/gallery/1.jpg"
import Thumb1 from "../../assets/images/gallery/thumb1.png"

export default class PhotoGallery extends Component {
    render() {
        return (
            <div id="photo-gallery" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="item">
                        <Link to="#"><img className="img-responsive" src={Image1} alt="Image"/></Link>
                        <h2><Link to="#">We Are Seeing The Effects Of The Minimum Wage Rise In San Francisco</Link></h2>
                    </div>
                    <div className="item">
                        <Link to="#"><img className="img-responsive" src={Image1} alt="Image"/></Link>
                        <h2><Link to="#">500-pound elephant seal causes traffic jam while repeatedly</Link></h2>
                    </div>
                    <div className="item">
                        <Link to="#"><img className="img-responsive" src={Image1} alt="Image"/></Link>
                        <h2><Link to="#">I rode a Metroboard electric skateboard 30 miles around Manhattan</Link></h2>
                    </div>
                    <div className="item">
                        <Link to="#"><img className="img-responsive" src={Image1} alt="Image"/></Link>
                        <h2><Link to="#">The super creepy side of the Internet of Things and smart homes</Link></h2>
                    </div>
                    <div className="item active">
                        <Link to="#"><img className="img-responsive" src={Image1} alt="Image"/></Link>
                        <h2><Link to="#">Mirum est notare quam littera gothica, quam nunc putamus parum claram</Link></h2>
                    </div>
                    <div className="item">
                        <Link to="#"><img className="img-responsive" src={Image1} alt="Image"/></Link>
                        <h2><Link to="#">Someone has calculated the total cost of saving Matt Damon</Link></h2>
                    </div>
                    <div className="item">
                        <Link to="#"><img className="img-responsive" src={Image1} alt="Image"/></Link>
                        <h2><Link to="#">Wet wedding: Yorkshire couple dons wellies to tie the knot in flooded town</Link>
                        </h2>
                    </div>
                    <div className="item">
                        <Link to="#"><img className="img-responsive" src={Image1} alt="Image"/></Link>
                        <h2><Link to="#">This dog is so stoked for his Christmas present he can hardly stand it</Link></h2>
                    </div>
                    <div className="item">
                        <Link to="#"><img className="img-responsive" src={Image1} alt="Image"/></Link>
                        <h2><Link to="#">The world's richest people lost $19 billion in 2015, but Jeff Bezos</Link></h2>
                    </div>
                    <div className="item">
                        <Link to="#"><img className="img-responsive" src={Image1} alt="Image"/></Link>
                        <h2><Link to="#">The world's richest people lost $19 billion in 2015, but Jeff Bezos</Link></h2>
                    </div>
                    <div className="item">
                        <Link to="#"><img className="img-responsive" src={Image1} alt="Image"/></Link>
                        <h2><Link to="#">The world's richest people lost $19 billion in 2015, but Jeff Bezos</Link></h2>
                    </div>
                    <div className="item">
                        <Link to="#"><img className="img-responsive" src={Image1} alt="Image"/></Link>
                        <h2><Link to="#">The world's richest people lost $19 billion in 2015, but Jeff Bezos</Link></h2>
                    </div>
                </div>

                <ol className="gallery-indicators carousel-indicators">
                    <li data-target="#photo-gallery" data-slide-to="0" className="">
                        <img className="img-responsive" src={Thumb1} alt="Image"/>
                    </li>
                    <li data-target="#photo-gallery" data-slide-to="1" className="">
                        <img className="img-responsive" src={Thumb1} alt="Image"/>
                    </li>
                    <li data-target="#photo-gallery" data-slide-to="2" className="">
                        <img className="img-responsive" src={Thumb1} alt="Image"/>
                    </li>
                    <li data-target="#photo-gallery" data-slide-to="3" className="">
                        <img className="img-responsive" src={Thumb1} alt="Image"/>
                    </li>
                    <li data-target="#photo-gallery" data-slide-to="4" className="active">
                        <img className="img-responsive" src={Thumb1} alt="Image"/>
                    </li>
                    <li data-target="#photo-gallery" data-slide-to="5">
                        <img className="img-responsive" src={Thumb1} alt="Image"/>
                    </li>
                    <li data-target="#photo-gallery" data-slide-to="6">
                        <img className="img-responsive" src={Thumb1} alt="Image"/>
                    </li>
                    <li data-target="#photo-gallery" data-slide-to="7">
                        <img className="img-responsive" src={Thumb1} alt="Image"/>
                    </li>
                    <li data-target="#photo-gallery" data-slide-to="8">
                        <img className="img-responsive" src={Thumb1} alt="Image"/>
                    </li>
                    <li data-target="#photo-gallery" data-slide-to="9">
                        <img className="img-responsive" src={Thumb1} alt="Image"/>
                    </li>
                    <li data-target="#photo-gallery" data-slide-to="10">
                        <img className="img-responsive" src={Thumb1} alt="Image"/>
                    </li>
                    <li data-target="#photo-gallery" data-slide-to="11">
                        <img className="img-responsive" src={Thumb1} alt="Image"/>
                    </li>
                    <li data-target="#photo-gallery" data-slide-to="8">
                        <img className="img-responsive" src={Thumb1} alt="Image"/>
                    </li>
                </ol>

                <div className="gallery-turner">
                    <Link className="left-photo" to="#photo-gallery" role="button" data-slide="prev"><i
                        className="fa fa-angle-left"></i></Link>
                    <Link className="right-photo" to="#photo-gallery" role="button" data-slide="next"><i
                        className="fa fa-angle-right"></i></Link>
                </div>
            </div>
        )
    }
}
