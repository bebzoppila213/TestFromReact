interface ModalStore {
    isOpen: boolean,
    activeId?: number | null,
}

const initialStateModal: ModalStore = { isOpen: false, activeId: null,};

function Modal(store = initialStateModal, actions: any): ModalStore {
    switch (actions.type) {
        case "OPEN_MODAL":
            return {...store, isOpen: true, activeId: actions.payload}
        case "CLOSE_MODAL":
                return {...store, isOpen: false}
        default:
            return store
    }
}
export default Modal