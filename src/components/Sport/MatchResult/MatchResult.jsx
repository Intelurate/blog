import React, { Component } from 'react';

export default class MatchResult extends Component {
    render() {
        const { imgTeam1, imgTeam2, team1, team2, result} = this.props;
        return (
            <li>
                <ul>
                    <li>
                        <div className="pull-left">
                            <img className="img-responsive" src={imgTeam1} alt=""/>
                            <span className="team-name"> {team1}</span>
                        </div>
                    </li>
                    <li>
                        <span className="match-result">{result}</span>
                    </li>
                    <li>
                        <div className="pull-right">
                            <span className="team-name">{team2} </span>
                            <img className="img-responsive" src={imgTeam2} alt=""/>
                        </div>
                    </li>
                </ul>
            </li>
        );
    }
}
