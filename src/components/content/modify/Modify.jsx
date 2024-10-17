import { getLocale } from "../../../locale/es";
import TitlePage from "../../TitlePage";

function Modify() {
  return (
    <div>
      <TitlePage>{getLocale("components.content.modify.title")}</TitlePage>
    </div>
  );
}

export default Modify;
