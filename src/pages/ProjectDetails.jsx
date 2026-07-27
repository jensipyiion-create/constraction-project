import { useParams, Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";

function ProjectDetails() {
  const contentReveal = useScrollReveal();
  const galleryReveal = useScrollReveal();
  const { id } = useParams();

  // Mock data for the project (in a real app, you'd fetch this based on the ID)
  const project = {
    title: "Apex Commercial Tower",
    category: "Commercial",
    location: "Downtown Metropolis",
    duration: "24 Months",
    client: "Apex Corp",
    description: "A state-of-the-art commercial high-rise designed to maximize natural light and energy efficiency. The project involved deep foundational work, sustainable materials, and advanced HVAC systems.",
    extendedDescription: "This landmark development reshapes the city skyline while setting new standards for sustainable urban architecture. By integrating smart building technologies with biophilic design principles, the tower offers a workspace that enhances productivity and well-being. The facade utilizes dynamic glazing to reduce heat loads, and rainwater harvesting systems support the building's extensive green spaces.",
    challenges: "Working within a tightly packed downtown area with strict noise and logistical constraints.",
    solutions: "We employed just-in-time delivery for materials and utilized specialized noise-reducing equipment.",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
    ]
  };

  return (
    <div className="page-wrapper">
      <section className="page-hero-section position-relative" style={{ minHeight: '40vh', backgroundImage: `url(${project.images[0]})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundAttachment: 'fixed', paddingTop: '100px' }}>
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%)' }}></div>
        <div className="container position-relative z-1 d-flex flex-column justify-content-center h-100">
          <div className="max-w-800 mx-auto text-center">
            <h1 className="display-3 fw-bold animate-fade-up text-white mb-0" style={{ animationDelay: "0.2s", fontFamily: 'var(--font-primary)' }}>{project.title}</h1>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="row g-5">
            <div className="col-lg-8" ref={contentReveal.ref}>
              <div className={contentReveal.isVisible ? 'animate-fade-up' : ''} style={{ opacity: contentReveal.isVisible ? 1 : 0 }}>
                <h3 className="display-6 fw-bold mb-4 text-dark" style={{ fontFamily: 'var(--font-primary)' }}>Project Overview</h3>
                <p className="fs-4 text-dark mb-4 fw-light" style={{ lineHeight: "1.6" }}>{project.description}</p>
                <p className="text-muted fs-5 mb-5" style={{ lineHeight: "1.8" }}>{project.extendedDescription}</p>
                
                <div className="row g-4 mb-5">
                  <div className="col-md-6">
                    <div className="bg-light-secondary border-0 p-5 rounded-4 h-100">
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-white rounded-circle d-flex align-items-center justify-content-center shadow-sm me-3" style={{ width: '50px', height: '50px' }}>
                          <i className="bi bi-exclamation-triangle-fill text-warning fs-4"></i>
                        </div>
                        <h5 className="fw-bold m-0" style={{ fontFamily: 'var(--font-primary)' }}>The Challenge</h5>
                      </div>
                      <p className="text-muted mb-0">{project.challenges}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="bg-light-secondary border-0 p-5 rounded-4 h-100">
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-white rounded-circle d-flex align-items-center justify-content-center shadow-sm me-3" style={{ width: '50px', height: '50px' }}>
                          <i className="bi bi-lightbulb-fill text-warning fs-4"></i>
                        </div>
                        <h5 className="fw-bold m-0" style={{ fontFamily: 'var(--font-primary)' }}>Our Solution</h5>
                      </div>
                      <p className="text-muted mb-0">{project.solutions}</p>
                    </div>
                  </div>
                </div>

                <div ref={galleryReveal.ref} className={`mb-4 ${galleryReveal.isVisible ? 'animate-fade-up' : ''}`} style={{ opacity: galleryReveal.isVisible ? 1 : 0 }}>
                  <h3 className="display-6 fw-bold mb-4 text-dark" style={{ fontFamily: 'var(--font-primary)' }}>Gallery</h3>
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="overflow-hidden rounded-4 hover-lift">
                        <img src={project.images[1]} className="img-fluid w-100 object-fit-cover transition-transform" style={{ height: "400px" }} alt="Project Detail 1" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="overflow-hidden rounded-4 hover-lift">
                        <img src={project.images[2]} className="img-fluid w-100 object-fit-cover transition-transform" style={{ height: "300px" }} alt="Project Detail 2" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="overflow-hidden rounded-4 hover-lift">
                        <img src={project.images[3] || project.images[0]} className="img-fluid w-100 object-fit-cover transition-transform" style={{ height: "300px" }} alt="Project Detail 3" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="glass-panel p-5 rounded-4 sticky-top border-0 bg-light-secondary" style={{ top: "120px" }}>
                <h4 className="fw-bold mb-4 pb-3 border-bottom border-dark-subtle text-dark" style={{ fontFamily: 'var(--font-primary)' }}>Project Details</h4>
                <ul className="list-unstyled mb-0">
                  <li className="mb-4 d-flex align-items-start">
                    <i className="bi bi-person-badge fs-4 text-accent me-3 mt-1"></i>
                    <div>
                      <span className="text-muted d-block small text-uppercase fw-bold mb-1 letter-spacing-1">Client</span>
                      <span className="fs-5 text-dark fw-medium">{project.client}</span>
                    </div>
                  </li>
                  <li className="mb-4 d-flex align-items-start">
                    <i className="bi bi-geo-alt fs-4 text-accent me-3 mt-1"></i>
                    <div>
                      <span className="text-muted d-block small text-uppercase fw-bold mb-1 letter-spacing-1">Location</span>
                      <span className="fs-5 text-dark fw-medium">{project.location}</span>
                    </div>
                  </li>
                  <li className="mb-4 d-flex align-items-start">
                    <i className="bi bi-building fs-4 text-accent me-3 mt-1"></i>
                    <div>
                      <span className="text-muted d-block small text-uppercase fw-bold mb-1 letter-spacing-1">Category</span>
                      <span className="fs-5 text-dark fw-medium">{project.category}</span>
                    </div>
                  </li>
                  <li className="mb-4 d-flex align-items-start">
                    <i className="bi bi-calendar-check fs-4 text-accent me-3 mt-1"></i>
                    <div>
                      <span className="text-muted d-block small text-uppercase fw-bold mb-1 letter-spacing-1">Duration</span>
                      <span className="fs-5 text-dark fw-medium">{project.duration}</span>
                    </div>
                  </li>
                </ul>
                <div className="mt-5 pt-4 border-top border-dark-subtle">
                  <Link to="/contact" className="btn-aesthetic w-100 text-center py-3 shadow-sm rounded-pill">
                    Discuss Similar Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetails;
