import React, {Component} from 'react';
import TabContent from "./components/tabContent";

class Tabs extends Component {
    render() {
        return (
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#football" role="tab"
                       aria-controls="nav-home" aria-selected="true">football</a>
                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#results" role="tab"
                       aria-controls="nav-profile" aria-selected="false">results</a>
                </div>
            </nav>
            <TabContent />
        );
    }
}

export default Tabs;