import React from "react";
import Loadable from "react-loadable";

// Component to show while loading
const Loading = props => {
  const { error, pastDelay } = props;
  if (error) {
    return (
      <div>
        Error!
        {" "}
        <button type="button" onClick={props.retry}>
          Retry
        </button>
      </div>
    );
  }
  if (pastDelay) {
    return <div>Loading...</div>;
  }
  return null;
};

// Dynamic component
const LoadableComponent = Loadable({
  loader: () => import("./Sidenav"), // eslint-disable-line
  loading: Loading,
  delay: 300 // only show Loading after 0.3 seconds load-time
});

export const LoadableSidenav = () => <LoadableComponent />;

export default LoadableSidenav;
