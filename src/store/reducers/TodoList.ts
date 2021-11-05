
export interface TodoItemInt {
    id: number,
    text: string,
    done: boolean,
    date: string,
}
type TodoItems = Array<TodoItemInt>;

const initialStateTodo: TodoItems = []

function TodoList(store = initialStateTodo, actions: any): TodoItems {
    switch (actions.type) {
        case "ADD_TODO":
            if (store.some(element => element.text === actions.payload.text)) {
                return store
            }
            return [...store, actions.payload]
        case "REMOVE_TODO":
            return store.filter(element => element.id !== actions.payload)
        case "UPDATE_TODO":
            return store.map(element => element.id === actions.payload.id ? { ...element, text: actions.payload.text } : element)
        case "TOOGLE_TODO":
            return store.map(element => element.id === actions.payload ? { ...element, done: !element.done } : element)
        default:
            return store
    }
}

export default TodoList

