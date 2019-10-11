import React, { Component } from "react";
import { Link } from "gatsby";
import M from "materialize-css";

export class PortfolioMenu extends Component {
  componentDidMount() {
    // Automatically initialize materialize components
    M.AutoInit();
  }

  render() {
    const { postLinks } = this.props;

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
              {postLinks && postLinks.map(post => (
                <li key={post.slug}>
                  <Link to={post.slug} className="sidenav-close">
                    <i className="material-icons">keyboard_arrow_right</i>
                    {post.title}
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
