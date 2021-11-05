import React from "react";
import {TodoItemInt} from "../../store/reducers/TodoList";

interface TodoItemProps extends TodoItemInt{
    onDelete:Function,
    onChanged:Function,
    onDone:Function,
    onUpdate:Function,
}
function TodoItem({text,done,date,onDone,onDelete,onUpdate}:TodoItemProps){
    
    return(
        <div className="todo-item">
        <div className="todo-item__content">
            <label htmlFor="check" className="todo-item__text">{text}</label>
            <input defaultChecked={done} onChange={()=> onDone() } id="check" className="todo-item__btn" type="checkbox" />
        </div>
        <div className="todo-item__footer">
            <p className="todo-item__date">{date}</p>
            <div className="todo-item__menu">
                <button onClick={() => onDelete()} className="btn btn-red">Удалить</button>
                <button onClick={() => onUpdate()} className="btn btn-green">Изменить</button>
            </div>
        </div>
    </div>
    )
}

export default TodoItem