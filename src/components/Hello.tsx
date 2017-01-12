import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//import { ADD_TODO, addTodo } from "../../actions/todos";
import { addTodo, ADD_TODO, removeTodo, REMOVE_TODO } from "../../actions/todos";
import * as TodoActionCreators from "../../actions/todos";
import { IAction } from "../../actions/Action";
import { Reducer } from "redux-actions";

interface HelloProps {
    foo: number;
    message: string;
    todoList: string[]
    addTodo: (message: string) => IAction<ADD_TODO>;
    removeTodo: () => IAction<REMOVE_TODO>;
};

interface HelloState {
}

function mapStateToProps(state: any) {
    return {
        foo: state.todo.foo,
        message: state.todo.message,
        todoList: state.todo.todoList
    };
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({ addTodo, removeTodo }, dispatch)
}

class Hello extends React.Component<HelloProps, HelloState> {

    constructor(props: any) {
        super(props);

    }

    public componentWillMount() {
        this.props.removeTodo();
    }

    public render() {

        const {
            foo,
            message,
            addTodo,
            removeTodo,
            todoList
        } = this.props;

        return (
            <div>
                <div>foo: {this.props.foo} message: {this.props.message}</div>
                <button onClick={addTodo.bind(this, "teste")} />
                
                {
                    (this.props.todoList != undefined && this.props.todoList.length > 0)
                    ?
                    this.props.todoList.map((value, key) => {
                        return <span key={key}>{value}</span>
                    })
                    :
                    <span></span>
                }
            </div>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);