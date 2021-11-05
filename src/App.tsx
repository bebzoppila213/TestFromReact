import React from "react";
import TodoList from "./components/TodoList/Index";
import Modal from "./components/Modal";
import { useSelector, useDispatch } from "react-redux"
import { CLOSE_MODAL, ADD_TODO, UPDATE_TODO } from "./store/actions"
import { TodoItemInt } from "./store/reducers/TodoList"

type ActivTodoItem = TodoItemInt | undefined

function App() {
  const store: any = useSelector(state => state)
  const dispatch = useDispatch()

  const activItem: ActivTodoItem = store.todoList.find((ele: TodoItemInt) => ele.id === store.modal.activeId)
  const modalIsOpen: boolean = store.modal.isOpen

  const CloseModal = () => {
    dispatch(CLOSE_MODAL())
  }

  const CreateTodoItem = (text: string) => {
    const newItemId = Date.now() * Math.random()
    const newItemDdate = new Date().toLocaleString('ru')

    dispatch(ADD_TODO({ id: newItemId, date: newItemDdate, text: text, done: false }))
    CloseModal()
  }

  const UpdateTodoItem = (text: string, TodoItem: ActivTodoItem) => {
    dispatch(UPDATE_TODO(Number(TodoItem?.id), text))
    CloseModal()
  }

  const UpdateOrCreateTodoItem = (text: string) => {
    activItem ? UpdateTodoItem(text, activItem) : CreateTodoItem(text)
  }

  return (
    <>
      <TodoList />
      <Modal updateText={UpdateOrCreateTodoItem} closeModal={CloseModal} isOpen={modalIsOpen} deaultText={activItem?.text || ""} />
    </>
  );
}

export default App;
