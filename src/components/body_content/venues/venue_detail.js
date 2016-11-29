import React from "react";
import { fetchVenue } from '../../../actions/index';
import { connect } from 'react-redux';


class VenueDetails extends React.Component{

  componentDidMount() {
    this.props.fetchVenue(this.props.params.id);
  }

  render(){
    if(!this.props.venue){
      return <div>loading..</div>;
    }
    return (
      <div id="content" class="content">
        <h1 class="page-header">{this.props.venue.venue_name}</h1>
      </div>
    );
  }

}

// VenueDetails.propTypes = {
//   venue: React.PropTypes.object.isRequired
// }

function mapStateToProps(state){
  return {
    venue: state.venues.venue
  };
}

export default connect(mapStateToProps, { fetchVenue })(VenueDetails);
