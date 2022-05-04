import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import "./header.css";
import "./general.css";

const Header = props => {
  const [scroll0, setScroll0] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = e => {
    // console.log('here');
    // console.log(window.scrollY);
    if (window.scrollY > 0 && scroll0) return setScroll0(false);
  }

  return (
    <nav className="custom-navbar pt-0">
      <div className={`navbar-top-img w-100 ${scroll0 ? '' : 'scrolled'}`}></div>
      <div className={`navbar-statement w-100 text-center p-4 ${scroll0 ? '' : 'scrolled'}`}>
        Together is our favorite place to be
      </div>
    </nav>
  );
}

export default Header;
