import * as React from "react";
import {connect} from "react-redux";

import * as Hello from "../components/Hello";


const mapStateToProps = (state: any) => {
    return {
        todos: state
    }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onTodoClick: (id: number) => {
      dispatch({type: "", payload: {test: "test"}});
    }
  }
}

const VisibleHello = connect(
    mapStateToProps,
    mapDispatchToProps
)(this.Hello);

export default VisibleHello;
