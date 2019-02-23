import React, { Component, Fragment } from "react";

import "./item-details.css";

import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import ErrorButton from "../error-button";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export {
  Record
};

export default class ItemDetails extends Component {
  state = {
    item: null,
    error: false,
    loading: false,
    image: null
  };

  swapiService = new SwapiService();

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    // !!!
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
      this.setState({
        loading: true
      });
    }
  }

  onItemLoaded = () => {
    this.setState({
      loading: false
    });
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    });
  };

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          image: getImageUrl(item)
        });
      })
      .then(this.onItemLoaded)
      .catch(this.onError);
  }

  render() {
    const {item, image, loading, error } = this.state;

    if (!item) {
      return <span>Select a item from a list</span>;
    }

    const hasData = true;
    //!(loading || error);
    const errorMessage = error ? <ErrorIndicator/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = hasData ?
      <ItemView
        item={item}
        image={image}/> : null;

    return (
      <div className="item-details card">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

const ItemView = (item, image) => {
  console.log(item);
  return (
    <Fragment>
      <img className="item-image"
           src={image}
           alt="item"
      />

      <div className="card-body">
        <h4>{item.name}</h4>
        <ul className="list-group list-group-flush">
          {
            React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, { item });
            })
          }
        </ul>
        <ErrorButton/>
      </div>
    </Fragment>
  );
};