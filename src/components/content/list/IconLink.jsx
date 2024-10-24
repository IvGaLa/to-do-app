import { Link } from "react-router-dom";

function IconLink({ children, to, finishedAt }) {
  const cname =
    finishedAt !== null
      ? "bg-green-100 hover:bg-green-400"
      : "bg-red-100 hover:bg-red-400";

  return (
    <Link
      to={to}
      className={`${cname} p-4 rounded-full text-gray-950 flex gap-1.5 items-center text-sm justify-center`}
    >
      {children}
    </Link>
  );
}

export default IconLink;
