import { getLocale } from "@locales/es";
import TitlePage from "@components/TitlePage";

function Modify() {
  return (
    <div>
      <TitlePage>{getLocale("components.content.modify.title")}</TitlePage>
    </div>
  );
}

export default Modify;
