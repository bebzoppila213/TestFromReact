import React from "react";
import TodoList from "./components/TodoList/Index";
import Modal from "./components/Modal";
import { useSelector, useDispatch } from "react-redux"
import { CLOSE_MODAL, ADD_TODO, UPDATE_TODO, UPDATE_WARNING } from "./store/actions"
import { TodoItemInt} from "./store/reducers/TodoList"

type ActivTodoItem = TodoItemInt | undefined

function App() {
  const store: any = useSelector(state => state)
  const dispatch = useDispatch()

  const activItem: ActivTodoItem = store.todoList.find((ele: TodoItemInt) => ele.id === store.modal.activeId)
  const modalIsOpen: boolean = store.modal.isOpen

  const CloseModal = () => {
    dispatch(CLOSE_MODAL())
  }
  const CheckedLength = (text: string) => {
    return text.length > 0
  }

  const CheckedTextFromIncludes = (text: string, arrayValues: any) => {
    return arrayValues.some((element: TodoItemInt) => element.text === text)
  }

  const CreateTodoItem = (text: string,) => {
    if (CheckedTextFromIncludes(text, store.todoList)) {
      dispatch(UPDATE_WARNING('Такой элемент уже существует'))
    } else {
      const newItemId = Date.now() * Math.random()
      const newItemDdate = new Date().toLocaleString('ru')
      dispatch(ADD_TODO({ id: newItemId, date: newItemDdate, text: text, done: false }))
      CloseModal()
      dispatch(UPDATE_WARNING(''))
    }

  }

  const UpdateTodoItem = (text: string, TodoItem: ActivTodoItem) => {
    dispatch(UPDATE_TODO(Number(TodoItem?.id), text))
    CloseModal()
  }



  const UpdateOrCreateTodoItem = (text: string) => {
    if (CheckedLength(text)) {
      activItem ? UpdateTodoItem(text, activItem) : CreateTodoItem(text)
    } else {
      dispatch(UPDATE_WARNING('Слишком маленькая длинна'))
    }
  }

  return (
    <>
      <TodoList />
      <Modal
        warning={store.modal.warning}
        updateText={UpdateOrCreateTodoItem}
        closeModal={CloseModal}
        isOpen={modalIsOpen}
        deaultText={activItem?.text || ""} />
    </>
  );
}

export default App;
