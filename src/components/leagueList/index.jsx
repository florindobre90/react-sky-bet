import React, {Component} from 'react';

import { connect } from "react-redux";
import { getEvents } from "../../redux/actions";
import { isLoadingSelector, liveEventsSelector } from "../../redux/selector";

import League from '../../components/league';

class LeagueList extends Component {
    state = {
        leagues: [],
    };

    componentDidMount() {
        this.props.getLiveEvents(false);
    }

    render() {
        //console.log('props', this.props.liveEvents);
        const leaguesGrouped = this.props.liveEvents.reduce(( acc, event ) => {
            if(acc[event.linkedEventTypeId]) {
                acc[event.linkedEventTypeId].push(event);
                return acc;
            }
            else {
                acc[event.linkedEventTypeId] = [event];
                return acc;
            }
        }, {} );

        //this.setState({ leagues: leaguesGrouped });
        //console.log('leaguesGrouped', leaguesGrouped);

        const leaguesList = Object.keys(leaguesGrouped).map((item, i) => {
            return (<League item={leaguesGrouped[item]} key={i}/>);
        });

        //console.log('leaguesList', leaguesList);

        return (
            <>
                <div>
                    {this.props.isLoading ? "WOOOOOOOOOOOOOOOOOOOOOOO" : "NOT LOADING"}
                </div>
                <div>
                    {leaguesList}
                </div>
            </>
        );
    }
}

//export default LeagueList;
const mapStateToProps = state => {
    return {
        isLoading: isLoadingSelector()(state),
        liveEvents: liveEventsSelector()(state)
    };
};
const mapDispatchToProps = dispatch => {
    return {
        getLiveEvents: (withPrimaryMarkets = false) => {
            dispatch(getEvents(withPrimaryMarkets));
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LeagueList);