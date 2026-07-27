import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function NotFound() {
  return (
    <div className="page-wrapper d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundColor: "var(--color-bg-main)", paddingTop: "100px" }}>
      <Helmet>
        <title>Page Not Found | BuildPro</title>
      </Helmet>
      <div className="container text-center py-5">
        <h1 className="display-1 fw-bold text-accent mb-4" style={{ fontSize: "6rem" }}>404</h1>
        <h2 className="mb-4">Oops! Page Not Found</h2>
        <p className="text-muted mb-5 max-w-700 mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="btn-aesthetic">
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
