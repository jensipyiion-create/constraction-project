import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Contact.css";

function Contact() {
  const headerReveal = useScrollReveal();
  const infoReveal = useScrollReveal();
  const formReveal = useScrollReveal();
  const faqTitleReveal = useScrollReveal();
  const faqListReveal = useScrollReveal();

  const faqs = [
    { question: "What areas do you serve?", answer: "We primarily serve the greater metropolitan area, but are open to discussing projects in surrounding regions." },
    { question: "Do you offer free estimates?", answer: "Yes, we provide free, no-obligation initial consultations and estimates for all potential projects." },
    { question: "Are you licensed and insured?", answer: "Absolutely. We hold all necessary state and local licenses, and carry comprehensive liability and worker's compensation insurance." },
    { question: "How long does a typical renovation take?", answer: "Project timelines vary greatly depending on scope. A kitchen remodel might take 4-8 weeks, while a custom home build can take 6-12 months. We'll provide a detailed timeline during the planning phase." }
  ];

  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Valid email is required.";
    if (!formData.subject) newErrors.subject = "Subject is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    setSubmitStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <div className="page-wrapper">
      <section className="page-hero-section">
        <div className="text-center position-relative z-1 px-3">
          <div className="page-hero-subtitle animate-fade-up">Get In Touch</div>
          <h1 className="page-hero-title animate-fade-up" style={{ animationDelay: "0.2s" }}>Contact Us</h1>
          <p className="fs-5 mt-4 text-dark max-w-700 mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Have a project in mind? We'd love to hear from you. Reach out to discuss your construction needs.
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container mt-4">


      <div className="row g-5">
        <div 
          ref={infoReveal.ref}
          className={`col-lg-5 ${infoReveal.isVisible ? 'animate-fade-up' : ''}`} 
          style={{ opacity: infoReveal.isVisible ? 1 : 0, animationDelay: "0.2s" }}
        >
          <div className="glass-panel p-4 p-md-5 rounded-4 h-100 position-relative overflow-hidden">
            <h3 className="h3 fw-bold mb-5 position-relative z-1">Contact Information</h3>
            
            <div className="d-flex mb-3 position-relative z-1 align-items-start contact-info-card">
              <div className="contact-icon me-4"><i className="bi bi-geo-alt-fill text-accent fs-2"></i></div>
              <div>
                <h4 className="h5 fw-bold mb-2">Our Office</h4>
                <p className="text-muted mb-0 fs-6">123 Construction Ave<br />Building City, ST 12345</p>
              </div>
            </div>

            <div className="d-flex mb-3 position-relative z-1 align-items-start contact-info-card">
              <div className="contact-icon me-4"><i className="bi bi-telephone-fill text-accent fs-2"></i></div>
              <div>
                <h4 className="h5 fw-bold mb-2">Call Us</h4>
                <p className="text-muted mb-0 fs-6">+1 (555) 123-4567<br />Mon-Fri, 8:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="d-flex position-relative z-1 align-items-start contact-info-card">
              <div className="contact-icon me-4"><i className="bi bi-envelope-fill text-accent fs-2"></i></div>
              <div>
                <h4 className="h5 fw-bold mb-2">Email Us</h4>
                <p className="text-muted mb-0 fs-6">info@buildpro.com<br />quotes@buildpro.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div 
          ref={formReveal.ref}
          className={`col-lg-7 ${formReveal.isVisible ? 'animate-fade-up' : ''}`} 
          style={{ opacity: formReveal.isVisible ? 1 : 0, animationDelay: "0.4s" }}
        >
          <div className="glass-panel p-4 p-md-5 rounded-4 shadow border-0 h-100">
            <h3 className="h3 fw-bold mb-4">Send Us a Message</h3>
            
            {submitStatus === "success" && (
              <div className="alert alert-success d-flex align-items-center" role="alert">
                <i className="bi bi-check-circle-fill me-2"></i>
                <div>Your message has been sent successfully!</div>
              </div>
            )}
            
            <form className="contact-form mt-4" onSubmit={handleSubmit}>
              <div className="row g-4">
                <div className="col-md-6">
                  <label className="form-label text-muted fw-semibold">Your Name <span className="text-danger">*</span></label>
                  <input type="text" className={`form-control form-control-lg custom-input ${errors.name ? 'is-invalid' : ''}`} placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                <div className="col-md-6">
                  <label className="form-label text-muted fw-semibold">Your Email <span className="text-danger">*</span></label>
                  <input type="email" className={`form-control form-control-lg custom-input ${errors.email ? 'is-invalid' : ''}`} placeholder="john@example.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="col-12">
                  <label className="form-label text-muted fw-semibold">Subject <span className="text-danger">*</span></label>
                  <input type="text" className={`form-control form-control-lg custom-input ${errors.subject ? 'is-invalid' : ''}`} placeholder="Project Inquiry" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} />
                  {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                </div>
                <div className="col-12">
                  <label className="form-label text-muted fw-semibold">Message <span className="text-danger">*</span></label>
                  <textarea className={`form-control form-control-lg custom-input ${errors.message ? 'is-invalid' : ''}`} rows="5" placeholder="Tell us about your project..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
                  {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                </div>
                <div className="col-12 mt-5">
                  <button type="submit" className="btn-aesthetic w-100 fs-5 py-3" disabled={submitStatus === "submitting"}>
                    {submitStatus === "submitting" ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      

      <div className="row mt-5">
        <div className="col-12 animate-fade-up">
          <div className="glass-panel p-2 rounded-4 border-0">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528001712!2d-74.14448729221144!3d40.69763123330612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1714000000000!5m2!1sen!2sus" width="100%" height="450" style={{ border: 0, borderRadius: '12px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Map"></iframe>
          </div>
        </div>
      </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-light-secondary">
        <div className="container">
        <div 
          ref={faqTitleReveal.ref}
          className={`text-center mb-5 ${faqTitleReveal.isVisible ? 'animate-fade-up' : ''}`}
          style={{ opacity: faqTitleReveal.isVisible ? 1 : 0 }}
        >
          <div className="section-subtitle">FAQ</div>
          <h2 className="section-title">Common Questions</h2>
        </div>
        <div 
          ref={faqListReveal.ref}
          className={`row justify-content-center ${faqListReveal.isVisible ? 'animate-fade-up' : ''}`}
          style={{ opacity: faqListReveal.isVisible ? 1 : 0, animationDelay: "0.2s" }}
        >
          <div className="col-lg-8">
            <div className="accordion custom-accordion" id="faqAccordion">
              {faqs.map((faq, index) => (
                <div className="accordion-item glass-panel mb-3 border-0 overflow-hidden rounded-3" key={index}>
                  <h2 className="accordion-header" id={`heading${index}`}>
                    <button 
                      className={`accordion-button ${index !== 0 ? 'collapsed' : ''} bg-transparent fw-bold py-4`} 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target={`#collapse${index}`} 
                      aria-expanded={index === 0 ? "true" : "false"} 
                      aria-controls={`collapse${index}`}
                      style={{ boxShadow: 'none' }}
                    >
                      <i className="bi bi-question-circle text-accent me-3 fs-5"></i>
                      {faq.question}
                    </button>
                  </h2>
                  <div 
                    id={`collapse${index}`} 
                    className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} 
                    aria-labelledby={`heading${index}`} 
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body text-muted pt-3 pb-4 px-4 ms-4 border-top border-secondary" style={{ borderColor: 'rgba(0,0,0,0.1) !important' }}>
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>

    </div>
  );
}

export default Contact;
