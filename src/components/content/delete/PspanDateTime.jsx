import { formatDataTime } from "../../../lib/datetime";
import { getLocale } from "../../../locale/es";
import Pspan from "./Pspan";

function PspanDateTime({ name, value }) {
  return (
    <Pspan
      name={name}
      value={
        formatDataTime(value, getLocale("formatdatetimetoview")) ||
        getLocale("components.content.delete.datetimewithoutvalue")
      }
    />
  );
}

export default PspanDateTime;
