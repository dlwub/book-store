import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';

const Navbar = () => (
  <div className="header-container">
    <h2 className="header-text">Bookstore CMS</h2>
    <Link className="links book-link" to="/">BOOKS</Link>
    <Link className="links category-link" to="/categories">CATEGORIES</Link>
    <FontAwesomeIcon className="icon" icon={faCircleUser} />
  </div>
);
export default Navbar;
