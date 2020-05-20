import React, {Component} from 'react';
import {togglePriceSelector} from "../../redux/selector";
import {connect} from "react-redux";

class Outcome extends Component {
    render() {

        const outcome = this.props.item;
        const price = this.props.togglePrice ? outcome.price.num + '/' + outcome.price.den : outcome.price.decimal;
        // console.log('outcome.price.togglePrice', price);

        return (
            <>
                <div className="row">
                    <div className="col-md-8">
                        {outcome.name}
                    </div>
                    <div className="col-md-4 text-danger text-right">
                        {price}
                    </div>
                </div>
            </>
        );
    }
}

// export default Outcome;
const mapStateToProps = state => {
    return {
        togglePrice: togglePriceSelector()(state),
    };
};

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(Outcome);