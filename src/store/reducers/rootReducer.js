import { combineReducers } from "redux"
import TodoList from "./TodoList"
import Modal from "./Modal"
export default combineReducers({
    todoList: TodoList,
    modal: Modal,
})