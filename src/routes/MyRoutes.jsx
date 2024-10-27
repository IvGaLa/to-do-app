import { Route, Routes } from "react-router-dom";

import { configData } from "@config/config";

import Home from "@components/content/home/Home";
import List from "@components/content/list/List";
import Add from "@components/content/add/Add";
import Delete from "@components/content/delete/Delete";
import Modify from "@components/content/modify/Modify";
import CantDelete from "@components/content/delete/CantDelete";
//import SetFinished from "@components/content/modify/SetFinished";
//import SetOpened from "@components/content/modify/SetOpened";
import SetToggle from "@components/content/modify/SetToggle";

function MyRoutes() {
  const { routes } = configData;
  return (
    <Routes>
      <Route path={routes.home.path} element={<Home />} />
      <Route path={routes.list.path} element={<List />} />
      <Route path={routes.add.path} element={<Add />} />
      <Route path={routes.delete.path} element={<Delete />} />
      <Route path={routes.deleteerror.path} element={<CantDelete />} />
      <Route path={routes.modify.path} element={<Modify />} />
      {/* <Route path={routes.finish.path} element={<SetFinished />} /> */}
      {/* <Route path={routes.open.path} element={<SetOpened />} /> */}
      <Route path={routes.toggle.path} element={<SetToggle />} />
      {/* Sería conveniente crear un componente para las rutas no encontradas */}
      <Route path={routes.error404.path} element={<Home />} />
    </Routes>
  );
}

export default MyRoutes;
