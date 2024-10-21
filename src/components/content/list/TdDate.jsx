import { getLocale } from "@locales/es";
import { formatDataTime } from "@lib/datetime";

function TdDate({ date }) {
  return (
    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
      {formatDataTime(date, getLocale("formatdatetimetoview"))}
    </td>
  );
}

export default TdDate;
