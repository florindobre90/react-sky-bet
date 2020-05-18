import React, {Component} from 'react';
import logoUrl from '../../assets/images/sky-bet-logo.png';

class Banner extends Component {

    state = {
        isChecked: false
    };

    handleChecked = event => {
        this.setState({isChecked: !this.state.isChecked});
    }

    render() {

        var txt;
        if (this.state.isChecked) {
            txt = 'checked'
        } else {
            txt = 'unchecked'
        }

        return (
            <div className="bg-secondary d-flex align-items-center p-3 my-3 text-white-50 rounded shadow-sm">
                <img className="mr-3 pull-center" src={logoUrl} alt="" width="150" />
                <div className="form-check mx-auto">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={this.handleChecked}/>
                    <label className="form-check-label" htmlFor="exampleCheck1" >Show primary markets {txt}</label>
                </div>
                <button type="button" className="btn btn-primary mx-auto">Toggle Price Format</button>
                <span className="badge badge-pill badge-warning mx-auto">0 Boost</span>
            </div>
        );
    }
}

export default Banner;