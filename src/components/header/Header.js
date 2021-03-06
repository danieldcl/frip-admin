import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component{
  render(){
    return (
      <div>

        <div id="header" class="header navbar navbar-default navbar-fixed-top">
          {/*<!-- begin container-fluid -->*/}
          <div class="container-fluid">
            {/*<!-- begin mobile sidebar expand / collapse button -->*/}
            <div class="navbar-header">
    					<Link href="/" class="navbar-brand"><span><img src="/assets/img/frip.png"/></span> Admin</Link>
    					<button type="button" class="navbar-toggle" data-click="sidebar-toggled">
    						<span class="icon-bar"></span>
    						<span class="icon-bar"></span>
    						<span class="icon-bar"></span>
    					</button>
    					<button type="button" class="navbar-toggle p-0 m-r-5" data-toggle="collapse" data-target="#top-navbar">
    					    <span class="fa-stack fa-lg text-inverse">
                                <i class="fa fa-square-o fa-stack-2x m-t-2"></i>
                                <i class="fa fa-cog fa-stack-1x"></i>
                            </span>
    					</button>
    				</div>
            {/*<!-- end mobile sidebar expand / collapse button -->*/}


            {/*<!-- begin navbar-collapse -->*/}
                    <div class="collapse navbar-collapse pull-left" id="top-navbar">
                        <ul class="nav navbar-nav">
                            <li>
                                <a href="http://www.fripapp.com" target="_blank">
                                    <i class="fa fa-diamond fa-fw"></i> Client Site
                                </a>
                            </li>
                        </ul>
                    </div>
    				{/*<!-- end navbar-collapse -->*/}

            {/*<!-- begin header navigation right -->*/}
            <ul class="nav navbar-nav navbar-right">
              <li class="dropdown">
                <a href="javascript:;" data-toggle="dropdown" class="dropdown-toggle f-s-14">
                  <i class="fa fa-bell-o"></i>
                  <span class="label">5</span>
                </a>
                <ul class="dropdown-menu media-list pull-right animated fadeInDown">
                                <li class="dropdown-header">Notifications (5)</li>
                                <li class="media">
                                    <a href="javascript:;">
                                        <div class="media-left"><i class="fa fa-bug media-object bg-red"></i></div>
                                        <div class="media-body">
                                            <h6 class="media-heading">Server Error Reports</h6>
                                            <div class="text-muted f-s-11">3 minutes ago</div>
                                        </div>
                                    </a>
                                </li>
                                <li class="media">
                                    <a href="javascript:;">
                                        <div class="media-left"><img src="" class="media-object" alt="" /></div>
                                        <div class="media-body">
                                            <h6 class="media-heading">John Smith</h6>
                                            <p>Quisque pulvinar tellus sit amet sem scelerisque tincidunt.</p>
                                            <div class="text-muted f-s-11">25 minutes ago</div>
                                        </div>
                                    </a>
                                </li>
                                <li class="media">
                                    <a href="javascript:;">
                                        <div class="media-left"><img src="" class="media-object" alt="" /></div>
                                        <div class="media-body">
                                            <h6 class="media-heading">Olivia</h6>
                                            <p>Quisque pulvinar tellus sit amet sem scelerisque tincidunt.</p>
                                            <div class="text-muted f-s-11">35 minutes ago</div>
                                        </div>
                                    </a>
                                </li>
                                <li class="media">
                                    <a href="javascript:;">
                                        <div class="media-left"><i class="fa fa-plus media-object bg-green"></i></div>
                                        <div class="media-body">
                                            <h6 class="media-heading"> New User Registered</h6>
                                            <div class="text-muted f-s-11">1 hour ago</div>
                                        </div>
                                    </a>
                                </li>
                                <li class="media">
                                    <a href="javascript:;">
                                        <div class="media-left"><i class="fa fa-envelope media-object bg-blue"></i></div>
                                        <div class="media-body">
                                            <h6 class="media-heading"> New Email From John</h6>
                                            <div class="text-muted f-s-11">2 hour ago</div>
                                        </div>
                                    </a>
                                </li>
                                <li class="dropdown-footer text-center">
                                    <a href="javascript:;">View more</a>
                                </li>
                </ul>
              </li>
              <li class="dropdown navbar-user">
                <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">
                  <img src="" alt="" />
                  <span class="hidden-xs">Adam Schwartz</span>
                </a>
                <ul class="dropdown-menu animated fadeInRight">
                  <li class="arrow"></li>
                  <li><a href="javascript:;">Edit Profile</a></li>
                  <li><a href="javascript:;"><span class="badge badge-danger pull-right">2</span> Inbox</a></li>
                  <li><a href="javascript:;">Calendar</a></li>
                  <li><a href="javascript:;">Setting</a></li>
                  <li class="divider"></li>
                  <li><a href="javascript:;">Log Out</a></li>
                </ul>
              </li>
            </ul>
            {/*<!-- end header navigation right -->*/}
          </div>
          {/*<!-- end container-fluid -->*/}
        </div>

      </div>

    );
  }
}
