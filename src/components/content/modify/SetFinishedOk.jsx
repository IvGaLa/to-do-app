import { getLocale } from "@locales/es";

function SetFinishedOk({ backToList }) {
  return (
    <>
      <h2 className="text-xl font-semibold text-green-600 mb-4">
        {getLocale("components.content.modify.finished")}
      </h2>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={backToList}
      >
        {getLocale("components.content.modify.backToList")}
      </button>
    </>
  );
}

export default SetFinishedOk;
