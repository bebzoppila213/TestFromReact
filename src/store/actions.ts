import { TodoItemInt } from "./reducers/TodoList"
type RemoveTodoType = {
    type: 'REMOVE_TODO',
    payload: number
}
type AddTodoType = {
    type: 'ADD_TODO',
    payload: TodoItemInt
}
type ToggleTodoType = {
    type: 'TOOGLE_TODO',
    payload: number,
}
type UpdateTodoType = {
    type: "UPDATE_TODO",
    payload: { id: number, text: string },
}
const ADD_TODO = (payload: TodoItemInt): AddTodoType => ({ type: 'ADD_TODO', payload })
const REMOVE_TODO = (id: number): RemoveTodoType => ({ type: 'REMOVE_TODO', payload: id })
const TOOGLE_TODO = (id: number): ToggleTodoType => ({ type: 'TOOGLE_TODO', payload: id })
const UPDATE_TODO = (id: number, text: string): UpdateTodoType => ({ type: "UPDATE_TODO", payload: { id: id, text: text } })

type OpenModalType = {
    type: 'OPEN_MODAL',
    payload: number | undefined
}

const OPEN_MODAL = (id?: number):OpenModalType => ({ type: 'OPEN_MODAL', payload: id })
const CLOSE_MODAL = () => ({ type: 'CLOSE_MODAL' })
const UPDATE_WARNING = (payload:string) =>({ type: 'UPDATE_WARNING',payload })

export { REMOVE_TODO, ADD_TODO, TOOGLE_TODO, OPEN_MODAL, CLOSE_MODAL, UPDATE_TODO,UPDATE_WARNING }