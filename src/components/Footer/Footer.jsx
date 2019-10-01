import React, { Component } from "react";
import { Link } from "gatsby";
import Icon from "@mdi/react";
import { mdiGithubFace, mdiLinkedin, mdiMedium, mdiTwitter, mdiSkype, mdiEmail, mdiTelegram } from "@mdi/js";

import UserLinks from "../UserLinks/UserLinks";

import "./Footer.scss";

class Footer extends Component {
  render() {
    const { config } = this.props;
    const rssUrl = config.siteRss;
    const { copyright } = config;

    return (
      <footer id="page-footer">
        <div className="container">
          <div className="row center">
            <div className="col s4">
              <a href="#page-header">Back to Top</a>
            </div>
            <div className="col s4">
              <a href="about.html">About</a>
            </div>
            <div className="col s4">
              <a href="history.html">History</a>
            </div>
          </div>
          <div className="row center">
            <div className="social-icons">
              <a href="https://github.com/Jimfarrugia" title="Github">
                <Icon path={mdiGithubFace} size={2} />
              </a>
              <a href="https://medium.com/@jim_farrugia" style={{marginBottom: -2}} title="Medium">
                <Icon path={mdiMedium} size={2} />
              </a>
              <a href="https://linkedin.com/in/jim-farrugia-46449740" title="LinkedIn">
                <Icon path={mdiLinkedin} size={2} />
              </a>
              <a href="https://twitter.com/jim_farrugia" title="Twitter">
                <Icon path={mdiTwitter} size={2} />
              </a>
              <a href="skype:live:the.jim.farrugia?call" title="Skype">
                <Icon path={mdiSkype} size={2} />
              </a>
              <a href="mailto:the.jim.farrugia@gmail.com" title="Email">
                <Icon path={mdiEmail} size={2} />
              </a>
              <a href="https://t.me/jimfarrugia" title="Telegram">
                <Icon path={mdiTelegram} size={2} />
              </a>
            </div>
          </div>
          <div className="row center">
            <div className="col s4">
              <a href="https://github.com/Jimfarrugia">Github</a>
            </div>
            <div className="col s4">
              <a href="https://linkedin.com/in/jim-farrugia-46449740">
                LinkedIn
              </a>
            </div>
            <div className="col s4">
              <a href="https://twitter.com/jim_farrugia">Twitter</a>
            </div>
          </div>
          <div className="row center">
            <div className="col s4">
              <a href="https://medium.com/@jim_farrugia">Medium</a>
            </div>
            <div className="col s4">
              <a href="htmailto:contact@jimfarrugia.com">Email</a>
            </div>
            <div className="col s4">
              <a href="skype:live:the.jim.farrugia?call">Skype</a>
            </div>
          </div>

          <div className="footer-copyright">
            <div className="container">
              <p className="center">{copyright}</p>
            </div>
          </div>
        </div>
        <Link to={rssUrl}>
          <button type="button">Subscribe</button>
        </Link>
        <UserLinks config={config} labeled />
      </footer>
    );
  }
}

export default Footer;
