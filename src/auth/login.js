import React from 'react';
import auth from '../actions/index';
import { Link } from 'react-router';

export default class Login extends React.Component{
    constructor(props){
      super(props);
      this.state = {email:'',password:''};
    }

    handleSubmit(e){
        e.preventDefault();
        var email = this.state.email;
        var password = this.state.password;
        console.log(email,password);

        auth.login(email, password, (loggedIn) => {
            if (loggedIn) {
                this.context.router.replace('/')
            }
        });
    }

    handleEmailChange(e){
      this.setState({email: e.target.value});
    }

    handlePasswordChange(e) {
       this.setState({password: e.target.value});
     }

    render() {
        return (
          <div id="page-container" class="fade">

            <div class="login login-with-news-feed">

              <div class="news-feed">
                  <div class="news-image">
                      <img src="assets/img/bg-4.jpg" data-id="login-cover-image" alt="" />
                  </div>
                  <div class="news-caption">
                      <h4 class="caption-title"><i class="fa fa-diamond text-success"></i> Announcing the Frip App Admin</h4>
                      <p>
                          Download the Color Admin app for iPhone®, iPad®, and Android™.
                      </p>
                  </div>
              </div>


              <div class="right-content">

                  <div class="login-header">
                      <div class="brand">
                          <span class="logo"></span> Frip App Admin
                          <small>The field trip planner.</small>
                      </div>
                      <div class="icon">
                          <i class="fa fa-sign-in"></i>
                      </div>
                  </div>


                  <div class="login-content">
                      <form class="margin-bottom-0" onSubmit={this.handleSubmit.bind(this)}>
                          <div class="form-group m-b-15">
                              <input type="text" class="form-control input-lg" placeholder="Email Address" onChange={this.handleEmailChange.bind(this)}/>
                          </div>
                          <div class="form-group m-b-15">
                              <input type="password" class="form-control input-lg" placeholder="Password" onChange={this.handlePasswordChange.bind(this)}/>
                          </div>
                          <div class="checkbox m-b-30">
                              <label>
                                  <input type="checkbox" /> Remember Me
                              </label>
                          </div>
                          <div class="login-buttons">
                              <button type="submit" class="btn btn-success btn-block btn-lg">Sign me in</button>
                          </div>
                          <div class="m-t-20 m-b-40 p-b-40">
                              Not a member yet? Click <Link to='/register' class="text-success">here</Link> to register.
                          </div>
                          <hr />
                          <p class="text-center text-inverse">
                              &copy; Frip App All Right Reserved 2015
                          </p>
                      </form>
                  </div>
              </div>
        </div>
	     </div>
      )
    }
}
