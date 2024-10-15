import { GrLinkDown, GrLinkUp } from "react-icons/gr";

function Th({ sortBy, handlerSorting, sortOrder, children }) {
  return (
    <th
      onClick={() => handlerSorting(sortBy)}
      className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 hover:cursor-pointer"
    >
      {children}
      {sortOrder[sortBy] === 1 ? (
        <GrLinkUp className="inline mx-1" />
      ) : (
        <GrLinkDown className="inline mx-1" />
      )}
    </th>
  );
}

export default Th;
