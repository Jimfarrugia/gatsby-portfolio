<div align="center">
  <img src="static/logos/logo-1024.png" alt="Logo" width='200px' height='200px'/>
  <h1>Jim Farrugia's Portfolio 2.0</h1>
  <p>
    <a href="https://codeclimate.com/github/Jimfarrugia/gatsby-portfolio">
      <img src="https://codeclimate.com/github/Jimfarrugia/gatsby-portfolio/badges/gpa.svg" alt="Code Climate" />
    </a>
    <a href="https://codeclimate.com/github/Jimfarrugia/gatsby-portfolio">
      <img src="https://codeclimate.com/github/Jimfarrugia/gatsby-portfolio/badges/issue_count.svg" alt="Issue Count" />
    </a>
    <a href="https://www.codacy.com/manual/Jimfarrugia/gatsby-portfolio?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Jimfarrugia/gatsby-portfolio&amp;utm_campaign=Badge_Grade">
      <img src="https://api.codacy.com/project/badge/Grade/d569e3b342fa42f4b6569ac2751d210b" alt="Codacy Badge" />
    </a>
  </p>
</div>

The new version of my development portfolio. Built with Gatsby and hosted with Netlify.

#### Why Though

The main reason for the upgrade is that I'd like to have an easier method for updating the website's content.  In my current portfolio, everything is hard-coded.  So whenever I'd like to add a new project, I have to write a bunch of HTML, adjust some class names, tweak the scrolling animation, etc.

The new site will use the Gatsby plugin, `gatsby-source-filesystem` to gather posts/projects data from local files written in markdown.

#### Todo
- [x] Fix aspect ratio of thumbnails in 'nicotine calculator' project page.
- [x] Give yellow border to project image gallery thumbnails on :hover
- [x] Smooth-scroll when navigating to page elements.
- [ ] Setup project demos + add links to markdown files.
- [ ] Pages:
  - [ ] About page
  - [ ] Resume page
    - [ ] Include Github activity embed
- [ ] Write more detailed content for project pages.
- [ ] Blog page *(tentative)*
- [ ] Setup GA
- [ ] Setup LogRocket
