import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" extact to="/">Navbar</Link>
  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}

  <div className="" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" extact to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" extact to="/about">About</Link>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link" extact to="/user">User</Link>
      </li>
    </ul>
  </div>
</nav>            
        </div>
    )
}
