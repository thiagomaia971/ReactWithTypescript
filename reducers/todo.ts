import { IAction } from "../actions/Action";
import { ADD_TODO, REMOVE_TODO } from "../actions/todos";
import { handleActions } from "redux-actions";

const todo = handleActions({
    [ADD_TODO]: function (state: any, action: IAction<ADD_TODO>) {

        const foo = action.payload.foo;

        return (<any>Object).assign({}, state, {
            foo,
            message: action.payload.message
        })

    },
    [REMOVE_TODO]: function(state: any, action: IAction<REMOVE_TODO>) {

        return (<any>Object).assign({}, state, {
            todoList: ["1", "2"]
        });
    }
}, {});

export default todo;
