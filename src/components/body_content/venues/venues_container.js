import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import { connect } from 'react-redux';
import { fetchVenues } from '../../../actions/index';
import VenueList from './venue_list';


class Venues extends React.Component{
  constructor(props){
    super(props);
  }

  // componentDidMount() {
  //   this.props.fetchVenues();
  // }
  componentWillMount() {
    this.props.fetchVenues();
  }

  manageTable() {
    return window.TableManageDefault.init();
  }

  componentDidUpdate(prevProps, prevState) {
    this.manageTable();
  }

  render(){
    if(this.props.venues){
      return (
        <VenueList venues={this.props.venues} />
      );
    }
    return (<div id="content" class="content">Loading data ...</div>);
  }

}

Venues.propTypes = {
  venues: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
}

function mapStateToProps(state){
  return {
    venues: state.venues.all
  };
}

export default connect(mapStateToProps, { fetchVenues })(Venues);
