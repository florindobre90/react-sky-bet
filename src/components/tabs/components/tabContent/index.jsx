import React, {Component} from 'react';

class TabContent extends Component {
    render() {
        return (
            <div>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">football</div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">results</div>
                </div>
            </div>
        );
    }
}

export default TabContent;