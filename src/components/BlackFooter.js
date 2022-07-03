import React from 'react'
import ASC from './ASC.jpg';
import { Link } from 'react-router-dom';
import './Footer.css';
import { BsGithub, BsEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";

const BlackFooter = () => {
  return (
    <>
      <footer class="bd-footer py-2 mt-4 bg-black">
        <div class="container py-5">
          <div class="row">
            <div class="col-lg-3 mb-3 verticalLine">
              <Link class="d-inline-flex align-items-center mb-2 link-dark text-decoration-none" to="/" aria-label="">
                <img src={ASC} className="rounded-3 ms-lg-5 me-lg-5 mb-lg-5" alt='logo' width={100} />
                {/* <svg xmlns="./ASC.jpg" width="40" height="32" class="d-block me-2" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor" /></svg>
                <span class="fs-5">Bootstrap</span> */}
              </Link>
              <ul class="list-unstyled small text-muted">
                <li class="mb-2">Designed and built with all the love in the world by the <a href="">ASC</a> with the help of <a href="https://github.com/AnkitSinghChandel">our contributors</a>.</li>
                <li class="mb-2">Code licensed <a href="https://nodejs.org/en/" target="_blank" rel="license noopener">Node.js</a>, docs <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="license noopener">React v18.1.0</a>.</li>
                <li class="mb-2">Currently v18.1.0</li>
              </ul>
            </div>
            <div class="col-6 col-lg-2 offset-lg-1 mb-3 text-muted">
              <h5>Links</h5>
              <ul class="list-unstyled">
                <li class="mb-2"><Link to="/">Home</Link></li>
                <li class="mb-2"><a href="https://reactjs.org/docs/getting-started.html">Docs</a></li>
                <li class="mb-2"><a href="/">Examples</a></li>
                <li class="mb-2"><a href="/">Themes</a></li>
                <li class="mb-2"><a href="/">Blog</a></li>
              </ul>
            </div>
            <div class="col-6 col-lg-2 mb-3 text-muted">
              <h5>Projects</h5>
              <ul class="list-unstyled">
                <li class="mb-2"><a href="https://ankitsinghchandel.github.io/Ecommerce-Apple/">Ecommerce-Apple</a></li>
                <li class="mb-2"><a href="https://ankitsinghchandel.github.io/Ecommerce-Store/">Project Ecommerce-Store</a></li>
                <li class="mb-2"><a href="http://asc.rf.gd/asc_portfolio/login.php">Project with PHP</a></li>
                <li class="mb-2"><a href="https://ankitsinghchandel.github.io/Restaurant/">Project Restaurant</a></li>
                <li class="mb-2"><a href="">npm starter</a></li>
              </ul>
            </div>
            <div class="col-6 col-lg-2 mb-3 text-muted">
              <h5>Guides</h5>
              <ul class="list-unstyled">
                <li class="mb-2"><a href="/">Getting started</a></li>
                <li class="mb-2"><a href="/">Starter template</a></li>
                <li class="mb-2"><a href="/">Webpack</a></li>
                <li class="mb-2"><a href="/">Parcel</a></li>
              </ul>
            </div>
            <div class="col-6 col-lg-2 mb-3 text-muted">
              <h5>Community</h5>
              <ul class="list-unstyled">
                <li class="mb-2"><a href="/">Issues</a></li>
                <li class="mb-2"><a href="/">Discussions</a></li>
                <li class="mb-2"><a href="/">Corporate sponsors</a></li>
                <li class="mb-2"><a href="/">Open Collective</a></li>
                <li class="mb-2"><a href="/">Slack</a></li>
                <li class="mb-2"><a href="/">Stack Overflow</a></li>
              </ul>
            </div>
            <hr className="my-3 text-white" />
            <div className='text-white ms-4'>
              <a className='inline-block m-2' href="mailto:ankitsinghchandel@gmail.com"><BsEnvelopeFill width={70} fontSize={30} /></a>
              <a className='inline-block m-2' href="https://github.com/AnkitSinghChandel"><BsGithub width={70} fontSize={30} /></a>
              <a className='inline-block m-2' href="tel:+918840356006"><BsFillTelephoneFill width={70} fontSize={30} /></a>
              <p class="h6 pt-4 text-muted">You can use the further information to contact me:</p>
            </div>
          </div>
        </div>
        <hr className="my-2 text-white" />
        <center>
          <b style={{ textAlign: 'center' }} class="text-white">created by THE ASC | © 2022 All rights reserved.</b>
          <img id="imagelast" src={ASC} class="rounded mx-auto d-block " alt="logo" />
        </center>
      </footer>

    </>
  )
}

export default BlackFooter;