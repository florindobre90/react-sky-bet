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

        const leaguesList = this.props.liveEvents &&  Object.keys(this.props.liveEvents).map((item, i) => {
            return (<League item={this.props.liveEvents[item]} key={i}/>);
        });

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