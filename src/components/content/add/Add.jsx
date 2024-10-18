import { useState } from "react";
import { getLocale } from "../../../locale/es";
import TitlePage from "../../TitlePage";
import Added from "./Added";
import Form from "./Form";

function Add() {
  /**
   *
   * Declaración de estados
   *
   */
  const [resultAdd, setResultAdd] = useState("");

  return (
    <div>
      <TitlePage>{getLocale("components.content.add.title")}</TitlePage>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        {resultAdd && (
          <Added resultAdd={resultAdd} setResultAdd={setResultAdd} />
        )}
        {!resultAdd && <Form setResultAdd={setResultAdd} />}
      </section>
    </div>
  );
}

export default Add;
