import { useScrollReveal } from "../hooks/useScrollReveal";
import { Link } from "react-router-dom";

function Team() {
  const ctaReveal = useScrollReveal();
  const teamMembers = [
    { name: "Robert Fox", role: "Chief Executive Officer", image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Esther Howard", role: "Chief Engineer", image: "https://images.unsplash.com/photo-1581092926284-78b18be59b92?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Wade Warren", role: "Project Director", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Jenny Wilson", role: "Lead Designer", image: "https://images.unsplash.com/photo-1531834685032-c9fb010e2415?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  ];

  return (
    <div className="page-wrapper">
      <section className="page-hero-section">
        <div className="text-center position-relative z-1">
          <div className="page-hero-subtitle animate-fade-up">Our Experts</div>
          <h1 className="page-hero-title animate-fade-up" style={{ animationDelay: "0.2s" }}>Meet The Team</h1>
        </div>
      </section>

      <section className="py-5 bg-light-secondary">
        <div className="container">
          <div className="row g-4">
            {teamMembers.map((member, index) => {
              const cardReveal = useScrollReveal();
              return (
                <div key={index} className="col-xl-3 col-lg-4 col-md-6">
                  <div 
                    ref={cardReveal.ref}
                    className={`card border-0 hover-lift bg-light-secondary h-100 ${cardReveal.isVisible ? 'animate-fade-up' : ''}`}
                    style={{ opacity: cardReveal.isVisible ? 1 : 0, animationDelay: `${index * 0.1}s` }}
                  >
                    <img src={member.image} className="card-img-top" alt={member.name} style={{ height: "300px", objectFit: "cover" }} />
                    <div className="card-body text-center p-4">
                      <h4 className="fw-bold mb-1">{member.name}</h4>
                      <p className="text-accent small text-uppercase mb-3 fw-bold">{member.role}</p>
                      <div className="d-flex justify-content-center gap-3">
                        <a href="#" className="text-muted"><i className="bi bi-linkedin"></i></a>
                        <a href="#" className="text-muted"><i className="bi bi-twitter"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="container">
          <div ref={ctaReveal.ref} className={`cta-inner-card text-center ${ctaReveal.isVisible ? 'animate-fade-up' : ''}`} style={{ opacity: ctaReveal.isVisible ? 1 : 0 }}>
            <h2 className="section-title mb-4">Join Our Team</h2>
            <Link to="/contact" className="btn-aesthetic px-5 py-3 fs-5 mt-2">Apply Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Team;
