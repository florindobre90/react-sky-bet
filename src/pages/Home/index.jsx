import React, {Component} from 'react';
import './Home.scss';
import LeagueList from "../../components/leagueList";

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <LeagueList />
            </div>
        );
    }
}

export default Home;
