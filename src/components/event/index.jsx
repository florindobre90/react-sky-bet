import React, {Component} from 'react';
import ball from "../../assets/images/ball.png";

class Event extends Component {


    render() {
        const eventDetails = this.props.item;

        return (
            <div className="media text-muted pt-3">
                <img className="mr-3 pull-center m-1" src={ball} alt="" width="30" />
                <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                    <strong className="d-block text-gray-dark">{eventDetails.name}</strong>
                    10 - 0
                </p>
            </div>
        );
    }
}

export default Event;