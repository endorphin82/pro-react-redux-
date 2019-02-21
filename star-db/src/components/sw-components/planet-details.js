import React from "react";
import ItemDetails, { Record } from "../item-details";
import { withSwapiService } from "../hoc-helpers";

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="name" label="Name"/>
      <Record field="diameter" label="Diameter"/>
      <Record field="population" label="Population"/>
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => ({
  getData: swapiService.getPlanet,
  getImageUrl: swapiService.getPlanetImage
});
export default withSwapiService(mapMethodsToProps)(PlanetDetails);