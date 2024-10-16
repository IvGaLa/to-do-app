function TitlePage({ children }) {
  return (
    <h1 className="text-3xl font-semibold text-gray-700 dark:text-white flex justify-center mb-3">
      {children}
    </h1>
  );
}

export default TitlePage;
