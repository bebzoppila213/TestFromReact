import React, { useState, ChangeEvent,useEffect} from "react";
// import { useSelector, useDispatch, useStore } from "react-redux"
// import { CLOSE_MODAL } from "../store/actions"
// import { TodoItemInt } from "../store/reducers"
type ModalProps = {
    deaultText: string,
    isOpen: boolean,
    closeModal: Function,
    updateText: Function,
    warning: string,
}
function Modal({ deaultText, isOpen = false, closeModal, updateText,warning }: ModalProps) {
    const [text, set_text] = useState(deaultText)

    useEffect(()=>{
        set_text(deaultText)
    },[deaultText])

    const SetNewText = (event: ChangeEvent<HTMLTextAreaElement>) => set_text(event.target.value.trim())

    return (
        <div className={"modal " + (isOpen ? "modal--open" : " ")}>
            <div onClick={() => closeModal()} className="modal-bg"></div>
            <div className="modal__content">
                <h2 className="modal__title">{deaultText ?   'Ваши данные': 'Введите текст'}</h2>
                <textarea onInput={SetNewText} value={text} className="modal__text"></textarea>
                <button onClick={() => updateText(text)} className="modal__btn btn btn-blue">{deaultText ?  'Изменить' : 'Добавить'}</button>
            </div>
            {
                warning ? <div  className="modal__warning">{warning}</div> : ''
            }
            
        </div>
    )
}
export default Modal