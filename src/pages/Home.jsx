import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "../styles/Home.css";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer.jsx" 

function Home() {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

    // Set itemsPerPage based on screen width
    function getItemsPerPage() {
        const width = window.innerWidth;
        if (width <= 600) return 5;           // Mobile
        if (width <= 1024) return 9;          // Tablet
        return 15;                            // Desktop
    }

    useEffect(() => {
        function handleResize() {
            setItemsPerPage(getItemsPerPage());
            setCurrentPage(1); // Optional: reset page on resize
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);

    const hasNext = endIndex < products.length;
    const hasPrevious = currentPage > 1;

    function handleNextPage() {
        if (hasNext) {
            setCurrentPage((prev) => prev + 1);
        }
    }

    function handlePreviousPage() {
        if (hasPrevious) {
            setCurrentPage((prev) => prev - 1);
        }
    }

    return (
        <>
            <div className="search-div">
                <input type="text" className="SearchFeild" placeholder="Search" />
                <div className="navbar__search">
                    <FaSearch size={20} />
                </div>
            </div>

            <div className="home-container">
                <h2 className="home-title">Our Collections</h2>
                <div className="product-grid">
                    {currentProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="pagination">
                    {hasPrevious && (
                        <button onClick={handlePreviousPage}>&lt;</button>
                    )}
                    {hasNext && (
                        <button onClick={handleNextPage}>&gt;</button>
                    )}
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Home;
