import React from "react";
import ItemDetails, { Record } from "../item-details";
import { SwapiServiceConsumer } from "../swapi-service-context";

const PlanetDetails = ({ itemId }) => {

  return (
    <SwapiServiceConsumer>
      {
        ({ getPlanet, getPlanetImage }) => {
          return (
            <ItemDetails
              itemId={itemId}
              getData={getPlanet}
              getImageUrl={getPlanetImage}>
              <Record field="name" label="Name"/>
              <Record field="diameter" label="Diameter"/>
              <Record field="population" label="Population"/>
            </ItemDetails>
          );
        }
      }
    </SwapiServiceConsumer>
  );
};

export default PlanetDetails;