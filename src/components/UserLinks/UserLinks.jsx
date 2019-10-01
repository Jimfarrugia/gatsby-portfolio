import React from "react";
import Icon from "@mdi/react";
import { 
  mdiGithubFace,
  mdiLinkedin,
  mdiMedium,
  mdiTwitter,
  mdiSkype,
  mdiEmail,
  mdiTelegram
} from "@mdi/js";
import "./UserLinks.css";

const UserLinks = ({ config: { userLinks } }) => (
  <div className="social-icons center">
    <a href={userLinks.github} title="Github">
      <Icon path={mdiGithubFace} size={2} />
    </a>
    <a href={userLinks.medium} style={{marginBottom: -2}} title="Medium">
      <Icon path={mdiMedium} size={2} />
    </a>
    <a href={userLinks.linkedin} title="LinkedIn">
      <Icon path={mdiLinkedin} size={2} />
    </a>
    <a href={userLinks.twitter} title="Twitter">
      <Icon path={mdiTwitter} size={2} />
    </a>
    <a href={userLinks.skype} title="Skype">
      <Icon path={mdiSkype} size={2} />
    </a>
    <a href={userLinks.telegram} title="Telegram">
      <Icon path={mdiTelegram} size={2} />
    </a>
    <a href={userLinks.email} title="Email">
      <Icon path={mdiEmail} size={2} />
    </a>
  </div>
);

export default UserLinks;
