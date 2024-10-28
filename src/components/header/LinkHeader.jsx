/**
 *
 * Muestra un html anchor para el menú del header
 *
 */

import { Link } from "react-router-dom";

function LinkHeader({ children, to }) {
  return (
    <Link
      to={to}
      className="inline-block px-4 hover:text-textsecondary duration-200"
    >
      {children}
    </Link>
  );
}

export default LinkHeader;
