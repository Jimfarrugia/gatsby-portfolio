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
    <a href={userLinks.github} title="Github">
      <Icon path={mdiGithubFace} size={iconSize} />
    </a>
    <a href={userLinks.medium} style={{marginBottom: -2}} title="Medium">
      <Icon path={mdiMedium} size={iconSize} />
    </a>
    <a href={userLinks.linkedin} title="LinkedIn">
      <Icon path={mdiLinkedin} size={iconSize} />
    </a>
    <a href={userLinks.twitter} title="Twitter">
      <Icon path={mdiTwitter} size={iconSize} />
    </a>
    <a href={userLinks.skype} title="Skype">
      <Icon path={mdiSkype} size={iconSize} />
    </a>
    <a href={userLinks.telegram} title="Telegram">
      <Icon path={mdiTelegram} size={iconSize} />
    </a>
    <a href={userLinks.email} title="Email">
      <Icon path={mdiEmail} size={iconSize} />
    </a>
  </div>
);

export default IconMenu;
