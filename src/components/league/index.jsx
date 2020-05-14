import React, {Component} from 'react';
import Event from "../event";

class Legue extends Component {

    render() {

            const leagueDetails = this.props.item;
            const eventList = Object.keys(leagueDetails).map((item, i) => {
                return (<Event item={leagueDetails[item]} key={i}/>);
            });

        // console.log(leagueDetails);
        // console.log(eventList);

        return (
            <div className="my-3 p-3 bg-white rounded shadow-sm">
                <h6 className="border-bottom border-gray pb-2 mb-0">{leagueDetails[0].linkedEventTypeName} {leagueDetails[0].linkedEventTypeName ?? 'Other'}</h6>
                {eventList}
            </div>
        );
    }
}

export default Legue;