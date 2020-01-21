import React, { Component } from 'react';
import MatchResult from "./MatchResult/MatchResult";

import Logo1 from '../../assets/images/post/sports/logo4.png';
import Logo2 from '../../assets/images/post/sports/logo5.png';
import Team1 from '../../assets/images/post/sports/team1.png';
import Team2 from '../../assets/images/post/sports/team2.png';

export default class Sport extends Component {
    render() {
        return (
            <div>
                <div className="featured-result margin-bottom-30">
                    <h2 className="league-name">Premier League</h2>
                    <div className="row">
                        <div className="col-xs-4">
                            <img className="img-responsive" src={Logo1} alt=""/>
                                <span className="match-result">3</span>
                        </div>
                        <div className="col-xs-4">
                            <span className="verses">VS</span>
                            <span className="match-time">90:00</span>
                        </div>
                        <div className="col-xs-4">
                            <img className="img-responsive" src={Logo2} alt=""/>
                                <span className="match-result">0</span>
                        </div>
                    </div>
                </div>
                <div className="league-result text-center">
                    <h2>Todays Match</h2>
                    <ul>
                        <MatchResult imgTeam1={Team2} imgTeam2={Team1} team1="Bra" team2="Arg" result="3-2"/>
                        <MatchResult imgTeam1={Team1} imgTeam2={Team2} team1="Arg" team2="Bra" result="7-4"/>
                        <MatchResult imgTeam1={Team2} imgTeam2={Team1} team1="Bra" team2="Arg" result="3-2"/>
                        <MatchResult imgTeam1={Team1} imgTeam2={Team2} team1="Arg" team2="Bra" result="7-4"/>
                        <MatchResult imgTeam1={Team2} imgTeam2={Team1} team1="Bra" team2="Arg" result="3-2"/>
                    </ul>
                </div>
            </div>
        );
    }
}
