import React, {Component} from 'react';
import './Home.scss';
import LeagueList from "../../components/leagueList";

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <LeagueList />
            </div>
        );
    }
}

export default Home;
/*

import React from "react";
import { connect } from "react-redux";
import { getEvents } from "../redux/actions";
import { isLoadingSelector, liveEventsSelector } from "../redux/selectors";

class Home extends React.Component {
  componentDidMount() {}

  render() {
    console.log(this.props.liveEvents);
    return (
      <>
        <div>
          {this.props.isLoading ? "WOOOOOOOOOOOOOOOOOOOOOOO" : "NOT LOADING"}
        </div>
        <button onClick={() => this.props.getLiveEvents(false)}>
          Get Data
        </button>
        <ul>
          {this.props.liveEvents &&
            this.props.liveEvents.map(event => (
              <li key={`__li${event.name}`}>{event.name}</li>
            ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: isLoadingSelector()(state),
    liveEvents: state.eventsStore.events
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getLiveEvents: (withPrimaryMarkets = false) => {
      dispatch(getEvents(withPrimaryMarkets));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);


 */