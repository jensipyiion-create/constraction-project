import { useParams, Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";

function BlogDetails() {
  const { id } = useParams();
  const contentReveal = useScrollReveal();

  // Mock data for the blog posts
  const blogPosts = {
    1: {
      image: "/orange-assets/b1.avif",
      date: "CORPORATE • OCT 12, 2023",
      title: "Modern Trends in Corporate Construction",
      desc: "Discover how modern corporate buildings are utilizing light, space, and smart materials to create better work environments.",
      content: "Corporate construction is rapidly evolving. Today, businesses require spaces that are not only structurally sound but also foster creativity, collaboration, and employee well-being. We are seeing a huge shift towards open-plan designs, integration of natural light through expansive glass facades, and the use of smart materials that regulate temperature and acoustics.\n\nSustainability is also a key driver. From green roofs to solar integration, modern corporate buildings are designed to minimize their carbon footprint while maximizing energy efficiency. At BuildPro, we stay ahead of these trends, ensuring our clients receive state-of-the-art facilities."
    },
    2: {
      image: "/orange-assets/b2.avif",
      date: "SAFETY • NOV 05, 2023",
      title: "The Future of Safety on Site",
      desc: "A deep dive into new regulations and safety equipment that are driving our 100% incident-free safety record.",
      content: "Safety is the cornerstone of every successful construction project. The future of site safety relies heavily on technological advancements. Wearable technology, such as smart helmets and safety vests equipped with sensors, can now monitor a worker's vitals and detect potential hazards in real-time.\n\nFurthermore, strict adherence to new OSHA regulations and continuous training programs ensure that every team member is equipped with the knowledge to work safely. Our commitment to a 100% incident-free record is driven by these proactive measures and a culture that prioritizes human life above all else."
    },
    3: {
      image: "/orange-assets/b3.avif",
      date: "SUSTAINABILITY • JAN 20, 2024",
      title: "Building Green: Sustainable Materials",
      desc: "Learn about the eco-friendly materials and energy-efficient building methods we use in our latest residential developments.",
      content: "The construction industry is making significant strides towards sustainability. Building green is no longer a luxury; it's a necessity. We are increasingly utilizing materials such as recycled steel, bamboo, and reclaimed wood. These materials not only reduce environmental impact but also offer unique aesthetic appeal.\n\nIn addition to materials, energy-efficient building methods like superior insulation, passive solar design, and high-efficiency HVAC systems are becoming standard. These practices reduce long-term operational costs for homeowners while contributing to a healthier planet."
    }
  };

  const post = blogPosts[id] || blogPosts[1]; // fallback to 1 if not found

  return (
    <div className="page-wrapper">
      <section className="page-hero-section" style={{ backgroundImage: `linear-gradient(135deg, rgba(5,5,5,0.9), rgba(15,15,15,0.8)), url(${post.image})` }}>
        <div className="text-center position-relative z-1">
          <div className="page-hero-subtitle animate-fade-up text-white">{post.date.split('•')[0]}</div>
          <h1 className="page-hero-title animate-fade-up text-white" style={{ animationDelay: "0.2s" }}>{post.title}</h1>
        </div>
      </section>

      <section className="py-5">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8" ref={contentReveal.ref} style={{ opacity: contentReveal.isVisible ? 1 : 0 }}>
              <div className={`${contentReveal.isVisible ? 'animate-fade-up' : ''}`}>
                <img src={post.image} alt={post.title} className="img-fluid rounded-4 mb-5 shadow-lg w-100" />
                
                <h3 className="fw-bold mb-4 text-dark">Article</h3>
                {post.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-muted fs-5 mb-4" style={{ lineHeight: "1.8" }}>{paragraph}</p>
                ))}
                
                <div className="mt-5 pt-4 border-top">
                  <Link to="/blog" className="btn-aesthetic-outline"><i className="bi bi-arrow-left me-2"></i> Back to Blog</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogDetails;
