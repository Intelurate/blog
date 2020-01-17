import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import Router from '../Router';
import Footer from '../../components/Footer/Footer';

export default class Main extends Component {
    render() {
        return (
            <div className="homepage-2">
                <div className="main-wrapper tr-page-top">
                    <div className="container-fluid">
                        <Header />
                        <Router />
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}
