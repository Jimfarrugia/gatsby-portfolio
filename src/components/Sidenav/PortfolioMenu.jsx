import React, { Component } from "react";
import M from "materialize-css";

export class PortfolioMenu extends Component {
  componentDidMount() {
    // Automatically initialize materialize components
    M.AutoInit();
  }

  render() {
    return (
      <ul className="collapsible">
        <li>
          <button type="button" className="collapsible-header">
            <i className="material-icons">collections</i>
            Portfolio
            <i className="material-icons right">arrow_drop_down</i>
          </button>
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
    );
  }
}

export default PortfolioMenu;
