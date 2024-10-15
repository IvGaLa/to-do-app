import { LuArrowDown } from "react-icons/lu";
import { LuArrowUp } from "react-icons/lu";

function Th({ sortBy, handlerSorting, sortOrder, children }) {
  return (
    <th
      onClick={() => handlerSorting(sortBy)}
      className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 hover:cursor-pointer"
    >
      {children}
      {sortOrder[sortBy] === 1 ? (
        <LuArrowUp className="inline mx-1" />
      ) : (
        <LuArrowDown className="inline mx-1" />
      )}
    </th>
  );
}

export default Th;
