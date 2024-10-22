import { Link } from "react-router-dom";

function IconLink({ children, to }) {
  return (
    <Link
      to={to}
      className="p-4 rounded-full text-gray-950 bg-gray-50 hover:bg-gray-200/75 flex gap-1.5 items-center text-sm justify-center"
    >
      {children}
    </Link>
  );
}

export default IconLink;
