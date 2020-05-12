import React, {Component} from 'react';
import League from '../../components/league';

class LeagueList extends Component {
    state = {
        leagues: [],
    };

    componentDidMount() {
        this.fetchData();
    }

    async fetchData() {

        const resp = await fetch('http://localhost:8888/football/live');
        const data = await resp.json();

        const leaguesGrouped = data.events.reduce(( acc, event ) => {
            if(acc[event.linkedEventTypeId]) {
                acc[event.linkedEventTypeId].push(event);
                return acc;
            }
            else {
                acc[event.linkedEventTypeId] = [event];
                return acc;
            }
        }, {} );
        console.log(leaguesGrouped);
        this.setState({ leagues: leaguesGrouped  });
    };

    render() {
        const leaguesList = Object.keys(this.state.leagues).map((item, i) => {
            return ( <League item={this.state.leagues[item]} key={i} /> );
        });

        return (
            <div>
                {leaguesList}
            </div>
        );
    }
}

export default LeagueList;