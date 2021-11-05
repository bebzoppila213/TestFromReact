import React, { FC } from "react";
import "./styles.sass"
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { TodoItemInt } from "../../store/reducers/TodoList";
import { REMOVE_TODO, TOOGLE_TODO, OPEN_MODAL } from "../../store/actions"


function TodoList() {
    const store: any = useSelector((store) => store);
    const dispacher: Function = useDispatch()

    const RemoveTodoItem = (id: number) => dispacher(REMOVE_TODO(id))
    const DoneTodoItem = (id: number) => dispacher(TOOGLE_TODO(id))
    
    const OpenModalAddTodo = () => dispacher(OPEN_MODAL())

    const OpenModalUpdateTodo = (id:number) => {
        dispacher(OPEN_MODAL(id))
    }

    const RenderTodoItems = (): FC => store.todoList.map((el: TodoItemInt) =>
        <TodoItem
            onDelete={() => RemoveTodoItem(el.id) }
            onChanged={() => { }}
            done={el.done}
            text={el.text}
            key={el.id}
            date={el.date}
            id={el.id}
            onDone={() => DoneTodoItem(el.id)}
            onUpdate={()=> OpenModalUpdateTodo(el.id)}
        />)

    return (
        <section className="todo">
            <div className="container">
                <div className="todo__inner">
                    <h2 className="todo__title">Список дел</h2>
                    <div className="todo__menu">
                        <button onClick={() => OpenModalAddTodo()} className="todo__btn btn btn-purple">Добавить</button>
                    </div>
                    <div className="todo__items">
                        {RenderTodoItems()}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TodoList