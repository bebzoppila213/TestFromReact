interface ModalStore {
    isOpen: boolean,
    activeId?: number | null,
    warning: string,
}

const initialStateModal: ModalStore = { isOpen: false, activeId: null, warning:''};

function Modal(store = initialStateModal, actions: any): ModalStore {
    switch (actions.type) {
        case "OPEN_MODAL":
            return {...store, isOpen: true, activeId: actions.payload}
        case "CLOSE_MODAL":
                return {...store, isOpen: false}
        case "UPDATE_WARNING":
            return {...store, warning: actions.payload}
        default:
            return store
    }
}
export default Modal