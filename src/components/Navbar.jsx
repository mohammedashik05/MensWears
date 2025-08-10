import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = ({ cartCount = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <div className="navbar__logo">
          <Link to="/">Mens<span className="highlight">Wear</span></Link>
        </div>

        {/* Desktop Nav Links */}
        <ul
          className={`navbar__links ${isOpen ? "active" : ""}`}
          ref={menuRef}
        >
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/shop" onClick={() => setIsOpen(false)}>Shop</Link>
          </li>
          <li>
            <Link to="/cart" onClick={() => setIsOpen(false)}>Cart</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          </li>
        </ul>

        {/* Icons container (Toggle + Cart) */}
        <div className="navbar__icons">
          <button
            className="navbar__toggle"
            onClick={toggleMenu}
            ref={toggleRef}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>

          <Link to="/cart" className="cart-icon-wrapper">
            <FaShoppingCart size={22} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && <div className="navbar__overlay" onClick={() => setIsOpen(false)}></div>}
    </>
  );
};

export default Navbar;

