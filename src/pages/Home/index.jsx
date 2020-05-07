import React, {Component} from 'react';
import './Home.scss';
import ball  from '../../assets/images/ball.png';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <h6 className="border-bottom border-gray pb-2 mb-0">Football games</h6>
                <div className="media text-muted pt-3">
                    <img className="mr-3 pull-center m-1" src={ball} alt="" width="30" />
                    <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <strong className="d-block text-gray-dark">FCSB vs Dinamo</strong>
                        10 - 0
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;
