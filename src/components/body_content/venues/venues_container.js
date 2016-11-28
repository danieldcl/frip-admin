import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import $ from 'jquery';
import { connect } from 'react-redux';
import { fetchVenues } from '../../../actions/index';
import VenueTable from './venue_table';


class Venues extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount() {
    if(this.props.venues.length){
      this.manageTable();
    }

  }
  componentWillMount() {
    this.props.fetchVenues();
  }

  manageTable() {
    return window.TableManageDefault.init();
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(ReactDOM.findDOMNode(this));
    // console.log(window);

    window.destroyTable();
      this.manageTable();

  }

  render(){
    if(this.props.venues){
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

                              <VenueTable venues={this.props.venues} />

                            </div>
                        </div>

                    </div>

                </div>
    		</div>
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
