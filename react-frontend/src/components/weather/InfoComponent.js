import React from "react";
import FormatTime from "../../utils/FormatTime";
import { PropTypes } from "prop-types";

const InfoComponent = ({ address, day, timezone }) => {
  return (
    <div className="flex justify-between items-start">
      <div className="pt-4 px-0">
        <p className="font-bold">
          {address.city}, {address.state}&nbsp;{address.postal}
        </p>
        <div className="sm:flex-col md:flex md:flex-row font-light">
          <p className="font-bold text-sm -m-px">
            {FormatTime(day.time, timezone, "dddd")}
          </p>
        </div>
        <div className="sm:flex-col md:flex md:flex-row font-light">
          <p className="font-bold text-sm -m-px">{day.summary}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoComponent;

InfoComponent.propTypes = {
  address: PropTypes.objectOf(PropTypes.string),
  day: PropTypes.object,
  timezone: PropTypes.string,
};
