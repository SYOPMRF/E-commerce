import React from 'react';
import { Helmet } from 'react-helmet';
import '../assets/css/all.min.css';
import '../assets/bootstrap/css/bootstrap.min.css';
import '../assets/css/owl.carousel.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/animate.css';
import '../assets/css/meanmenu.min.css';
import '../assets/css/main.css';
import '../assets/css/responsive.css';

const Header = () => {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Responsive Bootstrap4 Shop Template, Created by Imran Hossain from https://imransdesign.com/" />
        <title>Fruitkha</title>
        <link rel="shortcut icon" type="image/png" href="assets/img/favicon.png" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap" rel="stylesheet" />
      </Helmet>
      
      {/* PreLoader */}
      <div className="loader">
        <div className="loader-inner">
          <div className="circle"></div>
        </div>
      </div>
      {/* PreLoader Ends */}

      {/* Header */}
      <div className="top-header-area" id="sticker">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 text-center">
              <div className="main-menu-wrap">
                {/* Logo */}
                <div className="site-logo">
                  <a href="index.html">
                    <img src="assets/img/logo.png" alt="Logo" />
                  </a>
                </div>
                {/* Logo */}

                {/* Menu Start */}
                <nav className="main-menu">
                  <ul>
                    <li className="current-list-item">
                      <a href="#">Home</a>
                      <ul className="sub-menu">
                        <li><a href="index.html">Static Home</a></li>
                        <li><a href="index_2.html">Slider Home</a></li>
                      </ul>
                    </li>
                    <li><a href="about.html">About</a></li>
                    <li>
                      <a href="#">Pages</a>
                      <ul className="sub-menu">
                        <li><a href="404.html">404 page</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="cart.html">Cart</a></li>
                        <li><a href="checkout.html">Check Out</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="news.html">News</a></li>
                        <li><a href="shop.html">Shop</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="news.html">News</a>
                      <ul className="sub-menu">
                        <li><a href="news.html">News</a></li>
                        <li><a href="single-news.html">Single News</a></li>
                      </ul>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                    <li>
                      <a href="shop.html">Shop</a>
                      <ul className="sub-menu">
                        <li><a href="shop.html">Shop</a></li>
                        <li><a href="checkout.html">Check Out</a></li>
                        <li><a href="single-product.html">Single Product</a></li>
                        <li><a href="cart.html">Cart</a></li>
                      </ul>
                    </li>
                    <li>
                      <div className="header-icons">
                        <a className="shopping-cart" href="cart.html"><i className="fas fa-shopping-cart"></i></a>
                        <a className="mobile-hide search-bar-icon" href="#"><i className="fas fa-search"></i></a>
                      </div>
                    </li>
                  </ul>
                </nav>
                <a className="mobile-show search-bar-icon" href="#"><i className="fas fa-search"></i></a>
                <div className="mobile-menu"></div>
                {/* Menu End */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Header */}
    </>
  );
};

export default Header;
