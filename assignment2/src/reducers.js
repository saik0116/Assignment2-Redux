import { TOGGLE_TODO, ADD_TODO_CHANGED, SAVE_NEW_TODO  } from "./actions";


export default function mainApp(state, action){

    let newState = Object.assign({}, state);
    let todoList = newState.todoList.slice();
    let newItem = {};
    const lastId = todoList[todoList.length-1].id;

    switch(action.type){
case TOGGLE_TODO:

 todoList = newState.todoList.map((item) => {
  if(item.id == action.id){
    return Object.assign({}, item, {status: (item.status) ? 0 : 1});
  } else {
    return Object.assign({}, item);
  }
});
newState.todoList = [...todoList];
  break;
    case ADD_TODO_CHANGED:
                newState = Object.assign({}, newState, {"addTodoValue": action.value});
                break;


    case SAVE_NEW_TODO:
        newItem.id = lastId+1;
        newItem.key = lastId+1;
        newItem.text = newState.addTodoValue;
        newItem.status = 0;
        todoList.push(newItem);
        newState = Object.assign({}, newState, {todoList, "addTodoValue": ""});
        break;
                default:
                    return state;

}

    return newState;
}
