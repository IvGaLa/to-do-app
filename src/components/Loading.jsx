import { getLocale } from "@locales/es";

// Mostramos un mensaje de carga
function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-75"></div>
        <p className="mt-4 text-lg text-gray-600">
          {getLocale("components.loading.loadingtext")}
        </p>
      </div>
    </div>
  );
}

export default Loading;
