function GlobalLoader() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: "var(--color-bg-main)" }}>
      <div className="spinner-border text-accent" role="status" style={{ width: "3rem", height: "3rem" }}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default GlobalLoader;
