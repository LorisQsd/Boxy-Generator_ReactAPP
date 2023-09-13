import getBoxShadowValue from "../../../utils/getBoxShadowValue";
import { useSelector } from "react-redux";

export default function ModalResult({ closeModal }) {
  const shadowValues = useSelector((state) => state.shadows);
  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 z-10 flex items-center justify-center bg-gray-600/75"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="m-w-[400px] rounded p-7 bg-gray-50 mb-[10vh]"
      >
        <div className="flex items-end mb-5">
          <p className="mr-5 font-semibold">Here is your code 🎉</p>
          <button className="px-3 py-1 ml-auto mr-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700">
            Copy
          </button>
          <button
            onClick={closeModal}
            className="px-3 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700"
          >
            Close
          </button>
        </div>
        <p className="p-5 bg-gray-100 rounded">
          <span className="font-semibold">box-shadow : </span>
          <span>{getBoxShadowValue(shadowValues)}</span>
        </p>
      </div>
    </div>
  );
}
