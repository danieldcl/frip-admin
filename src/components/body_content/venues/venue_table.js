import React from 'react';
import { Link } from 'react-router';



export default class VenuesTable extends React.Component {
    render(){
      return (
        <table id="data-table" class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Venue Name</th>
                    <th>Overview</th>
                </tr>
            </thead>
            <tbody>
              {renderVenues(this.props.venues)}
            </tbody>
        </table>
      );
  }
}

VenuesTable.propTypes = {
  venues: React.PropTypes.array
}

function renderVenues(venues){
  return venues.map((venue) => {
    return (
        <tr key={venue.id}>
          <td>
            <Link to={`/venues/${venue.id}`} >
              {venue.venue_name}
            </Link>
          </td>
          <td>
            <Link to={`/venues/${venue.id}`} >
              {venue.venue_overview}
            </Link>
          </td>
        </tr>
    );
  });
}
