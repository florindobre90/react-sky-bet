import React, {Component} from 'react';
import Outcome from "../outcome";

class OutcomeList extends Component {
    render() {

        const outcomesList = this.props.item &&  Object.keys(this.props.item).map((item, i) => {
            return (<Outcome item={this.props.item[item]} key={i}/>);
        });

        return (
            <>
                <div className="text-left">
                    {outcomesList}
                </div>
            </>
        );
    }
}

export default OutcomeList;