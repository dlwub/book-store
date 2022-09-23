import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';

const Navbar = () => (
  <div className="header-container">
    <h2>Bookstore CMS</h2>
    <Link to="/">Books</Link>
    <Link to="/categories">Categories</Link>
    <FontAwesomeIcon icon={faCircleUser} />
  </div>
);
export default Navbar;
