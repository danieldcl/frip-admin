import React from "react";


export default class BodyIndex extends React.Component{
  render(){
    return (
      <div>
        <div id="content" class="content">
          {/*<!-- begin breadcrumb -->*/}
          <ol class="breadcrumb pull-right">
            <li><a href="javascript:;">Home</a></li>
            <li class="active">Dashboard v2</li>
          </ol>
          {/*<!-- end breadcrumb -->*/}
          {/*<!-- begin page-header -->*/}
          <h1 class="page-header">Dashboard v2 <small>header small text goes here...</small></h1>
          {/*<!-- end page-header -->*/}
          {/*<!-- begin row -->*/}
          <div class="row">

              {/*<!-- begin col-3 -->*/}
              <div class="col-md-3 col-sm-6">
                  <div class="widget widget-stats bg-blue">
                      <div class="stats-icon stats-icon-lg"><i class="fa fa-tags fa-fw"></i></div>
                      <div class="stats-title">TODAY'S PROFIT</div>
                      <div class="stats-number">180,200</div>
                      <div class="stats-progress progress">
                                <div class="progress-bar" style={{width: "40.5%"}}></div>
                            </div>
                            <div class="stats-desc">Better than last week (40.5%)</div>
                  </div>
              </div>
              {/*<!-- end col-3 -->*/}
              {/*<!-- begin col-3 -->*/}
              <div class="col-md-3 col-sm-6">
                  <div class="widget widget-stats bg-purple">
                      <div class="stats-icon stats-icon-lg"><i class="fa fa-shopping-cart fa-fw"></i></div>
                      <div class="stats-title">NEW ORDERS</div>
                      <div class="stats-number">38,900</div>
                      <div class="stats-progress progress">
                                <div class="progress-bar" style={{width: "76.3%"}}></div>
                            </div>
                            <div class="stats-desc">Better than last week (76.3%)</div>
                  </div>
              </div>
              {/*<!-- end col-3 -->*/}
          </div>
          {/*<!-- end row -->*/}

        </div>

      </div>
    );
  }

}
