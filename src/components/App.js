import React from 'react';
import PageLoader from './page_loader/PageLoader';
import PageContainer from './page_container/PageContainer';
import Header from './header/Header';
import Footer from './footer/Footer';
import SideBar from './sidebar/SideBar';
import ThemePanel from './theme_panel/ThemePanel';


export default class App extends React.Component{
  render(){
    return (
      <div>

        {/*<!-- begin #page-loader -->*/}
        <PageLoader />
      	{/*<!-- end #page-loader -->*/}

      	{/*<!-- begin #page-container -->*/}
        <div id="page-container" class="fade page-sidebar-fixed page-header-fixed">
          {/*<!-- begin #header -->*/}
          <Header />
          {/*<!-- end #header -->*/}

          {/*<!-- begin #sidebar -->*/}
          <SideBar />
          {/*<!-- end #sidebar -->*/}

          {/*<!-- begin #content -->*/}
          {this.props.children}
          {/*<!-- end #content -->*/}

          {/*<!-- begin theme-panel -->*/}
          <ThemePanel />
          {/*<!-- end theme-panel -->*/}

          {/*<!-- begin scroll to top btn -->*/}
          <a href="javascript:;" class="btn btn-icon btn-circle btn-success btn-scroll-to-top fade" data-click="scroll-top"><i class="fa fa-angle-up"></i></a>
          {/*<!-- end scroll to top btn -->*/}
        </div>
      	{/*<!-- end page container -->*/}

      </div>
    );
  }

}
