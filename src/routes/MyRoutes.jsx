import { Route, Routes } from "react-router-dom";
import Home from "../components/content/home/Home";
import List from "../components/content/list/List";
import Add from "../components/content/add/Add";
import Delete from "../components/content/delete/Delete";
import Modify from "../components/content/modify/Modify";
import CantDelete from "../components/content/delete/CantDelete";
import { configData } from "../config/config";

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
      {/* Sería conveniente crear un componente para las rutas no encontradas */}
      <Route path={routes.error404.path} element={<Home />} />
    </Routes>
  );
}

export default MyRoutes;
