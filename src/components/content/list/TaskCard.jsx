//import { FiCalendar, FiEdit, FiCheckCircle } from "react-icons/fi";
import { GrTrash, GrEdit, GrFormCheckmark } from "react-icons/gr";

import SpanOrders from "@components/content/list/SpanOrders";
//import SpanDateTime from "@components/content/list/SpanDateTime";
import IconLink from "@components/content/list/IconLink";
import { configData } from "@config/config";
//import { getLocale } from "@locales/es";

function TaskCard({ tasks, setTasks }) {
  const { routes } = configData;

  return (
    <section>
      <div className="mx-auto px-6 max-w-6xl text-gray-500">
        <div className="text-center">
          <p className="mt-6 text-gray-700 dark:text-gray-300">
            <SpanOrders tasks={tasks} setTasks={setTasks} />
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 hover:shadow-2xl"
            >
              <div className="relative">
                <div className="flex relative rounded-lg text-2xl">
                  {task.title}
                </div>

                <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                  <p className="text-gray-700 dark:text-gray-300">
                    {task.description}
                  </p>
                </div>

                <div className="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800">
                  <IconLink to="">
                    <GrFormCheckmark />
                  </IconLink>

                  <IconLink to={`/${routes.modify.name}/${task.id}`}>
                    <GrEdit />
                  </IconLink>

                  <IconLink to={`/${routes.delete.name}/${task.id}`}>
                    <GrTrash />
                  </IconLink>
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

//   return (
//     <div>
//       <SpanOrders tasks={tasks} setTasks={setTasks} />

//       <div classNameName="container mx-auto p-4">
//         <div classNameName="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {tasks.map((task) => (
//             <div
//               key={task.id}
//               classNameName="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
//             >
//               <h2 classNameName="text-xl font-semibold text-gray-800">
//                 {task.title}
//               </h2>
//               <p classNameName="text-gray-600 mt-2 mb-4">{task.description}</p>

//               <div classNameName="text-sm text-gray-500">
//                 <SpanDateTime date={task.createdAt} icon={FiCalendar} />

//                 {task.modifiedAt && (
//                   <SpanDateTime date={task.modifiedAt} icon={FiEdit} />
//                 )}

//                 {task.finishedAt && (
//                   <SpanDateTime date={task.finishedAt} icon={FiCheckCircle} />
//                 )}
//                 <span
//                   classNameName={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
//                     task.finished
//                       ? "bg-green-200 text-green-800"
//                       : "bg-red-200 text-red-800"
//                   }`}
//                 >
//                   {task.finished
//                     ? getLocale("components.content.list.completed")
//                     : getLocale("components.content.list.pending")}
//                 </span>

//                 <div classNameName="flex justify-between text-center mt-3">
//                   <GrFormCheckmark />
//                   <IconLink to={`/${routes.modify.name}/${task.id}`}>
//                     <GrEdit />
//                   </IconLink>
//                   <IconLink to={`/${routes.delete.name}/${task.id}`}>
//                     <GrTrash />
//                   </IconLink>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TaskCard;
