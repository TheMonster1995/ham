import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import Menu from './Menu';

import './landing.css';

const Landing = () => {
  return (
    <>
      <Menu />
    </>
  )
}

export default Landing;

//Contact me
// <section className='contact w-75 mx-auto bg-light p-4' id="contact">
//   <h3 className='fw-bold'>Contact me</h3>
//   <div className='px-4'>
//     <h5>Find me on <a href="https://instagram.com/themonster195" target="_blank" className='instagram'>Instagram</a>, <a href="https://www.linkedin.com/in/themonster95" target="_blank" className='linkedin'>LinkedIn</a>, and <a href="https://github.com/TheMonster1995" target="_blank" className='github'>Github</a>!</h5>
//     <h5>Or drop me a message here and I will get back to you</h5>
//   </div>
//   <form className='px-4 row mt-5'>
//     <div className='col col-md-6 mb-3'>
//       <label htmlFor="nameInput" className="form-label fw-bold">What's your name?</label>
//       <input type="text" className="form-control" id="nameInput" />
//     </div>
//     <div className='col col-md-6 mb-3'>
//       <label htmlFor="emailInput" className="form-label fw-bold">Your email address</label>
//       <input type="email" className="form-control" id="emailInput" />
//     </div>
//     <div className='col-12 mb-3'>
//       <label htmlFor="contentInput" className="form-label fw-bold">How may I be of service?</label>
//       <textarea className="form-control" id="contentInput" rows='5'></textarea>
//       <div id="contentHelp" className="fw-bold">p.s Add an alternative contact info in case you forget to check your email</div>
//     </div>
//     <div className='col-12 text-start'>
//       <button type="submit" className='btn btn-primary form-submit'>Send</button>
//     </div>
//   </form>
// </section>
