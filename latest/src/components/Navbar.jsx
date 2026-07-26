import { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavClose = () => setIsNavOpen(false);

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      if (searchQuery.trim()) {
        navigate(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
      } else {
        navigate(`/products`);
      }
    }
  };
  
  // Identify pages with dark hero sections that need white text at the top
  const isDarkHero = location.pathname === "/" || 
                     (location.pathname.startsWith("/projects/") && location.pathname !== "/projects") ||
                     (location.pathname.startsWith("/blog/") && location.pathname !== "/blog");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine text color dynamically
  const textColorClass = (isDarkHero && !scrolled) ? "text-white" : "text-dark";

  return (
    <nav className={`navbar navbar-expand-lg fixed-top py-3 aesthetic-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container-fluid px-3 px-xl-5">
        <Link className={`navbar-brand ${textColorClass} tracking-widest fs-5`} style={{ transition: "color 0.3s ease" }} to="/">
          BUILDPRO<br/>CONSTRUCTION
        </Link>
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <i className={`bi ${isNavOpen ? 'bi-x' : 'bi-list'} fs-3 ${textColorClass}`}></i>
        </button>
        <div className={`collapse navbar-collapse mobile-nav-menu ${isNavOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto text-uppercase text-xs tracking-widest fw-semibold gap-lg-2 gap-xl-3">
            <li className="nav-item">
              <NavLink onClick={handleNavClose} className={`nav-link ${textColorClass} nav-link-custom ${isDarkHero && !scrolled ? 'nav-link-white' : ''}`} to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={handleNavClose} className={`nav-link ${textColorClass} nav-link-custom ${isDarkHero && !scrolled ? 'nav-link-white' : ''}`} to="/projects">Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={handleNavClose} className={`nav-link ${textColorClass} nav-link-custom ${isDarkHero && !scrolled ? 'nav-link-white' : ''}`} to="/products">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={handleNavClose} className={`nav-link ${textColorClass} nav-link-custom ${isDarkHero && !scrolled ? 'nav-link-white' : ''}`} to="/about">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={handleNavClose} className={`nav-link ${textColorClass} nav-link-custom ${isDarkHero && !scrolled ? 'nav-link-white' : ''}`} to="/services">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={handleNavClose} className={`nav-link ${textColorClass} nav-link-custom ${isDarkHero && !scrolled ? 'nav-link-white' : ''}`} to="/blog">Blog</NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={handleNavClose} className={`nav-link ${textColorClass} nav-link-custom ${isDarkHero && !scrolled ? 'nav-link-white' : ''}`} to="/contact">Contact</NavLink>
            </li>
          </ul>
          <div className="d-flex align-items-center gap-3 ms-lg-2 ms-xl-4">
            <div className="position-relative d-none d-lg-block">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
                className={`form-control rounded-pill nav-search-input ${isDarkHero && !scrolled ? 'search-light' : 'search-dark'}`}
                placeholder="Search..." 
                style={{
                  padding: '8px 35px 8px 18px',
                  border: `1px solid ${isDarkHero && !scrolled ? 'rgba(255,255,255,0.5)' : '#000000'}`,
                  backgroundColor: isDarkHero && !scrolled ? 'rgba(255,255,255,0.15)' : 'transparent',
                  backdropFilter: isDarkHero && !scrolled ? 'blur(10px)' : 'none',
                  WebkitBackdropFilter: isDarkHero && !scrolled ? 'blur(10px)' : 'none',
                  color: isDarkHero && !scrolled ? '#ffffff' : '#000000',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease',
                  boxShadow: isDarkHero && !scrolled ? '0 4px 15px rgba(0,0,0,0.1)' : 'none'
                }}
              />
              <i 
                className={`bi bi-search position-absolute top-50 translate-middle-y ${isDarkHero && !scrolled ? 'text-white' : ''}`} 
                style={{ color: isDarkHero && !scrolled ? '' : '#000000', right: '15px', fontSize: '1rem', pointerEvents: 'none', opacity: isDarkHero && !scrolled ? 1 : 0.7 }}
              ></i>
            </div>
          </div>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
