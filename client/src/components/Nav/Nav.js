import React, { Component } from "react";
import logo from "../../images/devslogo.png"
// import { Link } from "react-router-dom";
import "./nav.css";



class Nav extends Component {
    render(){
        return (
          <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top">
            <div className="container">
              <button className="navbar-toggler navbar-toggler-center" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-brand" href="/">
                <img src={logo} width="95" height="38" alt="" />
              </a>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="/discover">BROWSE DEVELOPERS</a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="/Client">GET MATCHED WITH DEVELOPER</a>
                  </li>
                </ul>
              </div>
              <form className="form-inline">
               <a href="/Login"><button type="button" className="btn btn-outline-light navbar-btn">Sign in</button></a>
              </form>
            </div>
          </nav>
        );
    }
}

export default Nav;



