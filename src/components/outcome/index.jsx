import React, {Component} from 'react';

class Outcome extends Component {
    render() {
        // console.log('outcome.props', this.props.item);

        const outcome = this.props.item;

        return (
            <>
                <div className="row">
                    <div className="col-md-8">
                        {outcome.name}
                    </div>
                    <div className="col-md-4 text-danger text-right">
                        {outcome.price.num}/{outcome.price.den} ({outcome.price.decimal})<br/>
                    </div>
                </div>
            </>
        );
    }
}

export default Outcome;