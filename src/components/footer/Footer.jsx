/**
 *
 * Componente para mostrar el footer de la página.
 *
 */

import { getLocale } from "@locales/es";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <div className="container mx-auto">
        <p>
          {getLocale("components.footer.copyright")} {getLocale("title")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
