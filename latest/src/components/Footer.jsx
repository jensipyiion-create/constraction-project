import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer position-relative pt-5 pb-0 overflow-hidden" style={{ backgroundColor: 'var(--color-dark)', color: 'white' }}>
      {/* Optional decorative background elements */}
      <div className="footer-decoration-1"></div>
      <div className="footer-decoration-2"></div>
      
      <div className="container-fluid px-4 px-lg-5 pt-5 pb-4 position-relative z-1">
        <div className="row g-5">
          {/* Brand Col */}
          <div className="col-md-6 col-lg-4 pe-lg-5 mb-4">
            <h3 className="footer-logo mb-4 text-white fw-bold" style={{ letterSpacing: "1px" }}>BUILDPRO<br/>CONSTRUCTION</h3>
            <p className="small mb-4" style={{ lineHeight: "1.8", color: "rgba(255,255,255,0.75)" }}>
              A premier construction company dedicated to building robust, high-quality residential and commercial structures with sustainable practices.
            </p>
            <div className="d-flex gap-3 mt-4">
              <a href="#" className="social-icon-circle instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="social-icon-circle linkedin">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="social-icon-circle pinterest">
                <i className="bi bi-pinterest"></i>
              </a>
            </div>
          </div>
          
          {/* Links Col */}
          <div className="col-md-6 col-lg-2 px-lg-4 mb-4">
             <h5 className="text-white mb-4 position-relative pb-2" style={{ fontSize: "0.9rem", letterSpacing: "2px", fontWeight: "600" }}>
               EXPLORE
               <span className="footer-heading-underline"></span>
             </h5>
             <ul className="list-unstyled">
                <li className="mb-3"><a href="/" className="footer-link-advanced">Home</a></li>
                <li className="mb-3"><a href="/about" className="footer-link-advanced">About Us</a></li>
                <li className="mb-3"><a href="/projects" className="footer-link-advanced">Projects</a></li>
                <li className="mb-3"><a href="/services" className="footer-link-advanced">Services</a></li>
             </ul>
          </div>

          {/* Contact Col */}
          <div className="col-md-6 col-lg-3 px-lg-3 mb-4">
            <h5 className="text-white mb-4 position-relative pb-2" style={{ fontSize: "0.9rem", letterSpacing: "2px", fontWeight: "600" }}>
              CONTACT
              <span className="footer-heading-underline"></span>
            </h5>
            <ul className="list-unstyled footer-info mb-0" style={{ color: "rgba(255,255,255,0.75)" }}>
              <li className="d-flex mb-3 align-items-start footer-contact-item">
                <i className="bi bi-geo-alt me-3 mt-1 fs-5 text-white"></i>
                <span>28 King Street, Studio 502<br/>Copenhagen, Denmark 1264</span>
              </li>
              <li className="d-flex mb-3 align-items-center footer-contact-item">
                <i className="bi bi-envelope me-3 fs-5 text-white"></i>
                <a href="mailto:info@buildpro.com" className="text-decoration-none" style={{ color: "inherit" }}>info@buildpro.com</a>
              </li>
              <li className="d-flex align-items-center footer-contact-item">
                <i className="bi bi-telephone me-3 fs-5 text-white"></i>
                <a href="tel:+4531961284" className="text-decoration-none" style={{ color: "inherit" }}>+45 31 96 12 84</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div className="col-md-6 col-lg-3 ps-lg-4 mb-4">
            <h5 className="text-white mb-4 position-relative pb-2" style={{ fontSize: "0.9rem", letterSpacing: "2px", fontWeight: "600" }}>
              NEWSLETTER
              <span className="footer-heading-underline"></span>
            </h5>
            <p className="small mb-4" style={{ color: "rgba(255,255,255,0.75)" }}>
              Subscribe to get the latest news, updates, and special offers delivered directly to your inbox.
            </p>
            <form className="newsletter-form d-flex flex-column gap-3" onSubmit={(e) => e.preventDefault()}>
              <input type="email" className="form-control newsletter-input" placeholder="Your email address" required />
              <button type="submit" className="btn newsletter-btn mt-2 align-self-start">SUBSCRIBE <i className="bi bi-arrow-right ms-2"></i></button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Absolute Bottom Footer */}
      <div className="footer-bottom mt-2" style={{ backgroundColor: '#050505', borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="container-fluid px-4 px-lg-5 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center py-4 text-white" style={{ fontSize: "0.75rem", letterSpacing: "1px" }}>
          <div className="mb-3 mb-md-0" style={{ color: "rgba(255,255,255,0.6)" }}>
            &copy; {new Date().getFullYear()} <span className="text-white fw-bold">BUILDPRO CONSTRUCTION</span>. ALL RIGHTS RESERVED.
          </div>
          <div className="d-flex gap-4 align-items-center">
            <a href="#" className="footer-bottom-link">PRIVACY POLICY</a>
            <a href="#" className="footer-bottom-link">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
