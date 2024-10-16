import { getLocale } from "../../../locale/es";
import TitlePage from "../../TitlePage";

function Home() {
  return <TitlePage>{getLocale("components.home.title")}</TitlePage>;
}

export default Home;
