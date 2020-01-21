import React, { Component } from 'react';

import Forecast from '../../../assets/images/others/weather1.png';
import Drop from '../../../assets/images/others/weather2.png';
import Wind from '../../../assets/images/others/weather3.png';
import Night from '../../../assets/images/others/weather6.png';
import Day from '../../../assets/images/others/weather5.png';

export default class Weather extends Component {
    render() {
        return (
            <div className="tr-weather tr-widget">
                <div className="weather-top weather-bg-color">
                    <div className="row">
                        <div className="col-xs-6">
                            <div className="weather-image">
                                <img className="img-responsive" src={Forecast} alt="Image"/>
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <span className="weather-temp">21 <sup>°C</sup></span>
                            <span className="weather-type">Mostly Cloudy</span>
                        </div>
                    </div>
                    <ul>
                        <li>London, UK</li>
                        <li><span><img className="img-responsive" src={Drop} alt="Image"/></span>13%</li>
                        <li><span><img className="img-responsive" src={Wind} alt="Image"/></span>6.44 MPH</li>
                    </ul>
                </div>

                <div className="weather-bottom">
                    <ul>
                        <li>
                            <div className="weather-icon">
                                <img className="img-responsive" src={Night} alt="Image"/>
                            </div>
                            <div className="weather-info">
                                <span>23°</span>
                                <span className="date">Sun, 3 July</span>
                            </div>
                        </li>
                        <li>
                            <div className="weather-icon">
                                <img className="img-responsive" src={Day} alt="Image"/>
                            </div>
                            <div className="weather-info">
                                <span>26°</span>
                                <span className="date">Mon, 4 July</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
