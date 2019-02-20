import React from "react";
import ItemList from "../item-list";
import { withData, withSwapiService } from "../hoc-helpers";

const withChildFunction = (fn) => (Wrapped) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    );
  };
};

const ListWithChildren = withChildFunction(({ name }) => <span>{name}</span>)
(ItemList);

const renderModelAndName = withChildFunction(({ name, model }) => <span>{name}, ({model})</span>)
(ItemList);

const mapPersonMethodsToProps = (swapiService) => ({
  getData: swapiService.getAllPeople
});

const mapPlanetMethodsToProps = (swapiService) => ({
  getData: swapiService.getAllPlanets
});

const mapStarshipMethodsToProps = (swapiService) => ({
  getData: swapiService.getAllStarships
});

const PersonList = withSwapiService(mapPersonMethodsToProps)
(withData(ListWithChildren));

const PlanetList = withSwapiService(mapPlanetMethodsToProps)
(withData(ListWithChildren));

const StarshipList = withSwapiService(mapStarshipMethodsToProps)
(withData(renderModelAndName));

export {
  PersonList,
  PlanetList,
  StarshipList
};