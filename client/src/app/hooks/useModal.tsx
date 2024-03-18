import { useState } from "react";

export default function useModal() {
  const [modalState, setModalState] = useState(false)

  function showModal() {
    setModalState(true)
  }
  function hideModal() {
    setModalState(false)
  }
  
  return {
    modalState,
    showModal,
    hideModal
  }

}
