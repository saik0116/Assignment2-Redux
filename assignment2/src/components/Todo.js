import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../actions";


class Todo extends Component {
    render() {
        return (
            <li className={this.props.status ? "done" : "open"} id={"todo-" + this.props.id}>
                <button className="todo" onClick={this.props.toggleStatus}>{this.props.status ? "✅" : "❎"}</button>
                {this.props.text}
            </li>
        )
    }
}

function mapStateToProps(state){
  return {

  }
};


function mapDispatchToProps(dispatch, ownProps) {

return{
  toggleStatus: () => dispatch(toggleTodo(ownProps.id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
