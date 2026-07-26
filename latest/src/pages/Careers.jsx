import { useScrollReveal } from "../hooks/useScrollReveal";
import { Link } from "react-router-dom";

function Careers() {
  const heroReveal = useScrollReveal();
  const ctaReveal = useScrollReveal();

  const jobs = [
    { title: "Senior Project Manager", location: "New York, NY", type: "Full-time" },
    { title: "Site Supervisor", location: "Chicago, IL", type: "Full-time" },
    { title: "Civil Engineer", location: "Austin, TX", type: "Full-time" },
    { title: "Safety Coordinator", location: "Remote", type: "Contract" },
  ];

  return (
    <div className="page-wrapper">
      <section className="page-hero-section">
        <div className="text-center position-relative z-1">
          <div className="page-hero-subtitle animate-fade-up">Join Our Team</div>
          <h1 className="page-hero-title animate-fade-up" style={{ animationDelay: "0.2s" }}>Careers</h1>
        </div>
      </section>

      <section className="py-5 bg-light-secondary">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-5">
              <h2 className="fw-bold mb-4">Why Work With Us?</h2>
              <p className="text-muted fs-5 mb-4">
                At BuildPro, we believe our greatest asset is our people. We foster a culture of excellence, safety, and continuous learning.
              </p>
              <ul className="list-unstyled mb-5">
                <li className="mb-3 d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-accent fs-4 me-3"></i> Competitive Compensation
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-accent fs-4 me-3"></i> Comprehensive Health Benefits
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-accent fs-4 me-3"></i> Professional Growth & Training
                </li>
              </ul>
            </div>
            <div className="col-lg-7">
              <h3 className="fw-bold mb-4">Open Positions</h3>
              <div className="row g-4">
                {jobs.map((job, index) => {
                  const jobReveal = useScrollReveal();
                  return (
                    <div 
                      key={index} 
                      ref={jobReveal.ref}
                      className={`col-md-6 ${jobReveal.isVisible ? 'animate-fade-up' : ''}`}
                      style={{ opacity: jobReveal.isVisible ? 1 : 0, animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="glass-panel p-4 hover-lift h-100">
                        <h4 className="fw-bold mb-2 text-white">{job.title}</h4>
                        <div className="d-flex text-muted small mb-3">
                          <span className="me-3"><i className="bi bi-geo-alt me-1 text-accent"></i> {job.location}</span>
                          <span><i className="bi bi-clock me-1 text-accent"></i> {job.type}</span>
                        </div>
                        <button className="btn-aesthetic-outline btn-sm">Apply Now</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div ref={ctaReveal.ref} className={`cta-inner-card text-center ${ctaReveal.isVisible ? 'animate-fade-up' : ''}`} style={{ opacity: ctaReveal.isVisible ? 1 : 0 }}>
            <h2 className="section-title mb-4">Don't see a fit?</h2>
            <p className="lead text-muted mb-5 max-w-700 mx-auto">
              Send us your resume anyway. We are always looking for talented individuals to join our growing team.
            </p>
            <Link to="/contact" className="btn-aesthetic px-5 py-3 fs-5 mt-2">
              Submit Resume
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Careers;
