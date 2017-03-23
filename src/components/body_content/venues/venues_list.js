import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { connect } from 'react-redux';
import { fetchVenues } from '../../../actions/index';
import VenuesTable from './venue_table';
import shallowCompare from 'react-addons-shallow-compare';


class Venues extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.fetchVenues();
  }

  componentDidMount() {
    if(this.props.venues.length){
      window.TableManageDefault.init();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    window.destroyTable();
    window.TableManageDefault.init();
    if(localStorage.page){
      window.getSearch(localStorage.searchBoxValue);
      window.changeTableLen(Number(localStorage.len));
      window.jumpToPage(Number(localStorage.page));
    }
  }
  componentWillUnmount() {
    const info = window.tableInfo();
    localStorage.setItem('page',info.page);
    localStorage.setItem('len',info.length);
    localStorage.setItem('searchBoxValue', window.getSearchBoxValue());

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

                              <VenuesTable venues={this.props.venues} />

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
  console.log(state);
  return {
    venues: state.venues.all
  };
}

export default connect(mapStateToProps, { fetchVenues })(Venues);
