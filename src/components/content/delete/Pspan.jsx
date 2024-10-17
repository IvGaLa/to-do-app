import { getLocale } from "../../../locale/es";

function Pspan({ name, value }) {
  return (
    <p className="mb-2">
      <span className="font-semibold pr-2">
        {getLocale(`models.tasks.label.${name}`)}:
      </span>
      {value}
    </p>
  );
}

export default Pspan;
