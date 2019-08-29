import React from "react";

function Rainbow(WrappedComponent) {
  const colors = ["red", "orange", "yellow", "green", "indigo", "violet"];
  const randomColors = colors[Math.floor(Math.random() * 6)];
  const className = randomColors + "-text";
  return props => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default Rainbow;
