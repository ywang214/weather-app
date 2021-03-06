import React from "react";
import "./LoaderStyle.scss";
import { PropTypes } from "prop-types";

const LoaderComponent = ({ loaderText }) => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
      {loaderText && (
        <div className="mx-auto text-center text-sm font-light text">
          {loaderText}
          <span className="text-2xl text-fade">...</span>
        </div>
      )}
    </div>
  );
};

export default LoaderComponent;

LoaderComponent.propTypes = {
  loaderText: PropTypes.string
};
