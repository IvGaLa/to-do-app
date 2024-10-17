import { Link } from "react-router-dom";

function IconLink({ children, to }) {
  return (
    <Link to={to} className="px-3">
      {children}
    </Link>
  );
}

export default IconLink;
