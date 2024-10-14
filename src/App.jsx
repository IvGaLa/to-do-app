import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/content/home/Home";
import List from "./components/content/list/List";
import Add from "./components/content/add/Add";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </Layout>
  );
}

export default App;
