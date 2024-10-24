function InfoMessage({ info }) {
  return (
    <>
      {info && (
        <div
          className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative my-1"
          role="info"
        >
          <span className="block sm:inline">{info}</span>
        </div>
      )}
    </>
  );
}

export default InfoMessage;
