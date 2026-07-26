import "./About.css";
import CountUp from "../components/CountUp";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Link } from "react-router-dom";

function About() {
  const heroReveal = useScrollReveal();
  const textReveal = useScrollReveal();
  const valuesTitleReveal = useScrollReveal();
  const value1Reveal = useScrollReveal({ threshold: 0.2 });
  const value2Reveal = useScrollReveal({ threshold: 0.2 });
  const value3Reveal = useScrollReveal({ threshold: 0.2 });
  const ctaReveal = useScrollReveal();
  
  return (
    <div className="page-wrapper">
      <section className="page-hero-section">
        <div className="text-center position-relative z-1 px-3">
          <div className="page-hero-subtitle animate-fade-up">Who We Are</div>
          <h1 className="page-hero-title animate-fade-up" style={{ animationDelay: "0.2s" }}>About BuildPro</h1>
          <p className="animate-fade-up text-muted mx-auto mt-4 max-w-700" style={{ animationDelay: "0.4s", fontSize: "1.15rem", lineHeight: "1.7" }}>
            We are a team of dedicated professionals committed to building structures that stand the test of time.
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div 
                ref={heroReveal.ref}
                className={`about-image-wrapper position-relative ${heroReveal.isVisible ? 'animate-fade-up' : ''}`}
                style={{ opacity: heroReveal.isVisible ? 1 : 0 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Construction Team" 
                  className="img-fluid rounded-4 shadow position-relative z-1"
                />
              </div>
            </div>
            <div 
              ref={textReveal.ref}
              className={`col-lg-6 px-lg-3 px-xl-5 ${textReveal.isVisible ? 'animate-fade-up' : ''}`} 
              style={{ opacity: textReveal.isVisible ? 1 : 0, animationDelay: "0.2s" }}
            >
              <div className="section-subtitle">Our Story</div>
              <h2 className="section-title mb-4">About BuildPro</h2>
              <p className="fs-5 text-muted mb-4" style={{ lineHeight: "1.8" }}>
                With over 20 years of experience in the construction industry, BuildPro has established itself as a leader in delivering high-quality residential and commercial projects.
              </p>
              <p className="text-muted mb-4" style={{ lineHeight: "1.8" }}>
                Our mission is to build structures that stand the test of time while providing exceptional customer service. We believe in transparency, integrity, and hard work. Our team of skilled professionals is dedicated to turning your vision into reality.
              </p>
              <ul className="list-unstyled mb-0 d-flex flex-wrap gap-3 mt-4">
                <li className="d-flex align-items-center bg-transparent p-3 rounded-3 border border-secondary" style={{ borderColor: "rgba(0,0,0,0.1) !important" }}>
                  <i className="bi bi-check-circle-fill text-accent fs-4 me-3"></i> <strong className="fw-medium">Licensed & Insured</strong>
                </li>
                <li className="d-flex align-items-center bg-transparent p-3 rounded-3 border border-secondary" style={{ borderColor: "rgba(0,0,0,0.1) !important" }}>
                  <i className="bi bi-check-circle-fill text-accent fs-4 me-3"></i> <strong className="fw-medium">Award-Winning Team</strong>
                </li>
                <li className="d-flex align-items-center bg-transparent p-3 rounded-3 border border-secondary" style={{ borderColor: "rgba(0,0,0,0.1) !important" }}>
                  <i className="bi bi-check-circle-fill text-accent fs-4 me-3"></i> <strong className="fw-medium">100% Satisfaction</strong>
                </li>
              </ul>
            </div>
          </div>

          <div className="glass-panel p-4 p-xl-5 rounded-4 border-0 bg-light-secondary">
            <div className="row text-center g-4">
              <div className="col-md-3 col-6">
                <h3 className="display-4 fw-bold text-accent mb-2">
                  <CountUp end={20} suffix="+" />
                </h3>
                <p className="text-muted text-uppercase fw-semibold mb-0 tracking-wider">Years Exp.</p>
              </div>
              <div className="col-md-3 col-6">
                <h3 className="display-4 fw-bold text-accent mb-2">
                  <CountUp end={500} suffix="+" />
                </h3>
                <p className="text-muted text-uppercase fw-semibold mb-0 tracking-wider">Projects</p>
              </div>
              <div className="col-md-3 col-6">
                <h3 className="display-4 fw-bold text-accent mb-2">
                  <CountUp end={150} suffix="+" />
                </h3>
                <p className="text-muted text-uppercase fw-semibold mb-0 tracking-wider">Workers</p>
              </div>
              <div className="col-md-3 col-6">
                <h3 className="display-4 fw-bold text-accent mb-2">
                  <CountUp end={100} suffix="%" />
                </h3>
                <p className="text-muted text-uppercase fw-semibold mb-0 tracking-wider">Happy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-5 bg-light-secondary">
        <div className="container">
        <div 
          ref={valuesTitleReveal.ref}
          className={`text-center mb-5 ${valuesTitleReveal.isVisible ? 'animate-fade-up' : ''}`}
          style={{ opacity: valuesTitleReveal.isVisible ? 1 : 0 }}
        >
          <h2 className="section-title">Our Core Values</h2>
          <div className="section-subtitle">What Drives Us</div>
        </div>
        <div className="row g-4 text-center">
          <div className="col-md-4">
            <div 
              ref={value1Reveal.ref}
              className={`glass-panel p-4 p-xl-5 h-100 hover-lift border-0 ${value1Reveal.isVisible ? 'animate-fade-up' : ''}`} 
              style={{ opacity: value1Reveal.isVisible ? 1 : 0, animationDelay: "0.1s" }}
            >
              <div className="feature-icon-wrapper mx-auto mb-4 bg-accent-light border-accent-light" style={{ width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="bi bi-shield-check text-accent fs-1"></i>
              </div>
              <h3 className="h4 fw-bold mb-3">Integrity First</h3>
              <p className="text-muted mb-0">We build trust through honest communication, transparent pricing, and always doing what we say we will do.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div 
              ref={value2Reveal.ref}
              className={`glass-panel p-4 p-xl-5 h-100 hover-lift border-0 ${value2Reveal.isVisible ? 'animate-fade-up' : ''}`} 
              style={{ opacity: value2Reveal.isVisible ? 1 : 0, animationDelay: "0.2s" }}
            >
              <div className="feature-icon-wrapper mx-auto mb-4 bg-accent-light border-accent-light" style={{ width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="bi bi-gem text-accent fs-1"></i>
              </div>
              <h3 className="h4 fw-bold mb-3">Excellence</h3>
              <p className="text-muted mb-0">We are committed to delivering the highest quality craftsmanship and exceeding client expectations on every single project.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div 
              ref={value3Reveal.ref}
              className={`glass-panel p-4 p-xl-5 h-100 hover-lift border-0 ${value3Reveal.isVisible ? 'animate-fade-up' : ''}`} 
              style={{ opacity: value3Reveal.isVisible ? 1 : 0, animationDelay: "0.3s" }}
            >
              <div className="feature-icon-wrapper mx-auto mb-4 bg-accent-light border-accent-light" style={{ width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="bi bi-heart-pulse text-accent fs-1"></i>
              </div>
              <h3 className="h4 fw-bold mb-3">Safety Matters</h3>
              <p className="text-muted mb-0">The safety of our workers, clients, and the public is our top priority. We strictly follow all industry safety protocols.</p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div 
            ref={ctaReveal.ref}
            className={`cta-inner-card text-center ${ctaReveal.isVisible ? 'animate-fade-up' : ''}`}
            style={{ opacity: ctaReveal.isVisible ? 1 : 0 }}
          >
            <h2 className="section-title mb-4">Ready to Build Your Dream Project?</h2>
            <p className="lead text-muted mb-5 max-w-700 mx-auto">
              Get in touch with us today for a free consultation and estimate. Let's turn your ideas into reality.
            </p>
            <Link to="/contact" className="btn-aesthetic px-5 py-3 fs-5 mt-2">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
