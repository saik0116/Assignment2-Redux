import React, {Component} from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Todolist from "./Todolist";
import AddNewTodo from "./AddNewTodo";
import { connect } from "react-redux";
import * as newTodos from ".."

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Todolist></Todolist>
                <AddNewTodo/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {

  }
};


export default (Main);
