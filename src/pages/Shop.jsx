import React, { useState } from "react";
import "../styles/Shop.css";
import products from "../data/products";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const categories = [
    { title: "Costumes", sub: ["pants", "Jumpsuits", "Shorts", "Tops", "shirt", "T-shirts"] },
    { title: "Accessories", sub: ["watch", "Belts", "shoes"] },
    { title: "Shots", sub: [] },
    { title: "Others", sub: ["Bold", "Monochrome", "Neutrals"] },
];

export default function Shop() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [openCategories, setOpenCategories] = useState([]);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleCategory = (title) => {
        setOpenCategories((prev) =>
            prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
        );
    };

    const filteredProducts = selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products;

    const handleCategoryClick = (category) => {
        setSelectedCategory(selectedCategory === category ? null : category);
        if (window.innerWidth <= 768) setSidebarOpen(false); // auto close on mobile
    };

    return (
        <>
            <div className="shop-page">
                {/* Mobile Sidebar Toggle Button */}


                {/* Sidebar */}
                <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
                    <div className="filters-header">
                        <h4>FILTERS</h4>
                        <button className="reset-btn" onClick={() => setSelectedCategory(null)}>
                            RESET
                        </button>
                    </div>

                    {categories.map((cat) => (
                        <div key={cat.title} className="filter-group">
                            <div
                                className="filter-header"
                                onClick={() => toggleCategory(cat.title)}
                            >
                                <h5 className="category-title">{cat.title}</h5>
                                <span className={`arrow ${openCategories.includes(cat.title) ? "open" : ""}`}>
                                    ▼
                                </span>
                            </div>
                            {cat.sub.length > 0 && openCategories.includes(cat.title) && (
                                <ul className="subcategory-list">
                                    {cat.sub.map((item) => (
                                        <li
                                            key={item}
                                            onClick={() => handleCategoryClick(item)}
                                            className={selectedCategory === item ? "active" : ""}
                                        >
                                            ▶ {item}
                                            <hr />
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}

                    {/* Close button for mobile */}
                    <button
                        className="close-sidebar"
                        onClick={() => setSidebarOpen(false)}
                    >
                        ✖ Close
                    </button>
                </aside>

                {/* Overlay for mobile */}
                {sidebarOpen && <div className="overlay" onClick={() => setSidebarOpen(false)}></div>}

                {/* Product List */}
                <main className="product-list">

                    <button
                        className="sidebar-toggle"
                        onClick={() => setSidebarOpen(true)}
                    >
                        ☰ Filters
                    </button>
                    <div className="sort-bar">
                        <span>Sort by</span>
                        <select>
                            <option>Price</option>
                            <option>Name</option>
                        </select>
                    </div>

                    <div className="product-grid">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        ) : (
                            <p>No products found for this category.</p>
                        )}
                    </div>
                </main>
            </div>

            <Footer />
        </>
    );
}
