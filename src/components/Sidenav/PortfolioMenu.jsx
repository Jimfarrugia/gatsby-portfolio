import React, { Component } from "react";
import { Link } from "gatsby";
import M from "materialize-css";

export class PortfolioMenu extends Component {
  componentDidMount() {
    // Automatically initialize materialize components
    M.AutoInit();
  }

  render() {
    const { links } = this.props;

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
              {links && links.map(link => (
                <li key={link.slug}>
                  <Link to={link.slug} className="sidenav-close">
                    <i className="material-icons">keyboard_arrow_right</i>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    );
  }
}

export default PortfolioMenu;
