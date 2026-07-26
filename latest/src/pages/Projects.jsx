import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Projects.css";

function Projects() {
  const [filter, setFilter] = useState("All");
  const [lightboxImg, setLightboxImg] = useState(null);
  const filterReveal = useScrollReveal();
  const testimonialsTitleReveal = useScrollReveal();
  const ctaReveal = useScrollReveal();
  
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const halfWidth = slider.scrollWidth / 2;
      
      if (direction === 'left' && slider.scrollLeft <= 5) {
        slider.style.scrollBehavior = 'auto';
        slider.scrollLeft = halfWidth;
      }
      
      if (direction === 'right' && slider.scrollLeft >= halfWidth - 5) {
        slider.style.scrollBehavior = 'auto';
        slider.scrollLeft = 0;
      }
      
      setTimeout(() => {
        slider.style.scrollBehavior = 'smooth';
        const scrollAmount = direction === 'left' ? -(slider.offsetWidth * 0.8) : (slider.offsetWidth * 0.8);
        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }, 10);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let intervalId;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        if (!slider) return;
        
        const halfWidth = slider.scrollWidth / 2;
        
        if (slider.scrollLeft >= halfWidth - 5) {
           slider.style.scrollBehavior = 'auto';
           slider.scrollLeft = 0;
           
           setTimeout(() => {
             slider.style.scrollBehavior = 'smooth';
             const scrollAmount = slider.offsetWidth * 0.8;
             slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
           }, 20);
        } else {
           slider.style.scrollBehavior = 'smooth';
           const scrollAmount = slider.offsetWidth * 0.8;
           slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }, 3500);
    };

    startAutoScroll();

    const stopAutoScroll = () => clearInterval(intervalId);
    
    slider.addEventListener('mouseenter', stopAutoScroll);
    slider.addEventListener('mouseleave', startAutoScroll);
    slider.addEventListener('touchstart', stopAutoScroll);
    slider.addEventListener('touchend', startAutoScroll);

    return () => {
      clearInterval(intervalId);
      slider.removeEventListener('mouseenter', stopAutoScroll);
      slider.removeEventListener('mouseleave', startAutoScroll);
      slider.removeEventListener('touchstart', stopAutoScroll);
      slider.removeEventListener('touchend', startAutoScroll);
    };
  }, []);

  const testimonialsList = [
    { text: "BuildPro completely transformed our commercial space. Their attention to detail and project management kept everything on time and under budget.", name: "John Doe", role: "CEO, Vertex Corp", initials: "JD" },
    { text: "Building our dream home with them was an incredible experience. The craftsmanship is breathtaking and they truly listened to our vision.", name: "Sarah Adams", role: "Homeowner, Oakhaven", initials: "SA" },
    { text: "As a healthcare provider, we had strict regulations. BuildPro exceeded all expectations and delivered a state-of-the-art facility flawlessly.", name: "Dr. Mark Ruffalo", role: "Director, Pine Grove", initials: "MR" }
  ];
  const displayTestimonials = [...testimonialsList, ...testimonialsList];

  const projects = [
    {
      id: 1,
      title: "Skyline Tower",
      category: "Commercial",
      location: "New York, NY",
      description: "A 45-story modern office building featuring sustainable design and state-of-the-art amenities.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Oakhaven Estate",
      category: "Residential",
      location: "Westside Hills",
      description: "Custom luxury home with open-concept living, infinity pool, and smart home integration.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Pine Grove Medical Center",
      category: "Healthcare",
      location: "North Suburbs",
      description: "Advanced healthcare facility built with strict compliance to safety and environmental standards.",
      image: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Lakeside Villa Renovation",
      category: "Renovation",
      location: "Lake District",
      description: "Complete interior and exterior remodel of a historic lakeside property.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Tech Hub Campus",
      category: "Commercial",
      location: "Innovation Park",
      description: "Multi-building campus designed for a leading technology firm, emphasizing collaborative spaces.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "The Horizon Condos",
      category: "Residential",
      location: "East Bay",
      description: "Modern multi-family residential complex featuring premium finishes and waterfront views.",
      image: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = ["All", "Residential", "Commercial", "Renovation", "Healthcare"];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="page-wrapper">
      <section className="page-hero-section">
        <div className="text-center position-relative z-1 px-3">
          <div className="page-hero-subtitle animate-fade-up">Our Portfolio</div>
          <h1 className="page-hero-title animate-fade-up" style={{ animationDelay: "0.2s" }}>Our Projects</h1>
          <p className="fs-5 mt-4 text-dark max-w-700 mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Explore our proud achievements. From luxury homes to commercial structures, we build with excellence.
          </p>
        </div>
      </section>



      <section className="py-5">
        <div className="container">
          {/* Filters */}
          <div
            ref={filterReveal.ref}
            className={`d-flex flex-wrap justify-content-center gap-3 mb-5 ${filterReveal.isVisible ? 'animate-fade-up' : ''}`}
            style={{ opacity: filterReveal.isVisible ? 1 : 0 }}
          >
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="row g-4">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="col-md-6 col-xl-4 col-lg-6 animate-fade-up"
                style={{ animationDelay: `${0.1 * (index % 3)}s` }}
              >
                <div className="glass-panel h-100 project-card rounded-4 d-flex flex-column p-2 p-md-3 p-lg-4">
                  <div className="project-image-wrapper rounded-4" style={{ cursor: "pointer", flexShrink: 0 }} onClick={() => setLightboxImg(project.image)}>
                    <span className="project-category">{project.category}</span>
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="project-overlay-action">
                      <i className="bi bi-arrows-fullscreen"></i>
                    </div>
                  </div>
                  <div className="pt-3 pt-md-4 d-flex flex-column flex-grow-1">
                    <h3 className="h4 fw-bold mb-2" style={{ fontFamily: "var(--font-primary)" }}>
                      <Link to={`/projects/${project.id}`} className="text-decoration-none text-dark hover-text-primary">
                        {project.title}
                      </Link>
                    </h3>
                    <p className="text-muted mb-2" style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>{project.description}</p>
                    
                    <div className="project-meta d-flex align-items-center justify-content-between mt-auto">
                      <span className="text-muted small fw-medium"><i className="bi bi-geo-alt-fill text-accent me-1"></i> {project.location}</span>
                      <Link to={`/projects/${project.id}`} className="btn btn-link text-accent text-decoration-none p-0 fw-bold d-flex align-items-center" style={{ fontSize: '0.9rem' }}>
                        View Details <i className="bi bi-arrow-right ms-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-5 bg-light-secondary">
        <div className="container">
          <div
            ref={testimonialsTitleReveal.ref}
            className={`text-center mb-5 ${testimonialsTitleReveal.isVisible ? 'animate-fade-up' : ''}`}
            style={{ opacity: testimonialsTitleReveal.isVisible ? 1 : 0 }}
          >
            <div className="section-subtitle">Client Feedback</div>
            <h2 className="section-title">What Our Clients Say</h2>
          </div>
          <div className="position-relative">
            <div className="testimonial-slider-advanced px-3 py-4" ref={sliderRef}>
              {displayTestimonials.map((test, idx) => (
                <div key={idx} className="testimonial-card-advanced bg-white rounded-4 p-4 shadow-sm d-flex flex-column hover-lift">
                  <div className="text-accent-gold fs-1 lh-1 mb-3"><i className="bi bi-quote"></i></div>
                  <p className="fst-italic text-dark mb-4 fs-5 fw-medium flex-grow-1">"{test.text}"</p>
                  <div className="d-flex align-items-center mt-auto border-top pt-3">
                    <div className="text-white rounded-circle d-flex align-items-center justify-content-center bg-accent" style={{ width: "50px", height: "50px", fontSize: "1.2rem", fontWeight: "bold", flexShrink: 0 }}>{test.initials}</div>
                    <div className="ms-3">
                      <h5 className="mb-0 fw-bold fs-6">{test.name}</h5>
                      <small className="text-muted text-uppercase letter-spacing-1" style={{ fontSize: "0.75rem" }}>{test.role}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-center gap-3 mt-4">
              <button onClick={() => scrollSlider('left')} className="btn btn-aesthetic rounded-circle d-flex align-items-center justify-content-center shadow-sm p-0" style={{width: '50px', height: '50px'}}><i className="bi bi-chevron-left"></i></button>
              <button onClick={() => scrollSlider('right')} className="btn btn-aesthetic rounded-circle d-flex align-items-center justify-content-center shadow-sm p-0" style={{width: '50px', height: '50px'}}><i className="bi bi-chevron-right"></i></button>
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
            <h2 className="section-title mb-4">Start Your Next Project</h2>
            <p className="lead text-muted mb-5 max-w-700 mx-auto">
              Inspired by our work? Contact us today to discuss how we can bring your vision to life.
            </p>
            <Link to="/contact" className="btn-aesthetic px-5 py-3 fs-5 mt-2">
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>
      {/* Lightbox Overlay */}
      {lightboxImg && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ backgroundColor: "rgba(0,0,0,0.9)", zIndex: 9999, cursor: "pointer" }}
          onClick={() => setLightboxImg(null)}
        >
          <button className="btn btn-link text-white position-absolute top-0 end-0 m-4 fs-1 text-decoration-none">&times;</button>
          <img src={lightboxImg} alt="Lightbox" className="img-fluid rounded" style={{ maxHeight: "90vh", maxWidth: "90vw", objectFit: "contain" }} />
        </div>
      )}
    </div>
  );
}

export default Projects;
