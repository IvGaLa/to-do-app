import { GrTrash, GrEdit } from "react-icons/gr";
import { IoLockClosedOutline, IoLockOpenOutline } from "react-icons/io5";

import SpanOrders from "@components/content/list/SpanOrders";
import IconLink from "@components/content/list/IconLink";
import { configData } from "@config/config";

function TaskCard({ tasks, setTasks }) {
  const { routes } = configData;

  const taskFinished = {
    completed:
      "bg-green-200 hover:shadow-green-800 hover:border-2 hover:border-green-600 text-green-900",
    pending:
      "bg-red-200 hover:shadow-red-800 hover:border-2 hover:border-red-600 text-red-900",
  };

  return (
    <section>
      <div className="mx-auto px-6 max-w-6xl text-gray-500">
        <div className="text-center">
          <div className="mt-6 text-gray-700">
            <SpanOrders tasks={tasks} setTasks={setTasks} />
          </div>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 ">
          {tasks.map((task, index) => (
            <div
              key={index}
              className={`${
                task.finishedAt !== null
                  ? taskFinished.completed
                  : taskFinished.pending
              } relative group overflow-hidden p-8 rounded-xl border hover:shadow-2xl`}
            >
              <div className="relative">
                <div className="flex relative rounded-lg text-2xl font-bold">
                  {task.title}
                </div>

                <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                  <p className="">{task.description}</p>
                </div>

                <div className=" border-t-2 border-gray-500">
                  <div className="flex gap-3 mt-3 justify-between">
                    {task.finishedAt === null ? (
                      <IconLink
                        // Tarea pendiente, mostramos icono para finalizarla
                        finishedAt={task.finishedAt}
                        to={`/${routes.finish.name}/${task.id}`}
                      >
                        <IoLockOpenOutline />
                      </IconLink>
                    ) : (
                      <IconLink
                        // Tarea finalizada, mostramos icono para reabrirla
                        finishedAt={task.finishedAt}
                        to={`/${routes.open.name}/${task.id}`}
                      >
                        <IoLockClosedOutline />
                      </IconLink>
                    )}

                    <IconLink
                      finishedAt={task.finishedAt}
                      to={`/${routes.modify.name}/${task.id}`}
                    >
                      <GrEdit />
                    </IconLink>

                    <IconLink
                      finishedAt={task.finishedAt}
                      to={`/${routes.delete.name}/${task.id}`}
                    >
                      <GrTrash />
                    </IconLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TaskCard;
