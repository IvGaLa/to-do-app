import { useParams } from "react-router-dom";
import { getLocale } from "../../../locale/es";
import TitlePage from "../../TitlePage";

function Delete() {
  const { id } = useParams();

  return (
    <div>
      <TitlePage>{getLocale("components.content.delete.title")}</TitlePage>
      <p>El id es: {id}</p>
    </div>
  );
}

export default Delete;
