import React, {Component} from 'react';
import logoUrl from '../../assets/images/sky-bet-logo.png';

class Banner extends Component {

    render() {
        return (
            <div className="bg-purple d-flex align-items-center p-3 my-3 text-white-50 rounded shadow-sm">
                <img className="mr-3 pull-center" src={logoUrl} alt="" width="150"/>
            </div>
        );
    }
}

export default Banner;