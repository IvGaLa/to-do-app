import { getLocale } from "@locales/es";
import TitlePage from "@components/TitlePage";

function Home() {
  return <TitlePage>{getLocale("components.home.title")}</TitlePage>;
}

export default Home;
