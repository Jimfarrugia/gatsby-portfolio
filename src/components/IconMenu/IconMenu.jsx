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
import "./IconMenu.scss";

const IconMenu = ({ config: { userLinks }, iconSize }) => (
  <div className="icon-menu center">
    <a href={userLinks.github} title="Github" target="_blank" rel="noopener noreferrer">
      <Icon path={mdiGithubFace} size={iconSize} />
    </a>
    <a href={userLinks.medium} title="Medium" target="_blank" rel="noopener noreferrer">
      <Icon path={mdiMedium} size={iconSize} />
    </a>
    <a href={userLinks.linkedin} title="LinkedIn" target="_blank" rel="noopener noreferrer">
      <Icon path={mdiLinkedin} size={iconSize} />
    </a>
    <a href={userLinks.twitter} title="Twitter" target="_blank" rel="noopener noreferrer">
      <Icon path={mdiTwitter} size={iconSize} />
    </a>
    <a href={userLinks.skype} title="Skype" target="_blank" rel="noopener noreferrer">
      <Icon path={mdiSkype} size={iconSize} />
    </a>
    <a href={userLinks.telegram} title="Telegram" target="_blank" rel="noopener noreferrer">
      <Icon path={mdiTelegram} size={iconSize} />
    </a>
    <a href={userLinks.email} title="Email" target="_blank" rel="noopener noreferrer">
      <Icon path={mdiEmail} size={iconSize} />
    </a>
  </div>
);

export default IconMenu;
