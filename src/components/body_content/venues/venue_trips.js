import React from 'react';

export default class TripList extends React.Component {

  render(){

    if(this.props.trips.length){
      var triplist = this.props.trips.map(
          (trip,key) => {
          return (
            <div key={key}>
              <a data-toggle="collapse" data-target={'#trip'+key}>[{key+1}] {trip.trip_title}</a>
              <div id={'trip'+key} class="collapse">
                <div class="form-group">
                  <label class="control-label col-md-3 col-sm-3">Title:</label>
                  <div class="col-md-9 col-sm-9">
                      <input class="form-control" type="text" id={key} onChange={this.props.tripOnChange} name='trip_title'  data-type="text" value={trip.trip_title} data-parsley-required="true" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-3 col-sm-3">Trip Venue:</label>
                  <div class="col-md-9 col-sm-9">
                      <input class="form-control" type="text" id={key} onChange={this.props.tripOnChange} name='trip_venue'  data-type="text" value={trip.trip_venue} data-parsley-required="true" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-3 col-sm-3">Overview*:</label>
                  <div class="col-md-9 col-sm-9">
                    <textarea class="form-control" style={this.props.style} id={key} name="trip_overview" value={trip.trip_overview} onChange={this.props.tripOnChange} data-parsley-required="true"></textarea>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-3 col-sm-3">Trip Image:</label>
                  <div class="col-md-9 col-sm-9">
                      <input class="form-control" type="text" id={key} onChange={this.props.tripOnChange} name='trip_img'  data-type="text" value={trip.trip_img} data-parsley-required="true" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-3 col-sm-3">Price:</label>
                  <div class="col-md-9 col-sm-9">
                      <textarea class="form-control" style={this.props.style} id={key} onChange={this.props.tripOnChange} name='trip_price' value={trip.trip_price} data-parsley-required="true"></textarea>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-3 col-sm-3">Trip Resources:</label>
                  <div class="col-md-9 col-sm-9">
                      <input class="form-control" type="text" id={key} onChange={this.props.tripOnChange} name='trip_resources'  data-type="text" value={trip.trip_resources} data-parsley-required="true" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-3 col-sm-3">Trip Size:</label>
                  <div class="col-md-9 col-sm-9">
                      <input class="form-control" type="number" id={key} onChange={this.props.tripOnChange} name='trip_size'  value={trip.trip_size} data-parsley-required="true" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-3 col-sm-3">Student Adult Ratio:</label>
                  <div class="col-md-9 col-sm-9">
                      <textarea class="form-control" style={this.props.style} id={key} onChange={this.props.tripOnChange} name='trip_student_adult_ratio' value={trip.trip_student_adult_ratio} data-parsley-required="true"></textarea>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-3 col-sm-3">Guide :</label>
                  <div class="col-md-9 col-sm-9">
                    <label class="checkbox-inline">
                      <input name='trip_staff_led' id={key} type="checkbox" value={trip.trip_staff_led} onChange={this.props.tripOnChange} checked={trip.trip_staff_led=='Yes'? true:false}/>staff led
                    </label>
                  </div>
                </div>

              </div>
            </div>
          );

        });

        return (
          <div class="col-md-10 col-sm-10">
            {triplist}
          </div>
        );
      }



    return (
      <div class="col-md-10 col-sm-10">
        Trip list is empty
      </div>
    );
  }
}
