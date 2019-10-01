import React from 'react';

const Bio = () => (
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
)

export default Bio;