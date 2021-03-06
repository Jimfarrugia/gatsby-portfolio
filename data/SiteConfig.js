const config = {
  siteTitle: "Jim Farrugia - Web Developer", // Site title.
  siteTitleShort: "Jim Farrugia", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Jim Farrugia - Full Stack Web Developer Portfolio", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://jimfarrugia.com.au", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "A showcase of my work as a full stack web developer.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // ! Path to the RSS file.
  siteFBAppID: "1825356251115265", // ! FB Application ID for using app insights
  googleAnalyticsID: "UA-47311644-5", // ! GA tracking ID.
  disqusShortname: "jimfarrugia", // ? Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "DD-MM-YYYY", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Jim Farrugia", // Username to display in the author segment.
  userEmail: "the.jim.farrugia@gmail.com", // Email used for RSS feed's author segment
  userLocation: "Sydney, Australia", // User location to display in the author segment.
  userAvatar: "/images/jflogo-white.svg", // User avatar to display in the author segment.
  userDescription:
    "The internet is my backyard... and I've got treehouses to build.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: {
    github: "https://github.com/Jimfarrugia",
    medium: "https://medium.com/@jim_farrugia",
    linkedin: "https://linkedin.com/in/jim-farrugia-46449740",
    twitter: "https://twitter.com/jim_farrugia",
    skype: "skype:live:the.jim.farrugia?call",
    telegram: "https://t.me/jimfarrugia",
    email: "mailto:the.jim.farrugia@gmail.com"
  },
  copyright: "©2019 Jim Farrugia", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#fff21a", // ? Used for setting manifest and progress theme colors.
  backgroundColor: "#003f8f" // ? Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
