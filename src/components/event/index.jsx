import React, {Component} from 'react';
import ball from "../../assets/images/ball.png";
import {connect} from "react-redux";
import { marketsListSelector} from "../../redux/selector";
import Market from "../market";

class Event extends Component {

    render() {
         const eventDetails = this.props.item;

         const markethtml = this.props.marketsList &&  Object.keys(this.props.marketsList).map((item, i) => {
              return (eventDetails.markets == item ? <Market item={this.props.marketsList[item]} key={i}/> : '');
         });

        return (
            <>
                <div className="media text-muted pt-3">
                    <img className="mr-3 pull-center m-1" src={ball} alt="" width="30" />
                    <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <strong className="d-block text-gray-dark">{eventDetails.name} (#{eventDetails.eventId})</strong>
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

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(Event);
