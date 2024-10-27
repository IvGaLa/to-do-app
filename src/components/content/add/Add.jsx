/**
 * Componente para mostrar el formulario de añadir nueva tarea o resultado de haber añadido una nueva tarea.
 */

import { useState } from "react";

import { getLocale } from "@locales/es";
import TitlePage from "@components/TitlePage";

import Added from "@components/content/add/Added";
import Form from "@components/content/add/Form";

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
