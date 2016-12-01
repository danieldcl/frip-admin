import React from "react";
import { fetchVenue } from '../../../actions/index';
import { connect } from 'react-redux';
import update from 'react-addons-update';


class VenueDetails extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      venue:''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchVenue(this.props.params.id);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({venue:nextProps.venue});
  }

  onChange(e){
    const key = e.target.name;
    var new_venue = update(this.state.venue, {[key]: {$set:e.target.value}});
    this.setState({venue:new_venue});
  }

  onSubmit(e){
    console.log(this.state.venue);
    e.preventDefault();
  }

  render(){
    if(!this.props.venue){
      return <div id="content" class="content">loading..</div>;
    }
    const { venue } = this.state;
    const style = {
      height:'150px'
    };
    return (
      <div id="content" class="content">

			<h1 class="page-header">{venue.venue_name} </h1>

			<div class="row">

			    <div class="col-md-12">

                    <div class="panel panel-inverse" data-sortable-id="form-validation-2">
                        <div class="panel-heading">
                            <div class="panel-heading-btn">
                                <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
                                <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-repeat"></i></a>
                                <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
                                <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
                            </div>
                            <h4 class="panel-title">Venue Data</h4>
                        </div>
                        <div class="panel-body panel-form">
              <form class="form-horizontal form-bordered" data-parsley-validate="true" onSubmit={this.onSubmit}>
								<div class="form-group">
									<label class="control-label col-md-2 col-sm-2">Venue Name* :</label>
									<div class="col-md-10 col-sm-10">
										<input class="form-control" type="text" onChange={this.onChange} name='venue_name'  data-type="text" value={venue.venue_name} data-parsley-required="true" />
									</div>
								</div>
								<div class="form-group">
									<label class="control-label col-md-2 col-sm-2">Overview* :</label>
									<div class="col-md-10 col-sm-10">
										<textarea class="form-control" style={style} name="venue_overview" value={venue.venue_overview} onChange={this.onChange} data-parsley-required="true"></textarea>
									</div>
								</div>
								<div class="form-group">
									<label class="control-label col-md-2 col-sm-2">Hours*: </label>
									<div class="col-md-10 col-sm-10">
                    <input class="form-control" type="text" onChange={this.onChange} name='venue_hours'  data-type="text" value={venue.venue_hours} data-parsley-required="true" />
                  </div>
								</div>
                <div class="form-group">
									<label class="control-label col-md-2 col-sm-2"> email* :</label>
									<div class="col-md-10 col-sm-10">
										<input class="form-control" type="text" onChange={this.onChange} name='venue_email'  data-type="text" value={venue.venue_email} data-parsley-required="true" />
									</div>
								</div>
                <div class="form-group">
									<label class="control-label col-md-2 col-sm-2"> phone* :</label>
									<div class="col-md-10 col-sm-10">
										<input class="form-control" type="text" onChange={this.onChange} name='venue_phone'  data-type="text" value={venue.venue_phone} data-parsley-required="true" />
									</div>
								</div>
                <div class="form-group">
									<label class="control-label col-md-2 col-sm-2"> price* :</label>
									<div class="col-md-10 col-sm-10">
										<input class="form-control" type="text" onChange={this.onChange} name='venue_price'  data-type="text" value={venue.venue_price} data-parsley-required="true" />
									</div>
								</div>
                <div class="form-group">
									<label class="control-label col-md-2 col-sm-2">Adult price* :</label>
									<div class="col-md-10 col-sm-10">
										<input class="form-control" type="text" onChange={this.onChange} name='venue_price_adult'  data-type="text" value={venue.venue_price_adult} data-parsley-required="true" />
									</div>
								</div>
                <div class="form-group">
									<label class="control-label col-md-2 col-sm-2"> location* :</label>
									<div class="col-md-10 col-sm-10">
										<input class="form-control" type="text" onChange={this.onChange} name='venue_location'  data-type="text" value={venue.venue_location} data-parsley-required="true" />
									</div>
								</div>
                <div class="form-group">
									<label class="control-label col-md-2 col-sm-2">Image :</label>
									<div class="col-md-10 col-sm-10">
										<input class="form-control" type="text" onChange={this.onChange} name='venue_img'  data-type="text" value={venue.venue_img} data-parsley-required="true" />
									</div>
								</div>
								<div class="form-group">
									<label class="control-label col-md-2 col-sm-2">Regular Expression :</label>
									<div class="col-md-10 col-sm-10">
										<input class="form-control parsley-validated" type="text" id="data-regexp" data-parsley-pattern="#[A-Fa-f0-9]{6}" placeholder="hexa color code" data-required="true" />
									</div>
								</div>
								<div class="form-group">
									<label class="control-label col-md-2 col-sm-2"></label>
									<div class="col-md-10 col-sm-10">
										<button type="submit" class="btn btn-primary">Submit</button>
									</div>
								</div>
              </form>
                        </div>
                    </div>

                </div>

            </div>

		</div>
    );
  }

}

VenueDetails.propTypes = {
  venue: React.PropTypes.object.isRequired
}

function mapStateToProps(state){
  return {
    venue: state.venues.venue
  };
}

export default connect(mapStateToProps, { fetchVenue })(VenueDetails);
