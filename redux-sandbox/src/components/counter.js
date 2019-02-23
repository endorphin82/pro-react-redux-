import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actions from "../actions";

import "./counter.css";

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="jumbotron counter">
      <h2 id="counter">{counter}</h2>
      <button
        onClick={dec}
        className="btn btn-primary btn-lg">DEC
      </button>
      <button
        onClick={inc}
        className="btn btn-primary btn-lg">INC
      </button>
      <button
        onClick={rnd}
        className="btn btn-primary btn-lg">RND
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  counter: state
});

const mapDispatchToProps = (dispatch) => {
  const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
  return {
    inc,
    dec,
    rnd: () => {
      const randomValue = Math.floor(Math.random() * 10);
      rnd(randomValue);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);