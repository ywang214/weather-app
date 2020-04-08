import React, { Component } from "react";
import axios from "axios";
import { PropTypes } from "prop-types";
import { isEmpty, isUndefined } from "lodash-es";

const AddressContext = React.createContext(null);

class AddressContextProvider extends Component {
  updateState = (state) => {
    this.setState({ ...state });
  };

  state = {
    address: {
      city: "",
      state: "",
      postal: "",
    },
    latlong: "",
    updateState: this.updateState,
  };

  fetchAddressInfo = async () => {
    await axios
      .get("https://ipapi.co/json")
      .then(async (response) => {
        const { data } = response;
        if (!isEmpty(data) && !isUndefined(data)) {
          this.updateState({
            address: {
              city: data.city,
              state: data.region_code,
              postal: data.postal,
            },
            latlong: `${data.latitude},${data.longitude}`,
          });
        }
      })
      .catch((err) => console.error(err));
  };

  async getAddressInfo() {
    try {
      this.fetchAddressInfo();
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getAddressInfo();
  }

  render() {
    return (
      <AddressContext.Provider value={this.state}>
        {this.props.children}
      </AddressContext.Provider>
    );
  }
}

export { AddressContext, AddressContextProvider };

AddressContext.propTypes = {
  address: PropTypes.objectOf(PropTypes.string),
  latlong: PropTypes.string,
};
