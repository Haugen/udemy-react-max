import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../Logo/Logo';

const toolbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <NavLink to="/"><Logo /></NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/posts">Posts</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default toolbar;