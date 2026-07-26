import { useState, useMemo } from "react";
import ProductCard from "../components/ProductCard";
import { Link, useSearchParams } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Products.css";

const allProducts = [
  { id: 1, image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=400&q=80", title: "Heavy Duty Rebar", price: "129.00", category: "Materials" },
  { id: 2, image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=400&q=80", title: "Safety Helmet Pro", price: "89.00", category: "Safety" },
  { id: 3, image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", title: "Industrial Scaffolding", price: "449.00", category: "Equipment" },
  { id: 4, image: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&w=400&q=80", title: "Concrete Mixer", price: "110.00", category: "Machinery" },
  { id: 5, image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80", title: "Structural Steel", price: "259.00", category: "Materials" },
  { id: 6, image: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=400&q=80", title: "Industrial Crane Lease", price: "199.00", category: "Machinery" },
  { id: 7, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80", title: "Commercial Foundation", price: "145.00", category: "Services" },
  { id: 8, image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", title: "High-Vis Vest", price: "95.00", category: "Safety" },
];

function Products() {
  const ctaReveal = useScrollReveal();
  
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const categories = ["All", ...new Set(allProducts.map(p => p.category))];

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...allProducts];
    
    if (query) {
      const lowerQuery = query.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(lowerQuery) || 
        p.category.toLowerCase().includes(lowerQuery)
      );
    }
    
    if (activeCategory !== "All") {
      result = result.filter(p => p.category === activeCategory);
    }
    
    if (sortBy === "price-low") {
      result.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortBy === "price-high") {
      result.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else if (sortBy === "newest") {
      result.sort((a, b) => b.id - a.id);
    }
    
    return result;
  }, [activeCategory, sortBy, query]);


  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="products-page page-wrapper">
      <section className="page-hero-section">
        <div className="text-center position-relative z-1 px-3">
          <div className="page-hero-subtitle animate-fade-up">Our Materials</div>
          <h1 className="page-hero-title animate-fade-up" style={{ animationDelay: "0.2s" }}>Our Collection</h1>
          <p className="fs-5 mt-4 max-w-700 mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Browse our premium selection of construction materials, designed for durability and excellence.
          </p>
        </div>
      </section>

      <section className="py-5 bg-light-secondary">
        <div className="container">
          {/* Filters (Placeholder UI) */}
          <div className="d-flex justify-content-between align-items-center mb-5 pb-3 border-bottom flex-wrap gap-3">
            <div className="d-flex gap-2 flex-wrap">
              {categories.map(category => (
                <button 
                  key={category}
                  className={`filter-pill ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div>
              <select 
                className="form-select border-1 border-accent-light bg-light-secondary rounded-3" 
                aria-label="Sort By"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Sort By: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest Arrivals</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="row g-4">
            {filteredAndSortedProducts.length > 0 ? (
              filteredAndSortedProducts.map(product => (
                <div className="col-xl-3 col-lg-4 col-md-6 col-12" key={product.id}>
                  <ProductCard {...product} />
                </div>
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <p className="text-muted fs-5">No products found for this category.</p>
              </div>
            )}
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

export default Products;
