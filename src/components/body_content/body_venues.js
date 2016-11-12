import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { fetchVenues } from '../../actions/index';


class Venues extends React.Component{
  constructor(props){
    super(props);
    this.state=({venue:[]});
  }

  ManageTable() {
    return window.TableManageDefault.init();
  }

  componentWillMount(){
    this.props.fetchVenues();
  }

  componentDidUpdate(prevProps, prevState) {
    this.ManageTable();
  }


  renderVenues(){
    return this.props.venues.map((venue, idx) => {
      return (
        <tr key={idx}>
          <td>
            {venue.venue_name}
          </td>
          <td>
            {venue.venue_overview}
          </td>
        </tr>
      );
    });
  }


  render(){
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
                                      {this.renderVenues()}
                                  </tbody>
                              </table>
                          </div>
                      </div>

                  </div>

              </div>
  		</div>

    );
  }

}

function mapStateToProps(state){
  return {
    venues: state.venues.all
  };
}

export default connect(mapStateToProps, { fetchVenues })(Venues);
