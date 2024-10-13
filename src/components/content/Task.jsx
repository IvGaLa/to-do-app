import { DateTime } from "luxon";
import { LuArrowUpDown } from "react-icons/lu";

function Task({ tasks, setTasks }) {
  const formatDate = (date) => {
    const thisDate = DateTime.fromFormat(date, "yyyy/MM/dd HH:mm");
    return thisDate.toFormat("dd/LL/yyyy HH:mm");
  };

  const handlerClick = (orderBy = "title") => {
    // Creamos un nuevo array, ordenamos por el campo deseado.
    const newTasks = [...tasks].sort((a, b) =>
      // Con localeCompare realiza una comparación a nivel de string con carácteres "raros"
      a[orderBy].localeCompare(b[orderBy])
    );

    setTasks(newTasks);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead>
          <tr>
            <th
              onClick={() => handlerClick("title")}
              className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 hover:cursor-pointer"
            >
              <LuArrowUpDown className="inline mx-1" />
              Título
            </th>
            <th
              onClick={() => handlerClick("description")}
              className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 hover:cursor-pointer"
            >
              <LuArrowUpDown className="inline mx-1" />
              Descripción
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Creada
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Modificada
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Finalizada
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {tasks.map((task) => (
            <tr
              key={`${task.user}-${task.id}`}
              className={`${task.finished ? "bg-green-300" : "bg-red-300"}`}
            >
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {task.title}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {task.description}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {formatDate(task.createdAt)}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {task.modifiedAt}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {task.finishedAt}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Task;
