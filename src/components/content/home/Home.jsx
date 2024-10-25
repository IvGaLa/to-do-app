import { getLocale } from "@locales/es";

function Home() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        {getLocale("components.home.title")} {getLocale("title")}
      </h1>
      <p className="text-gray-600 leading-relaxed mb-4">
        {getLocale("components.home.textDescription")}
      </p>
      <p className="text-gray-600 leading-relaxed">
        {getLocale("components.home.createdBy")}
        <a
          href="https://github.com/IvGaLa/"
          className="text-blue-500 hover:text-blue-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          {getLocale("githubUser")}
        </a>
        {getLocale("components.home.accessToRepo")}
        <a
          href="https://github.com/IvGaLa/to-do-app"
          className="text-blue-500 hover:text-blue-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          {getLocale("components.home.accessToRepo2")}
        </a>
      </p>
    </div>
  );
}

export default Home;
