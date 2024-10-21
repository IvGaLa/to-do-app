import { configData } from "@config/config";
import { getLocale } from "@locales/es";

import LinkHeader from "@components/header/LinkHeader";

function Header() {
  const { routes } = configData;
  const routesMap = [routes.home, routes.add, routes.list];

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/images/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          <h1 className="text-xl font-bold">{getLocale("title")}</h1>
        </div>
        <div className="flex justify-center">
          <ul className="sm:flex hidden items-center gap-4">
            {routesMap.map((route) => (
              <li key={route.name}>
                <LinkHeader to={route.path}>
                  {getLocale(`components.header.links.${route.name}`)}
                </LinkHeader>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
