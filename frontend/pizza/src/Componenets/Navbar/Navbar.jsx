import React from 'react'

export default function Navbar() {
  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <div class="container">
          <a class="navbar-brand" href="/"><span class="flaticon-pizza-1 mr-1"></span>Pizza<br/><small>Delicous</small></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="oi oi-menu"></span> Menu
          </button>
        <div class="collapse navbar-collapse" id="ftco-nav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active"><a href="/" class="nav-link">Home</a></li>
            <li class="nav-item"><a href="/menu" class="nav-link">Menu</a></li>
            <li class="nav-item"><a href="/" class="nav-link">Services</a></li>
            <li class="nav-item"><a href="blog.html" class="nav-link">Blog</a></li>
            <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
            <li class="nav-item"><a href="/contact" class="nav-link">Contact</a></li>
            
            <li class="nav-item"><a href="/cart" class="nav-link"><span id="cartCounter" class="text-white font-weight-bold">1 </span><img src="/img/add-to-cart.png" alt='cart-img' /></a></li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href='/' id="navbarDropdownMenuLink" data-toggle="dropdown"  aria-expanded="false">
                <img class="usericon" src="/img/user_icon.png" alt="user-icon"/>
              </a>
              <div class="dropdown-menu dropStyle" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="/login">Login</a>
                <a class="dropdown-item" href="/register">Register</a>
              </div>
              
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}
