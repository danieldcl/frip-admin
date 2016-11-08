import React from 'react';
import PageLoader from './page_loader/PageLoader';
import PageContainer from './page_container/PageContainer';


export default class App extends React.Component{
  render(){
    return (
      <div>

        {/*<!-- begin #page-loader -->*/}
        <PageLoader />
      	{/*<!-- end #page-loader -->*/}

      	{/*<!-- begin #page-container -->*/}
      	<PageContainer />
      	{/*<!-- end page container -->*/}

      </div>
    );
  }

}
