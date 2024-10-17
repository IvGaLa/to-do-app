function Pspan({ children, locale }) {
  return (
    <p className="mb-2">
      <span className="font-semibold pr-2">{locale}:</span>
      {children}
    </p>
  );
}

export default Pspan;
