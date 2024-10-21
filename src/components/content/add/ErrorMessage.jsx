function ErrorMessage({ error }) {
  return (
    <>
      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-1"
          role="alert"
        >
          <span className="block sm:inline">{error}</span>
        </div>
      )}
    </>
  );
}

export default ErrorMessage;
