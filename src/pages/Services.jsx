import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";

function Services() {
  const headerReveal = useScrollReveal();
  const ctaReveal = useScrollReveal();
  const processTitleReveal = useScrollReveal();
  const step1Reveal = useScrollReveal({ threshold: 0.2 });
  const step2Reveal = useScrollReveal({ threshold: 0.2 });
  const step3Reveal = useScrollReveal({ threshold: 0.2 });
  const step4Reveal = useScrollReveal({ threshold: 0.2 });

  const services = [
    { title: "General Construction", description: "From concept to completion, we handle all aspects of your building project with expertise and precision.", icon: "bi-building-gear" },
    { title: "Renovation & Remodeling", description: "Transform your existing space into something extraordinary with our expert renovation services.", icon: "bi-tools" },
    { title: "Project Management", description: "We oversee every detail of your project ensuring it is completed on time, within budget, and to the highest standards.", icon: "bi-clipboard2-check" },
    { title: "Interior Design", description: "Our design team creates functional and aesthetically pleasing interiors tailored to your needs.", icon: "bi-rulers" },
    { title: "Custom Homes", description: "Build the home of your dreams with our custom home construction services.", icon: "bi-house-heart" },
    { title: "Commercial Building", description: "We deliver top-quality commercial buildings that meet the specific needs of your business.", icon: "bi-buildings" }
  ];

  return (
    <div className="page-wrapper">
      <section className="page-hero-section">
        <div className="text-center position-relative z-1 px-3">
          <div className="page-hero-subtitle animate-fade-up">What We Do</div>
          <h1 className="page-hero-title animate-fade-up" style={{ animationDelay: "0.2s" }}>Our Services</h1>
          <p className="animate-fade-up text-muted mx-auto mt-4 max-w-700" style={{ animationDelay: "0.4s", fontSize: "1.15rem", lineHeight: "1.7" }}>
            We offer comprehensive construction services tailored to meet your unique needs and exceed expectations.
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">


      <div className="row g-4">
        {services.map((service, index) => {
          const cardReveal = useScrollReveal({ threshold: 0.2 });
          return (
            <div 
              key={index} 
              ref={cardReveal.ref}
              className={`col-md-6 col-lg-4 ${cardReveal.isVisible ? 'animate-fade-up' : ''}`} 
              style={{ opacity: cardReveal.isVisible ? 1 : 0, animationDelay: `${0.1 * (index % 3)}s` }}
            >
              <div className="glass-panel h-100 p-5 text-center hover-lift border-0 position-relative overflow-hidden">
                <div className="feature-icon-wrapper mb-4 bg-transparent border-0 mx-auto" style={{ fontSize: '3rem' }}>
                  <i className={`bi ${service.icon} text-accent`}></i>
                </div>
                <h3 className="h4 fw-bold mb-3">{service.title}</h3>
                <p className="text-muted mb-0" style={{ lineHeight: '1.7' }}>
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      </div>
      </section>


      {/* Our Process Section */}
      <section className="py-5 bg-light-secondary">
        <div className="container">
        <div 
          ref={processTitleReveal.ref}
          className={`text-center mb-5 ${processTitleReveal.isVisible ? 'animate-fade-up' : ''}`}
          style={{ opacity: processTitleReveal.isVisible ? 1 : 0 }}
        >
          <h2 className="section-title">Our Work Process</h2>
          <div className="section-subtitle">How We Do It</div>
        </div>
        
        <div className="row g-4 position-relative">
          <div className="col-md-6 col-xl-3 col-lg-4">
            <div 
              ref={step1Reveal.ref}
              className={`glass-panel p-4 text-center h-100 border-0 ${step1Reveal.isVisible ? 'animate-fade-up' : ''}`}
              style={{ opacity: step1Reveal.isVisible ? 1 : 0, animationDelay: "0.1s" }}
            >
              <div className="display-4 fw-bold text-accent mb-3 opacity-50">01</div>
              <h4 className="fw-bold mb-3">Consultation</h4>
              <p className="text-muted mb-0 fs-6">We meet to discuss your vision, requirements, and budget for the project.</p>
            </div>
          </div>
          <div className="col-md-6 col-xl-3 col-lg-4">
            <div 
              ref={step2Reveal.ref}
              className={`glass-panel p-4 text-center h-100 border-0 ${step2Reveal.isVisible ? 'animate-fade-up' : ''}`}
              style={{ opacity: step2Reveal.isVisible ? 1 : 0, animationDelay: "0.2s" }}
            >
              <div className="display-4 fw-bold text-accent mb-3 opacity-50">02</div>
              <h4 className="fw-bold mb-3">Planning</h4>
              <p className="text-muted mb-0 fs-6">Detailed architectural plans and project timelines are created and approved.</p>
            </div>
          </div>
          <div className="col-md-6 col-xl-3 col-lg-4">
            <div 
              ref={step3Reveal.ref}
              className={`glass-panel p-4 text-center h-100 border-0 ${step3Reveal.isVisible ? 'animate-fade-up' : ''}`}
              style={{ opacity: step3Reveal.isVisible ? 1 : 0, animationDelay: "0.3s" }}
            >
              <div className="display-4 fw-bold text-accent mb-3 opacity-50">03</div>
              <h4 className="fw-bold mb-3">Construction</h4>
              <p className="text-muted mb-0 fs-6">Our expert team executes the plan with precision and highest quality materials.</p>
            </div>
          </div>
          <div className="col-md-6 col-xl-3 col-lg-4">
            <div 
              ref={step4Reveal.ref}
              className={`glass-panel p-4 text-center h-100 border-0 ${step4Reveal.isVisible ? 'animate-fade-up' : ''}`}
              style={{ opacity: step4Reveal.isVisible ? 1 : 0, animationDelay: "0.4s" }}
            >
              <div className="display-4 fw-bold text-accent mb-3 opacity-50">04</div>
              <h4 className="fw-bold mb-3">Handover</h4>
              <p className="text-muted mb-0 fs-6">Final inspection ensures everything is perfect before handing over the keys.</p>
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

export default Services;
