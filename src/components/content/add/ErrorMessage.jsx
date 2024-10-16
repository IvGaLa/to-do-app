function ErrorMessage({ error }) {
  return <>{error && <p className="text-red-400 ">{error}</p>}</>;
}

export default ErrorMessage;
