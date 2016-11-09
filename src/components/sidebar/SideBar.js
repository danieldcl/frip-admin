import React from 'react';
import { Link } from 'react-router';


export default () => {
    return (
      <div>
        <div id="sidebar" class="sidebar">
          {/*<!-- begin sidebar scrollbar -->*/}
          <div data-scrollbar="true" data-height="100%">
            {/*<!-- begin sidebar nav -->*/}
            <ul class="nav">
              {/*<!-- begin sidebar minify button -->*/}
              <li><a href="javascript:;" class="sidebar-minify-btn" data-click="sidebar-minify"><i class="fa fa-angle-double-left"></i></a></li>
              {/*<!-- end sidebar minify button -->*/}
              <li class="nav-header">Navigation</li>
              <li class="has-sub">
                <Link to="/">
                    <i class="fa fa-laptop"></i>
                    <span>Dashboard</span>
                  </Link>
              </li>
              <li class="has-sub">
                <a href="javascript:;">
                  <span class="badge pull-right">10</span>
                  <i class="fa fa-inbox"></i>
                  <span>Email</span>
                </a>
                <ul class="sub-menu">
                    <li><a href="">Inbox</a></li>
                </ul>
              </li>
              <li class="has-sub">
                <Link to="/new/activity">
                    <i class="fa fa-file-o"></i>
                    <span>Add Activity</span>
                  </Link>
              </li>

              <li class="has-sub">
                <a href="javascript:;">
                    <b class="caret pull-right"></b>
                    <i class="fa fa-th"></i>
                    <span>Tables</span>
                </a>
                <ul class="sub-menu">
                  <li><a href="">Basic Tables</a></li>
                </ul>
              </li>

              <li class="has-sub">
                  <a href="javascript:;">
                    <b class="caret pull-right"></b>
                      <i class="fa fa-area-chart"></i>
                    <span>Chart</span>
                </a>
                <ul class="sub-menu">
                    <li><a href="">Flot Chart</a></li>
                </ul>
              </li>
              <li><a href=""><i class="fa fa-calendar"></i> <span>Calendar</span></a></li>

                  {/*<!-- begin sidebar minify button -->*/}
              <li><a href="javascript:;" class="sidebar-minify-btn" data-click="sidebar-minify"><i class="fa fa-angle-double-left"></i></a></li>
                  {/*<!-- end sidebar minify button -->*/}
            </ul>
            {/*<!-- end sidebar nav -->*/}
          </div>
          {/*<!-- end sidebar scrollbar -->*/}
        </div>
        <div class="sidebar-bg"></div>
      </div>
    );
  }