import { Link } from "gatsby";
import React, { Component } from "react";

import M from "materialize-css";

import "./Sidenav.scss";

export class Sidenav extends Component {
  componentDidMount() {
    //* Automatically initialize materialize components
    M.AutoInit();

    const options = {
      inDuration: 250,
      outDuration: 200,
      draggable: true
    };
    //* Init Sidenav with options
    M.Sidenav.init(this.Sidenav, options);

    //* Get and control an instance
    // let instance = M.Sidenav.getInstance(this.Sidenav);
    // instance.open();
    // console.log(instance.isOpen);
  }

  render() {
    return (
      <>
        {/* Sidebar Nav Trigger Button */}
        <div id="sidenav-trigger" className="container">
          <a
            href="!#"
            data-target="slide-out"
            className="sidenav-trigger show-on-large"
          >
            <i className="material-icons">menu</i>
          </a>
        </div>

        <nav id="top-nav" className="transparent z-depth-0" />

        {/* Sidebar Nav */}
        <ul
          id="slide-out"
          className="sidenav"
          ref={Sidenav => {
            // eslint-disable-line
            this.Sidenav = Sidenav;
          }}
        >
          <nav>
            <li>
              {/* 'User-View' (Bio) Section */}
              <div className="user-view center">
                <a href="!#">
                  <img
                    className="circle"
                    src="/images/jflogo-white.svg"
                    alt="Jim's Avatar"
                    style={{ backgroundColor: "rgba(25,25,25,0.5)" }}
                  />
                </a>
                <a href="!#">
                  <span className="white-text name">Jim Farrugia</span>
                </a>
                <a href="!#">
                  <span className="white-text email">
                    the.jim.farrugia@gmail.com
                  </span>
                </a>
              </div>
            </li>
            <li>
              <Link to="/">
                <i className="material-icons">home</i>
                Home
              </Link>
            </li>
            {/* Dropdown (collapsible) List */}
            <li>
              <ul className="collapsible">
                <li>
                  <a href="#" className="collapsible-header">
                    {/* eslint-disable-line */}
                    <i className="material-icons">collections</i>
                    Portfolio
                    <i className="material-icons right">arrow_drop_down</i>
                  </a>
                  <div className="collapsible-body">
                    <ul>
                      <li>
                        <a href="#hangman-row">
                          <i className="material-icons">keyboard_arrow_right</i>
                          Ruby Hangman
                        </a>
                      </li>
                      <li>
                        <a href="#outside-row">
                          <i className="material-icons">keyboard_arrow_right</i>
                          Outside
                        </a>
                      </li>
                      <li>
                        <a href="#jscalc-row">
                          <i className="material-icons">keyboard_arrow_right</i>
                          Javascript Calculator
                        </a>
                      </li>
                      <li>
                        <a href="#niccalc-row">
                          <i className="material-icons">keyboard_arrow_right</i>
                          Nicotine Calculator
                        </a>
                      </li>
                      <li>
                        <a href="#eliquiddata-row">
                          <i className="material-icons">keyboard_arrow_right</i>
                          Eliquid Data
                        </a>
                      </li>
                      <li>
                        <a href="#ontap-row">
                          <i className="material-icons">keyboard_arrow_right</i>
                          On Tap
                        </a>
                      </li>
                      <li>
                        <a href="#rps-row">
                          <i className="material-icons">keyboard_arrow_right</i>
                          Rock, Paper, Scizzors!
                        </a>
                      </li>
                      <li>
                        <a href="#crystaljade-row">
                          <i className="material-icons">keyboard_arrow_right</i>
                          Crystal Jade
                        </a>
                      </li>
                      <li>
                        <a href="#atc-row">
                          <i className="material-icons">keyboard_arrow_right</i>
                          Australian Time Converter
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/">
                <i className="material-icons">library_books</i>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="material-icons">face</i>
                About
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="material-icons">list_alt</i>
                Resume
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="material-icons">mail</i>
                Contact
              </Link>
            </li>
          </nav>
        </ul>
      </>
    );
  }
}

export default Sidenav;
