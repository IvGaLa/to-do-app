import { Route, Routes } from "react-router-dom";
import Home from "../components/content/home/Home";
import List from "../components/content/list/List";
import Add from "../components/content/add/Add";
import Delete from "../components/content/delete/Delete";
import Modify from "../components/content/modify/Modify";

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<List />} />
      <Route path="/add" element={<Add />} />
      <Route path="/delete/:id" element={<Delete />} />
      <Route path="/modify/:id" element={<Modify />} />
      {/* Sería conveniente crear un componente para las rutas no encontradas */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default MyRoutes;
