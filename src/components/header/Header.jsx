import { getLocale } from "../../locale/es";
import LinkHeader from "./LinkHeader";

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/images/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          <h1 className="text-xl font-bold">{getLocale("title")}</h1>
        </div>
        <div className="flex justify-center">
          <ul className="sm:flex hidden items-center gap-4">
            <li>
              <LinkHeader to="/">
                {getLocale("components.header.links.home")}
              </LinkHeader>
            </li>
            <li>
              <LinkHeader to="/add">
                {getLocale("components.header.links.add")}
              </LinkHeader>
            </li>
            <li>
              <LinkHeader to="/list">
                {getLocale("components.header.links.list")}
              </LinkHeader>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
