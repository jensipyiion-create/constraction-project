import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import CountUp from "../components/CountUp";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Home.css";

function Home() {
  const heroReveal = useScrollReveal();
  const heroCardReveal = useScrollReveal({ threshold: 0.1 });
  const projectsTitleReveal = useScrollReveal();
  const project1Reveal = useScrollReveal({ threshold: 0.2 });
  const project2Reveal = useScrollReveal({ threshold: 0.2 });
  const project3Reveal = useScrollReveal({ threshold: 0.2 });
  const fleetImageReveal = useScrollReveal({ threshold: 0.3 });
  const fleetTextReveal = useScrollReveal({ threshold: 0.3 });
  const statsReveal = useScrollReveal({ threshold: 0.2 });
  const servicesTitleReveal = useScrollReveal();
  const service1Reveal = useScrollReveal({ threshold: 0.1 });
  const service2Reveal = useScrollReveal({ threshold: 0.1 });
  const service3Reveal = useScrollReveal({ threshold: 0.1 });
  const service4Reveal = useScrollReveal({ threshold: 0.1 });
  const testimonialsTitleReveal = useScrollReveal();
  const ctaReveal = useScrollReveal({ threshold: 0.3 });

  const testimonialsList = [
    { text: "BuildPro Construction completely transformed our commercial space. Their attention to detail and project management kept everything on time and under budget.", name: "Sarah Jenkins", role: "Project Manager, Skyline Tower" },
    { text: "As a healthcare provider, we had strict regulations. BuildPro exceeded all expectations and delivered a state-of-the-art facility flawlessly.", name: "David Chen", role: "Director, Oakwood Industrial" },
    { text: "The safety and quality standards they maintain on site are unparalleled. A truly professional construction partner.", name: "Elena Rodriguez", role: "Developer, Maplewood Estates" },
    { text: "Their team handled our residential project with immense care. The craftsmanship and dedication to quality are evident in every corner of our new home.", name: "Michael Chang", role: "Homeowner" },
    { text: "We've partnered with BuildPro for multiple retail builds. They consistently deliver on schedule without compromising on the aesthetic or structural integrity.", name: "Jessica Smith", role: "Retail Expansion Lead" },
    { text: "From initial planning to the final walkthrough, their communication was transparent. It’s rare to find a contractor you can trust completely.", name: "Robert Davis", role: "CEO, Horizon Logistics" }
  ];
  const displayTestimonials = [...testimonialsList, ...testimonialsList];

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
           // Instantly snap to start (seamless)
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
      }, 3500); // 3.5 seconds interval
    };

    startAutoScroll();

    // Pause on hover or touch
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

  return (
    <div className="home-page-advanced">

      {/* 1. Immersive Full-Screen Hero */}
      <section className="hero-section-advanced">
        <div className="hero-bg-overlay"></div>
        <div className="container position-relative z-2 h-100 d-flex align-items-center">
          <div className="row w-100">
            <div className="col-lg-8" ref={heroReveal.ref}>
              <div className={`hero-content-anim ${heroReveal.isVisible ? 'animate-fade-up' : ''}`}>
                <div className="hero-subtitle mb-4">
                  <span className="hero-line"></span> EST. 2003
                </div>
                <h1 className="hero-title-advanced text-white mb-4">
                  Building the future,<br />
                  <span className="text-accent-gold">restoring the past.</span>
                </h1>
                <p className="hero-desc-advanced text-white mb-5 max-w-700">
                  Premier general contractor delivering high-quality structures. We don't just build buildings; we build legacies.
                </p>
                <div className="d-flex gap-4">
                  <Link to="/projects" className="btn-aesthetic text-white">
                    EXPLORE PROJECTS <i className="bi bi-arrow-right ms-2 text-white"></i>
                  </Link>
                  <Link to="/contact" className="btn-aesthetic-white">
                    CONTACT US
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Refined Architectural Projects Layout */}
      <section className="py-6">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end mb-5 pb-3 border-bottom border-accent-light" ref={projectsTitleReveal.ref}>
            <div className={`${projectsTitleReveal.isVisible ? 'animate-fade-up' : ''}`}>
              <div className="section-subtitle mb-2">Featured Projects</div>
              <h2 className="display-4 fw-bold text-dark m-0">Our Work</h2>
            </div>
            <Link to="/projects" className={`link-arrow mt-4 mt-md-0 text-muted fw-bold ${projectsTitleReveal.isVisible ? 'animate-fade-up' : ''}`} style={{ animationDelay: '0.2s' }}>
              VIEW ALL PROJECTS <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          <div className="row g-5 projects-grid-refined">
            <div className="col-md-6 col-lg-4" ref={project1Reveal.ref}>
              <Link to="/projects/1" className={`project-card-refined ${project1Reveal.isVisible ? 'animate-fade-up' : ''}`}>
                <div className="image-wrapper overflow-hidden mb-4">
                  <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Commercial Tower Build" />
                </div>
                <div className="d-flex justify-content-between align-items-start pb-3 border-bottom border-accent-light">
                  <div>
                    <h3 className="h6 fw-bold m-0 text-dark text-uppercase letter-spacing-1">Skyline Tower</h3>
                    <p className="text-muted small m-0 mt-2">New York, NY</p>
                  </div>
                  <span className="text-muted small text-uppercase fw-semibold letter-spacing-1">Commercial</span>
                </div>
              </Link>
            </div>

            <div className="col-md-6 col-lg-4" ref={project2Reveal.ref}>
              <Link to="/projects/2" className={`project-card-refined ${project2Reveal.isVisible ? 'animate-fade-up' : ''}`} style={{ animationDelay: '0.2s' }}>
                <div className="image-wrapper overflow-hidden mb-4">
                  <img src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Industrial Facility" />
                </div>
                <div className="d-flex justify-content-between align-items-start pb-3 border-bottom border-accent-light">
                  <div>
                    <h3 className="h6 fw-bold m-0 text-dark text-uppercase letter-spacing-1">Oakwood Industrial</h3>
                    <p className="text-muted small m-0 mt-2">Chicago, IL</p>
                  </div>
                  <span className="text-muted small text-uppercase fw-semibold letter-spacing-1">Industrial</span>
                </div>
              </Link>
            </div>

            <div className="col-md-6 col-lg-4" ref={project3Reveal.ref}>
              <Link to="/projects/3" className={`project-card-refined ${project3Reveal.isVisible ? 'animate-fade-up' : ''}`} style={{ animationDelay: '0.4s' }}>
                <div className="image-wrapper overflow-hidden mb-4">
                  <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Residential Complex" />
                </div>
                <div className="d-flex justify-content-between align-items-start pb-3 border-bottom border-accent-light">
                  <div>
                    <h3 className="h6 fw-bold m-0 text-dark text-uppercase letter-spacing-1">Maplewood Estates</h3>
                    <p className="text-muted small m-0 mt-2">Denver, CO</p>
                  </div>
                  <span className="text-muted small text-uppercase fw-semibold letter-spacing-1">Residential</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Overlapping Fleet & Team Section */}
      <section className="fleet-section-advanced py-6 bg-light-secondary overflow-hidden">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" ref={fleetImageReveal.ref}>
              <div className={`layered-image-wrapper ${fleetImageReveal.isVisible ? 'animate-fade-up' : ''}`}>
                <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Construction Fleet" className="main-img rounded-4 shadow-lg" />
                <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Workers" className="floating-img rounded-4 shadow-lg" />
                <div className="decorative-dots"></div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1 py-5" ref={fleetTextReveal.ref}>
              <div className={`${fleetTextReveal.isVisible ? 'animate-fade-up' : ''}`}>
                <div className="section-subtitle mb-3 d-inline-block px-3 py-1 bg-white rounded-pill shadow-sm">OUR FLEET & TEAM</div>
                <h2 className="display-5 fw-bold text-dark mb-4">We build with safety.<br />We deliver with quality.</h2>
                <p className="text-muted mb-4 fs-5" style={{ lineHeight: "1.8" }}>
                  Every project begins with a solid foundation. Our process is collaborative, safety-focused, and guided by expert engineering, robust materials, and enduring construction techniques.
                </p>
                <div className="d-flex align-items-center gap-4 mb-5">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-shield-check text-accent fs-3"></i>
                    <span className="fw-bold">100% Safety Record</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-award text-accent fs-3"></i>
                    <span className="fw-bold">ISO Certified</span>
                  </div>
                </div>
                <Link to="/about" className="btn-aesthetic">
                  LEARN MORE ABOUT US <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Dynamic Dark Stats Section */}
      <section className="stats-section-dark py-6 position-relative">
        <div className="stats-bg-overlay"></div>
        <div className="container position-relative z-2" ref={statsReveal.ref}>
          <div className="row text-center g-4">
            <div className="col-md-3 col-6 stat-block">
              <div className={`stat-number-large text-accent-gold ${statsReveal.isVisible ? 'animate-fade-up' : ''}`}>
                {statsReveal.isVisible ? <CountUp end={150} suffix="+" /> : "0+"}
              </div>
              <div className={`stat-label-modern text-white ${statsReveal.isVisible ? 'animate-fade-up' : ''}`} style={{ animationDelay: '0.1s' }}>PROJECTS DELIVERED</div>
            </div>
            <div className="col-md-3 col-6 stat-block">
              <div className={`stat-number-large text-accent-gold ${statsReveal.isVisible ? 'animate-fade-up' : ''}`} style={{ animationDelay: '0.2s' }}>
                {statsReveal.isVisible ? <CountUp end={20} suffix="+" /> : "0+"}
              </div>
              <div className={`stat-label-modern text-white ${statsReveal.isVisible ? 'animate-fade-up' : ''}`} style={{ animationDelay: '0.3s' }}>YEARS OF EXPERIENCE</div>
            </div>
            <div className="col-md-3 col-6 stat-block">
              <div className={`stat-number-large text-accent-gold ${statsReveal.isVisible ? 'animate-fade-up' : ''}`} style={{ animationDelay: '0.4s' }}>
                {statsReveal.isVisible ? <CountUp end={35} /> : "0"}
              </div>
              <div className={`stat-label-modern text-white ${statsReveal.isVisible ? 'animate-fade-up' : ''}`} style={{ animationDelay: '0.5s' }}>AWARDS WON</div>
            </div>
            <div className="col-md-3 col-6 stat-block">
              <div className={`stat-number-large text-accent-gold ${statsReveal.isVisible ? 'animate-fade-up' : ''}`} style={{ animationDelay: '0.6s' }}>
                {statsReveal.isVisible ? <CountUp end={500} suffix="+" /> : "0+"}
              </div>
              <div className={`stat-label-modern text-white ${statsReveal.isVisible ? 'animate-fade-up' : ''}`} style={{ animationDelay: '0.7s' }}>EXPERT WORKERS</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive Services Cards */}
      <section className="py-6">
        <div className="container">
          <div className="mb-5 text-center" ref={servicesTitleReveal.ref}>
            <div className={`section-subtitle mb-2 ${servicesTitleReveal.isVisible ? 'animate-fade-up' : ''}`}>Our Expertise</div>
            <h2 className={`display-4 fw-bold text-dark m-0 ${servicesTitleReveal.isVisible ? 'animate-fade-up' : ''}`} style={{ animationDelay: '0.2s' }}>Premium Services</h2>
          </div>

          <div className="row g-4 justify-content-center">
            {[
              { title: "GENERAL CONTRACTING", icon: "bi-building", desc: "Comprehensive construction management from groundbreaking to final handover.", delay: "0s", ref: service1Reveal },
              { title: "SITE PREPARATION", icon: "bi-cone-striped", desc: "Expert excavation, grading, and site development for a perfect foundation.", delay: "0.1s", ref: service2Reveal },
              { title: "REMODELING", icon: "bi-hammer", desc: "Commercial and residential renovation services tailored to your exact specifications.", delay: "0.2s", ref: service3Reveal },
              { title: "HEAVY MACHINERY", icon: "bi-truck", desc: "Providing state-of-the-art equipment and logistics for large-scale industrial projects.", delay: "0.3s", ref: service4Reveal }
            ].map((srv, idx) => (
              <div className="col-xl-3 col-md-6" key={idx} ref={srv.ref.ref}>
                <div className={`service-card-interactive p-4 rounded-4 bg-white shadow-sm h-100 d-flex flex-column ${srv.ref.isVisible ? 'animate-fade-up' : ''}`} style={{ animationDelay: srv.delay }}>
                  <div className="service-icon-wrapper mb-3 rounded-circle d-flex align-items-center justify-content-center">
                    <i className={`bi ${srv.icon} fs-2 text-accent`}></i>
                  </div>
                  <h3 className="h5 fw-bold mb-3">{srv.title}</h3>
                  <p className="text-muted mb-4 flex-grow-1">{srv.desc}</p>
                  <Link to="/services" className="link-arrow mt-auto fw-bold text-accent">LEARN MORE <i className="bi bi-arrow-right"></i></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Refined Testimonial Section */}
      <section className="py-6 bg-light-secondary position-relative overflow-hidden">
        <div className="container position-relative z-1">
          <div className="mb-5 text-center" ref={testimonialsTitleReveal.ref}>
            <div className={`section-subtitle mb-2 bg-white d-inline-block px-3 py-1 rounded-pill shadow-sm ${testimonialsTitleReveal.isVisible ? 'animate-fade-up' : ''}`}>CLIENT REVIEWS</div>
            <h2 className={`display-4 fw-bold text-dark m-0 ${testimonialsTitleReveal.isVisible ? 'animate-fade-up' : ''}`} style={{ animationDelay: '0.2s' }}>Trusted by Industry Leaders</h2>
          </div>
          <div className="position-relative">
            <div className="testimonial-slider-advanced px-3 py-4" ref={sliderRef}>
            {displayTestimonials.map((test, idx) => (
              <div className="testimonial-card-advanced bg-white rounded-4 p-4 shadow-sm" key={idx}>
                <div className="text-accent-gold fs-1 lh-1 mb-3"><i className="bi bi-quote"></i></div>
                <p className="testimonial-text-large fst-italic text-dark mb-3 fs-5 fw-medium">"{test.text}"</p>
                <div className="d-flex align-items-center mt-auto border-top pt-3">
                  <div className="avatar-placeholder rounded-circle bg-accent d-flex align-items-center justify-content-center fw-bold me-3 flex-shrink-0" style={{ width: '50px', height: '50px', color: '#ffffff' }}>{test.name.charAt(0)}</div>
                  <div>
                    <span className="d-block fw-bold text-dark fs-6">{test.name}</span>
                    <span className="d-block text-muted small text-uppercase letter-spacing-1 mt-1">{test.role}</span>
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

      {/* 7. CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div ref={ctaReveal.ref} className={`cta-inner-card text-center ${ctaReveal.isVisible ? 'animate-fade-up' : ''}`} style={{ opacity: ctaReveal.isVisible ? 1 : 0 }}>
            <h2 className="section-title mb-4">Ready to start building?</h2>
            <p className="text-muted mb-5 max-w-700 mx-auto">Let's discuss how we can bring your next construction project to life with our expert team and robust resources.</p>
            <Link to="/contact" className="btn-aesthetic px-5 py-3 fs-5 mt-2">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
