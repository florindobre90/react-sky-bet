import React, {Component} from 'react';


class Navbar extends Component {
    render() {
        return (
            <div className="nav-scroller bg-white shadow-sm">
                <nav className="nav nav-underline">
                    <a className="nav-link active" href="/">Dashboard</a>
                    <a className="nav-link" href="/about">
                        About
                        <span className="badge badge-pill bg-light align-text-bottom">27</span>
                    </a>
                </nav>
            </div>
        );
    }
}

export default Navbar;