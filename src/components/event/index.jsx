import React, {Component} from 'react';
import ball from "../../assets/images/ball.png";
import {isLoadingSelector, liveEventsSelector} from "../../redux/selector";
import {getEvents} from "../../redux/actions";
import {connect} from "react-redux";
import { marketsListSelector} from "../../redux/selector";
// import {getMarkets} from "../../redux/actions";
// import {connect} from "react-redux";
import Market from "../market";

class Event extends Component {

    render() {
        const eventDetails = this.props.item;
        // console.log('marketsList', this.props.marketsList);
        // console.log('eventDetails.markets', eventDetails.markets);
        // const marketList = this.props.marketsList &&  Object.keys(this.props.marketsList).map((item, i) => {
        //     return (<Market item={this.props.marketsList[item]} key={i}/>);
        // });
        // console.log('event.marketsList', this.props.marketsList);
        // console.log('event.eventDetails.markets', eventDetails.markets);
         const markethtml = this.props.marketsList &&  Object.keys(this.props.marketsList).map((item, i) => {
             // console.log('markethtml', item);
             return (eventDetails.markets == item ? <Market item={this.props.marketsList[item]} key={i}/> : '');
         });

        return (
            <>
                <div className="media text-muted pt-3">
                    <img className="mr-3 pull-center m-1" src={ball} alt="" width="30" />
                    <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <strong className="d-block text-gray-dark">{eventDetails.name} (#{eventDetails.eventId})</strong>
                        {/*Markets: <br/>http://localhost:8888/sportsbook/market/ <br/>{eventDetails.markets}<br/>*/}
                    </p>
                </div>
                <h6 className="text-center border-gray p-2 mb-0"> {markethtml}</h6>
            </>
        );
    }
}

// export default Event;
const mapStateToProps = state => {
    return {
        marketsList: marketsListSelector()(state),
    };
};
const mapDispatchToProps = dispatch => {
    return {
        getLiveEvents: (withPrimaryMarkets = true) => {
            dispatch(getEvents(withPrimaryMarkets));
        },
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Event);
// {
//     "routes": {
//     "football": {
//         "live": "/football/live"
//     },
//     "sportsbook": {
//         "event": "/sportsbook/event/:eventId",
//             "market": "/sportsbook/market/:marketId",
//             "outcome": "/sportsbook/outcome/:outcomeId"
//     }
// }
// }