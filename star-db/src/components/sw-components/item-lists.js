import React from "react";
import ItemList from "../item-list";
import { withData, withSwapiService } from "../hoc-helpers";

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    );
  };
};

const ListWithChildren = withChildFunction(
  ItemList,
  ({ name }) => <span>{name}</span>
);

const renderModelAndName = withChildFunction(
  ItemList,
  ({ name, model }) => <span>{name}, ({model})</span>
);

const mapPersonMethodsToProps = (swapiService) => ({
  getData: swapiService.getAllPeople
});

const mapPlanetMethodsToProps = (swapiService) => ({
  getData: swapiService.getAllPlanets
});

const mapStarshipMethodsToProps = (swapiService) => ({
  getData: swapiService.getAllStarships
});

const PersonList = withSwapiService(
  withData(ListWithChildren), mapPersonMethodsToProps
);
const PlanetList = withSwapiService(
  withData(ListWithChildren), mapPlanetMethodsToProps
);
const StarshipList = withSwapiService(
  withData(renderModelAndName), mapStarshipMethodsToProps
);

export {
  PersonList,
  PlanetList,
  StarshipList
};