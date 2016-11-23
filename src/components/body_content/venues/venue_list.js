import React from 'react';
import { Link } from 'react-router';

export default (props) => {

    return (
      <div id="content" class="content">
  			<h1 class="page-header">Venues</h1>
  			<div class="row">
  			    <div class="col-md-12">
                      <div class="panel panel-inverse">
                          <div class="panel-heading">
                              <div class="panel-heading-btn">
                                  <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
                                  <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-repeat"></i></a>
                                  <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
                              </div>
                              <h4 class="panel-title">Data Table - Default</h4>
                          </div>
                          <div class="panel-body">
                              <table id="data-table" class="table table-striped table-bordered">
                                  <thead>
                                      <tr>
                                          <th>Venue Name</th>
                                          <th>Overview</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                    {renderVenues(props.venues)}
                                  </tbody>
                              </table>
                          </div>
                      </div>

                  </div>

              </div>
  		</div>

    );


}

function renderVenues(venues){
  return venues.map((venue) => {
    return (
        <tr key={venue.id}>
          <td>
            <Link to={`venues/${venue.venue_name}`} >
              {venue.venue_name}
            </Link>
          </td>
          <td>
            <Link to={`venues/${venue.venue_name}`} >
              {venue.venue_overview}
            </Link>
          </td>
        </tr>
    );
  });
}

// function manageTable() {
//   return window.TableManageDefault.init();
// }
