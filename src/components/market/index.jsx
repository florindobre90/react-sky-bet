import React, {Component} from 'react';
import {outcomesListSelector} from "../../redux/selector";
import {getEvents} from "../../redux/actions";
import {connect} from "react-redux";
import OutcomeList from "../outcomeList";

class Market extends Component {
    render() {
        const marketDetails = this.props.item[0];
        // console.log('market.outcomes', this.props.outcomesList);

        const outcomeListHtml = this.props.outcomesList &&  Object.keys(this.props.outcomesList).map((item, i) => {
            // console.log('market.for.item', item);
            return (marketDetails.marketId == item ? <OutcomeList item={this.props.outcomesList[item]} key={i}/> : '');
        });

        return (
            <div>
                <b>{marketDetails.name} (#{marketDetails.eventId})</b><br/>
                {outcomeListHtml}
            </div>
        );
    }
}

// export default Market;

const mapStateToProps = state => {
    return {
        outcomesList: outcomesListSelector()(state),
    };
};
// const mapDispatchToProps = dispatch => {
//     return {
//         getLiveEvents: (withPrimaryMarkets = true) => {
//             dispatch(getEvents(withPrimaryMarkets));
//         },
//     };
// };
export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(Market);