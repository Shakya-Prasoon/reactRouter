import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="Nav">
      <nav>
        <ul class="nav-link">
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/shop">
            <li>Shop</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;