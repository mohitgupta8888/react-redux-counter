import React from "react";
import { connect } from "react-redux";
import { actionTypes } from "../actionTypes";
import Counter from "../components/Counter";

const mapStateToProps = state => ({
  counter: state.counter,
  totalClicks: state.total
});

const mapDispatchToProps = dispatch => ({
  incrementCounter: () =>
    dispatch({
      type: actionTypes.INCREMENT
    }),
  decrementCounter: () =>
    dispatch({
      type: actionTypes.DECREMENT
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
