import { getLocale } from "@locales/es";

function CantDelete() {
  return <div>{getLocale("components.content.delete.cantdelete")}</div>;
}

export default CantDelete;
