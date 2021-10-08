import { Redirect } from "react-router";
import React, { Component } from "../../../node_modules/react";
import "./navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      redirectVar: null,
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  async componentDidMount() { }
  handleLogin(e) {
    e.preventDefault();
   
    this.setState({ redirectVar: `/login` });
  }
  handleRegister(e) {
    e.preventDefault();
   
    this.setState({ redirectVar: `/register` });
  }


  handleLogout(e) {
    e.preventDefault();
    localStorage.clear();
  
    if (window.location.pathname === '/propertySearch') {
      window.location.reload();
      } else {
      this.setState({ redirectVar: `/propertySearch` });
      }

  }
  handleManageProperty(e) {
    e.preventDefault();
    this.setState({ redirectVar: `/manage/property` });
    // localStorage.clear();
    //this.setState({ redirectVar: `/propertySearch` });
  }
  handleAdminProperty(e) {
    e.preventDefault();
    this.setState({ redirectVar: `/admin/approve` });
    // localStorage.clear();
    //this.setState({ redirectVar: `/propertySearch` });
  }

  render() {
   
    if (this.state.redirectVar) {
      return <Redirect to={this.state.redirectVar} />;
    }
    let loginb = null;
    let role = null;
    if (localStorage.getItem("role")) {
      role = (
        <p style={{ color: "white", fontWeight: "bold" }} className="m-2"> Hello {localStorage.getItem("role")}</p>
      );
    }
    if (localStorage.getItem("token")) {
      loginb = (
        <form className="form-inline my-2 my-lg-0">
          <button
            onClick={(e) => this.handleLogout(e)}
            className="btn btn-warning my-2 my-sm-0"
          >
            Sign out
          </button>
        </form>
      );
    } else {
      if(window.location.pathname==="/login"){
        loginb = (
          <form className="form-inline my-2 my-lg-0">
            <button
              onClick={(e) => this.handleRegister(e)}
              className="btn btn-warning my-2 my-sm-0"
            >
              Sign Up
            </button>
          </form>
        );
      } else {
        loginb = (
          <form className="form-inline my-2 my-lg-0">
            <button
              onClick={(e) => this.handleLogin(e)}
              className="btn btn-warning my-2 my-sm-0"
            >
              Sign In
            </button>
          </form>
        );
      }

   
    }
    let sellerManage = null;
    if (
     
      localStorage.getItem("role") === "BestSeller" 
     
    ) {
      sellerManage = (
        <form
          className="form-inline my-2 my-lg-0"
          style={{ marginRight: "20px" }}
        >
          <button
            onClick={(e) => this.handleManageProperty(e)}
            className="btn btn-warning my-2 my-sm-0"
          >
            Manage Property
          </button>
        </form>
      );
    }
    let adminapproval = null;
    if (localStorage.getItem("role") === "Admin") {
      adminapproval = (
        <form
          className="form-inline my-2 my-lg-0"
          style={{ marginRight: "20px" }}
        >
          <button
            onClick={(e) => this.handleAdminProperty(e)}
            className="btn btn-warning my-2 my-sm-0"
          >
            View User
          </button>
        </form>
      );
    }
   // let navBar = null;
   let navBar = (
      <div class="fill-page">
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark custom">
          <a
            className="navbar-brand"
            style={{ color: "white" }}
            href="/propertySearch"
          >
            Q-Homes{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
          <div class="mx-auto"></div>
            <ul className="navbar-nav">
             
            </ul>
            {role}
            {sellerManage}
            {adminapproval}
            {loginb}
          </div>
        </nav>
      </div>
    );
    return <div>{navBar}</div>;
  }
}
export default Navbar;
