import {IAction} from "./Action";

export const ADD_TODO = "ADD_TODO";
export type ADD_TODO = { foo: number, message: string };

export const REMOVE_TODO = "REMOVE_TODO";
export type REMOVE_TODO = { foo: number };

export function addTodo(message: string): IAction<ADD_TODO> {
    return {
        type: ADD_TODO,
        payload: {
            foo: 123,
            message: message
        }
    }
}

export function removeTodo(): IAction<REMOVE_TODO> {
    return {
        type: REMOVE_TODO,
        payload: {
            foo: 12
        }
    }
}