import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/images/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          <h1 className="text-xl font-bold">To Do App</h1>
        </div>
        <div className="flex justify-center">
          <ul className="sm:flex hidden items-center gap-4">
            <li>
              <Link
                to="/"
                className="inline-block px-4 hover:text-textsecondary duration-200"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/add"
                className="inline-block px-4 hover:text-textsecondary duration-200"
              >
                Añadir
              </Link>
            </li>
            <li>
              <Link
                to="/list"
                className="inline-block px-4 hover:text-textsecondary duration-200"
              >
                Listar
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
