import { useScrollReveal } from "../hooks/useScrollReveal";
import { Link } from "react-router-dom";

function Blog() {
  const ctaReveal = useScrollReveal();
  
  const blogPosts = [
    {
      id: 1,
      image: "/orange-assets/b1.avif",
      date: "CORPORATE • OCT 12, 2023",
      title: "Modern Trends in Corporate Construction",
      desc: "Discover how modern corporate buildings are utilizing light, space, and smart materials to create better work environments."
    },
    {
      id: 2,
      image: "/orange-assets/b2.avif",
      date: "SAFETY • NOV 05, 2023",
      title: "The Future of Safety on Site",
      desc: "A deep dive into new regulations and safety equipment that are driving our 100% incident-free safety record."
    },
    {
      id: 3,
      image: "/orange-assets/b3.avif",
      date: "SUSTAINABILITY • JAN 20, 2024",
      title: "Building Green: Sustainable Materials",
      desc: "Learn about the eco-friendly materials and energy-efficient building methods we use in our latest residential developments."
    }
  ];

  return (
    <div className="page-wrapper">
      <section className="page-hero-section">
        <div className="text-center position-relative z-1">
          <div className="page-hero-subtitle animate-fade-up">Company News</div>
          <h1 className="page-hero-title animate-fade-up" style={{ animationDelay: "0.2s" }}>Our Blog</h1>
        </div>
      </section>

      <section className="py-5 bg-light-secondary">
        <div className="container">
          <div className="row g-4">
            {blogPosts.map((post, index) => {
              const cardReveal = useScrollReveal();
              return (
                <div key={post.id} className="col-xl-4 col-lg-6 col-md-6">
                  <div 
                    ref={cardReveal.ref}
                    className={`card border-0 hover-lift bg-light-secondary h-100 ${cardReveal.isVisible ? 'animate-fade-up' : ''}`}
                    style={{ opacity: cardReveal.isVisible ? 1 : 0, animationDelay: `${index * 0.1}s` }}
                  >
                    <img src={post.image} className="card-img-top" alt={post.title} style={{ height: "250px", objectFit: "cover" }} />
                    <div className="card-body p-4">
                      <div className="text-accent small fw-bold mb-2">{post.date}</div>
                      <h4 className="fw-bold mb-3">{post.title}</h4>
                      <p className="text-muted mb-4">{post.desc}</p>
                      <Link to={`/blog/${post.id}`} className="text-dark fw-bold border-bottom border-dark pb-1">READ MORE <i className="bi bi-arrow-right ms-1"></i></Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      

    </div>
  );
}
export default Blog;
