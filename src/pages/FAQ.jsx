import { useScrollReveal } from "../hooks/useScrollReveal";

function FAQ() {
  const ctaReveal = useScrollReveal();
  
  return (
    <div className="page-wrapper">
      <section className="page-hero-section">
        <div className="text-center position-relative z-1">
          <div className="page-hero-subtitle animate-fade-up">Help Center</div>
          <h1 className="page-hero-title animate-fade-up" style={{ animationDelay: "0.2s" }}>FAQ</h1>
        </div>
      </section>

      <section className="py-5 bg-light-secondary">
        <div className="container max-w-700" style={{ maxWidth: "800px" }}>
          <div className="accordion custom-accordion" id="faqAccordion">
            {[
              { q: "What services do you offer?", a: "We offer comprehensive general contracting, modern corporate remodeling, custom construction, and site management." },
              { q: "How do I request a quote?", a: "You can request a quote by filling out the form on our Contact page or calling our main office." },
              { q: "Do you handle commercial projects?", a: "Yes, we specialize in high-end commercial and corporate builds with a focus on modern aesthetics." },
              { q: "What is your typical project timeline?", a: "Timelines vary by project size, but we pride ourselves on efficient, transparent, and timely delivery." }
            ].map((faq, index) => (
              <div className="accordion-item bg-transparent border-bottom border-top-0 border-start-0 border-end-0 border-secondary mb-3 pb-2" key={index}>
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button className={`accordion-button ${index !== 0 ? 'collapsed' : ''} fs-5 fw-bold`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded={index === 0 ? "true" : "false"} aria-controls={`collapse${index}`}>
                    {faq.q}
                  </button>
                </h2>
                <div id={`collapse${index}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} aria-labelledby={`heading${index}`} data-bs-parent="#faqAccordion">
                  <div className="accordion-body text-muted">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="container">
          <div ref={ctaReveal.ref} className={`cta-inner-card text-center ${ctaReveal.isVisible ? 'animate-fade-up' : ''}`} style={{ opacity: ctaReveal.isVisible ? 1 : 0 }}>
            <h2 className="section-title mb-4">Still have questions?</h2>
            <a href="/contact" className="btn-aesthetic px-5 py-3 fs-5 mt-2">Contact Support</a>
          </div>
        </div>
      </section>
    </div>
  );
}
export default FAQ;
