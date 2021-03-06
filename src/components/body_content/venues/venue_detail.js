import React from "react";
import { fetchVenue } from '../../../actions/index';
import { connect } from 'react-redux';
import update from 'react-addons-update';
import TripList from './venue_trips';

class VenueDetails extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      venue:''
    };
    this.venueOnChange = this.venueOnChange.bind(this);
    this.tripOnChange = this.tripOnChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.addEmptyTrip = this.addEmptyTrip.bind(this);

  }

  componentWillMount() {
    this.props.fetchVenue(this.props.params.id);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({venue:nextProps.venue});
  }

  venueOnChange(e){
    const name = e.target.name;
    var new_venue = '';
    if (e.target.type=='checkbox'){
      if (e.target.checked){
        new_venue = update(this.state.venue, {[name]:{$set: 'Yes'}});
      }else{
        new_venue = update(this.state.venue, {[name]:{$set: 'No'}});
      }
    }else{
      new_venue = update(this.state.venue, {[name]: {$set:e.target.value}});
    }
    this.setState({venue:new_venue});
  }

  tripOnChange(e){
    const name = e.target.name;
    const id = e.target.id;
    var new_trip = '';
    if (e.target.type=='checkbox'){
      if (e.target.checked){
        new_trip = update(this.state.venue.trip[id], {[name]:{$set: 'Yes'}});
      }else{
        new_trip = update(this.state.venue.trip[id], {[name]:{$set: 'No'}});
      }
    }else{
      new_trip = update(this.state.venue.trip[id], {[name]: {$set:e.target.value}});
    }

    var new_trips = update(this.state.venue.trip, {[id]:{$set:new_trip}});
    var new_venue = update(this.state.venue, {trip:{$set:new_trips}});

    this.setState({venue:new_venue});
  }

  addEmptyTrip(){
    var newTrip = {
      trip_title:'N/A',
      trip_img:'N/A',
      trip_overview:'N/A',
      trip_price:'N/A',
      trip_resources:'N/A',
      trip_size:0,
      trip_staff_led:'N/A',
      trip_student_adult_ratio:'N/A',
      trip_venue:'N/A',
    };

    var new_venue = update(this.state.venue, {trip:{$set:this.state.venue.trip.concat(newTrip)}});

    this.setState({venue: new_venue});
  }

  popTrip(tripIndex){
      this.state.venue.trip.splice(tripIndex,1);
      this.setState({venue:this.state.venue});
  }

  onSubmit(e){
    e.preventDefault();
    console.log(this.state.venue);
  }


  render(){
    if(this.state.venue){

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
    										<input class="form-control" type="text" onChange={this.venueOnChange} name='venue_name'  data-type="text" value={venue.venue_name} data-parsley-required="true" />
    									</div>
    								</div>
    								<div class="form-group">
    									<label class="control-label col-md-2 col-sm-2">Overview* :</label>
    									<div class="col-md-10 col-sm-10">
    										<textarea class="form-control" style={style} name="venue_overview" value={venue.venue_overview} onChange={this.venueOnChange} data-parsley-required="true"></textarea>
    									</div>
    								</div>
    								<div class="form-group">
    									<label class="control-label col-md-2 col-sm-2">Hours*: </label>
    									<div class="col-md-10 col-sm-10">
                        <textarea class="form-control" style={style} onChange={this.venueOnChange} name='venue_hours'  data-type="text" value={venue.venue_hours} data-parsley-required="true"></textarea>
                      </div>
    								</div>
                    <div class="form-group">
    									<label class="control-label col-md-2 col-sm-2"> email* :</label>
    									<div class="col-md-10 col-sm-10">
    										<input class="form-control" type="text" onChange={this.venueOnChange} name='venue_email'  data-type="text" value={venue.venue_email} data-parsley-required="true" />
    									</div>
    								</div>
                    <div class="form-group">
    									<label class="control-label col-md-2 col-sm-2"> phone* :</label>
    									<div class="col-md-10 col-sm-10">
    										<input class="form-control" type="text" onChange={this.venueOnChange} name='venue_phone'  data-type="text" value={venue.venue_phone} data-parsley-required="true" />
    									</div>
    								</div>
                    <div class="form-group">
    									<label class="control-label col-md-2 col-sm-2"> price* :</label>
    									<div class="col-md-10 col-sm-10">
    										<input class="form-control" type="text" onChange={this.venueOnChange} name='venue_price'  data-type="text" value={venue.venue_price} data-parsley-required="true" />
    									</div>
    								</div>
                    <div class="form-group">
    									<label class="control-label col-md-2 col-sm-2">Adult price* :</label>
    									<div class="col-md-10 col-sm-10">
    										<input class="form-control" type="text" onChange={this.venueOnChange} name='venue_price_adult'  data-type="text" value={venue.venue_price_adult} data-parsley-required="true" />
    									</div>
    								</div>
                    <div class="form-group">
    									<label class="control-label col-md-2 col-sm-2"> location* :</label>
    									<div class="col-md-10 col-sm-10">
    										<input class="form-control" type="text" onChange={this.venueOnChange} name='venue_location'  data-type="text" value={venue.venue_location} data-parsley-required="true" />
    									</div>
    								</div>
                    <div class="form-group">
    									<label class="control-label col-md-2 col-sm-2">Image :</label>
    									<div class="col-md-10 col-sm-10">
    										<input class="form-control" type="text" onChange={this.venueOnChange} name='venue_img'  data-type="text" value={venue.venue_img} />
    									</div>
    								</div>
                    <div class="form-group">
    									<label class="control-label col-md-2 col-sm-2">Special Programs :</label>
    									<div class="col-md-10 col-sm-10">
    										<textarea class="form-control parsley-validated" name='venue_special_programs' value={venue.venue_special_programs} onChange={this.venueOnChange}></textarea>
    									</div>
    								</div>
                    <div class="form-group">
                      <label class="control-label col-md-2 col-sm-2">Accessibles :</label>
                      <div class="col-md-10 col-sm-10">
                        <label class="checkbox-inline">
                          <input name='venue_cafeteria' type="checkbox" value={venue.venue_cafeteria} onChange={this.venueOnChange} checked={venue.venue_cafeteria=='Yes'? true:false}/>cafeteria
                        </label>
                        <label class="checkbox-inline">
                          <input name='venue_wheelchair_accessible' type="checkbox" value={venue.venue_wheelchair_accessible} onChange={this.venueOnChange} checked={venue.venue_wheelchair_accessible=='Yes'? true:false}/>Wheelchair
                        </label>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="control-label col-md-2 col-sm-2">{venue.trip.length} Trips:</label>

                        <TripList trips={venue.trip} style={style} tripOnChange={this.tripOnChange} addEmptyTrip={this.addEmptyTrip} popTrip={this.popTrip.bind(this)}/>

                      <div class="col-md-10 col-sm-10 col-sm-offset-2">
                        <button type="button" onClick={this.addEmptyTrip}>Add New Trip</button>
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

    return <div id="content" class="content">Loading...</div>;

  }

}


function mapStateToProps(state){
  console.log(state);
  return {
    venue: state.venues.venue
  };
}

export default connect(mapStateToProps, { fetchVenue })(VenueDetails);
