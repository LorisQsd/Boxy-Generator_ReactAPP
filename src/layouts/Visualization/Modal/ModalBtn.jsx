import { useState } from "react";
import { createPortal } from "react-dom";
import ModalResult from "./ModalResult";

export default function ModalBtn() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(!showModal)}
        className="relative z-0 px-3 py-1 mx-auto my-2 text-sm text-white bg-blue-600 rounded cursor-pointer hover:bg-blue-700"
      >
        Get the code !
      </button>
      {showModal &&
        createPortal(
          <ModalResult closeModal={() => setShowModal(!showModal)} />,
          document.body
        )}
    </>
  );
}
