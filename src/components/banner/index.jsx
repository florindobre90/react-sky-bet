import React, {Component} from 'react';
import logoUrl from '../../assets/images/sky-bet-logo.png';

class Banner extends Component {

    render() {
        return (
            <div className="bg-secondary d-flex align-items-center p-3 my-3 text-white-50 rounded shadow-sm">
                <img className="mr-3 pull-center" src={logoUrl} alt="" width="150" />
                <div className="form-check mx-auto">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Show primary markets</label>
                </div>
                <button type="button" className="btn btn-primary mx-auto">Toggle Price Format</button>
                <span className="badge badge-pill badge-warning mx-auto">0 Boost</span>
            </div>
        );
    }
}

export default Banner;