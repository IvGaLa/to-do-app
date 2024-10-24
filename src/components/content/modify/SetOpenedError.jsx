import { getLocale } from "@locales/es";

function SetFinishedError({ backToList }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-red-600 mb-4">
        {getLocale("components.content.modify.openedError")}
      </h2>
      <button
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        onClick={backToList}
      >
        {getLocale("components.content.modify.backToList")}
      </button>
    </div>
  );
}

export default SetFinishedError;
