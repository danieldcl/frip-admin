import React from 'react';
import { Link } from 'react-router';
import Footer from '../footer/Footer';

export default () => {
  // use ES6 or function syntax when the component doesn't have to deal with store
    return (
      <div>
        <div id="sidebar" class="sidebar">
          {/*<!-- begin sidebar scrollbar -->*/}
          <div data-scrollbar="true" data-height="100%">
            {/*<!-- begin sidebar nav -->*/}
            <ul class="nav">
              <li class="nav-header">Navigation</li>
              <li class="has-sub">
                <Link to="/">
                    <i class="fa fa-laptop"></i>
                    <span>Dashboard</span>
                  </Link>
              </li>
              <li class="has-sub">
                <Link to="/venues">
                    <i class="fa fa-cubes"></i>
                    <span>Venues</span>
                  </Link>
              </li>
              <li class="has-sub">
                <a>
                  <span class="badge pull-right">10</span>
                  <i class="fa fa-inbox"></i>
                  <span>Requests</span>
                </a>
                <ul class="sub-menu">
                    <li><Link to="/new_requests">New Requests</Link></li>
                    <li><Link to="/requests">All Requests</Link></li>
                </ul>
              </li>
              <li class="has-sub">
                <Link to="/venue/new_activity">
                    <i class="fa fa-file-o"></i>
                    <span>Add Activity</span>
                  </Link>
              </li>

              <li class="has-sub">
                <a>
                    <b class="caret pull-right"></b>
                    <i class="fa fa-th"></i>
                    <span>Tables</span>
                </a>
                <ul class="sub-menu">
                  <li><Link to="">Basic Tables</Link></li>
                </ul>
              </li>

              <li class="has-sub">
                  <Link to="/">
                    <b class="caret pull-right"></b>
                      <i class="fa fa-area-chart"></i>
                    <span>Chart</span>
                </Link>
                <ul class="sub-menu">
                    <li><Link to="">Flot Chart</Link></li>
                </ul>
              </li>
              <li><Link to=""><i class="fa fa-calendar"></i> <span>Calendar</span></Link></li>

                  {/*<!-- begin sidebar minify button -->*/}
              <li><Link to="/" class="sidebar-minify-btn" data-click="sidebar-minify"><i class="fa fa-angle-double-left"></i></Link></li>
                  {/*<!-- end sidebar minify button -->*/}
                  <li class="has-sub">
                    <Footer />
                  </li>
            </ul>
            {/*<!-- end sidebar nav -->*/}
          </div>
          {/*<!-- end sidebar scrollbar -->*/}
        </div>
        <div class="sidebar-bg"></div>
      </div>
    );
  }
