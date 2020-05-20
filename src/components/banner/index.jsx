import React, {Component} from 'react';
import logoUrl from '../../assets/images/sky-bet-logo.png';
import {isLoadingSelector, liveEventsSelector} from "../../redux/selector";
import {getEvents, setPriceToggled } from "../../redux/actions";
import {connect} from "react-redux";

class Banner extends Component {

    state = {
        isChecked: false,
        priceToggled: false,
    };

    handleChecked = event => {
        this.setState({isChecked: !this.state.isChecked});
        this.props.getLiveEvents(!this.state.isChecked);
        // console.log('banner.getMarkets', this.props.marketsList);
    }

    handleOutcomePrices = event => {
        this.setState({priceToggled: !this.state.priceToggled});
        // console.log('banner.priceToggle SET STATE', this.state.priceToggled);
        this.props.setPriceToggledPrice(!this.state.priceToggled);
    }

    render() {
        return (
            <div className="bg-secondary d-flex align-items-center p-3 my-3 text-white-50 rounded shadow-sm">
                <img className="mr-3 pull-center" src={logoUrl} alt="" width="150" />
                <div className="form-check mx-auto">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={this.handleChecked}/>
                    <label className="form-check-label" htmlFor="exampleCheck1" >Show primary markets</label>
                </div>
                <button type="button" className="btn btn-primary mx-auto" onClick={this.handleOutcomePrices}>Toggle Price Format</button>
                <span className="badge badge-pill badge-warning mx-auto">0 Boost</span>
            </div>
        );
    }
}

// export default Banner;
const mapStateToProps = state => {
    return {
        isLoading: isLoadingSelector()(state),
        liveEvents: liveEventsSelector()(state),
    };
};
const mapDispatchToProps = dispatch => {
    return {
        getLiveEvents: (withPrimaryMarkets = true) => {
            dispatch(getEvents(withPrimaryMarkets));
        },
        setPriceToggledPrice: (toggled = true) => {
            dispatch(setPriceToggled(toggled));
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Banner);