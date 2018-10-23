import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';

const toolbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <Link to="/"><Logo /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/posts">Posts</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default toolbar;