import React, { Component, Fragment } from "react";

import Row from "../row";

import { StarshipList, StarshipDetails } from "../sw-components";

export default class StarshipsPage extends Component {

  state = {
    selectedItem: null
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <Fragment>
        <Row
          left={<StarshipList onItemSelected={this.onItemSelected}/>}
          right={<StarshipDetails itemId={selectedItem}/>}
        />
      </Fragment>
    );
  }
}
