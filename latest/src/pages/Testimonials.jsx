import { useScrollReveal } from "../hooks/useScrollReveal";

function Testimonials() {
  const ctaReveal = useScrollReveal();
  
  return (
    <div className="page-wrapper">
      <section className="page-hero-section">
        <div className="text-center position-relative z-1">
          <div className="page-hero-subtitle animate-fade-up">Client Stories</div>
          <h1 className="page-hero-title animate-fade-up" style={{ animationDelay: "0.2s" }}>Testimonials</h1>
        </div>
      </section>

      <section className="py-5 bg-light-secondary">
        <div className="container">
          <div className="row g-4">
            {[1, 2, 3, 4, 5, 6].map((item) => {
              const cardReveal = useScrollReveal();
              return (
                <div key={item} className="col-lg-4 col-md-6">
                  <div 
                    ref={cardReveal.ref}
                    className={`glass-panel p-4 h-100 position-relative ${cardReveal.isVisible ? 'animate-fade-up' : ''}`} 
                    style={{ opacity: cardReveal.isVisible ? 1 : 0, animationDelay: `${item * 0.1}s` }}
                  >
                    <i className="bi bi-quote fs-1 text-accent position-absolute" style={{ top: '10px', right: '20px', opacity: 0.3 }}></i>
                    <div className="text-star-yellow mb-3">
                      <i className="bi bi-star-fill me-1"></i><i className="bi bi-star-fill me-1"></i><i className="bi bi-star-fill me-1"></i><i className="bi bi-star-fill me-1"></i><i className="bi bi-star-fill"></i>
                    </div>
                    <p className="text-muted fst-italic mb-4">"The team delivered outstanding results for our project. Their modern approach and attention to detail perfectly matched our corporate needs."</p>
                    <div className="d-flex align-items-center mt-auto">
                      <div className="bg-accent text-dark fw-bold rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '50px', height: '50px' }}>
                        C{item}
                      </div>
                      <div className="ms-3">
                        <h5 className="h6 fw-bold mb-0">Client {item}</h5>
                        <small className="text-muted">Corporate Partner</small>
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
            <h2 className="section-title mb-4">Leave a Review</h2>
            <p className="text-muted mb-5">We value your feedback and strive for excellence.</p>
            <a href="#" className="btn-aesthetic px-5 py-3 fs-5 mt-2">Write Review</a>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Testimonials;
