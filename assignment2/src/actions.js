export const TOGGLE_TODO = "TOGGLE_TODO";
export const ADD_TODO_CHANGED = "ADD_TODO_CHANGED";
export const SAVE_NEW_TODO = "SAVE_NEW_TODO"

export function toggleTodo(id){
    return{
        type: TOGGLE_TODO,
        id
    }
}

export function addTodoChanged(value) {
    return {
        type: ADD_TODO_CHANGED,
        value: value
    }
}

export function saveNewTodo() {
    return {
        type: SAVE_NEW_TODO
    }
}
