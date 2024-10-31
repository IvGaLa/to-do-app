/**
 *
 * Componente para el home
 *
 */

import { getLocale } from "@locales/es";

function Home() {
  const createdBy = getLocale("components.home.createdBy", [
    getLocale("githubUser"),
  ]);
  const githubRepo = getLocale("components.home.githubRepo");

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        {getLocale("components.home.title", [getLocale("title")])}
      </h1>
      <p className="text-gray-600 leading-relaxed mb-4">
        {getLocale("components.home.textDescription")}
      </p>
      <p className="text-gray-600 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: createdBy }} />
        <span dangerouslySetInnerHTML={{ __html: githubRepo }} />
      </p>
    </div>
  );
}

export default Home;
