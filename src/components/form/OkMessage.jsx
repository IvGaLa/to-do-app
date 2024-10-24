function OkMessage({ ok }) {
  return (
    <>
      {ok && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative my-1"
          role="info"
        >
          <span className="block sm:inline">{ok}</span>
        </div>
      )}
    </>
  );
}

export default OkMessage;
