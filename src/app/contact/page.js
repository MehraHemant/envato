import Header from "../component/header";

export default function Contact() {
  return (
    <>
        <body>
                  <button className="scroll-top scroll-to-target" data-target="html">
                      <i className="fas fa-angle-up"></i>
                  </button>
                  {/* <header id="header">
                      <div id="sticky-header" className="menu-area transparent-header">
                          <div className="container custom-container">
                              <div className="row">
                                  <div className="col-12">
                                      <div className="menu-wrap">
                                          <nav className="menu-nav">
                                              <div className="logo">
                                                  <a href="index.html"><img src="assets/img/logo/logo.png" style={{height: '35px' }}alt="Logo"/></a>
                                              </div>
                                              <div className="navbar-wrap main-menu d-none d-lg-flex">
                                                  <ul className="navigation">
                                                      <li className="menu-item-has-children"><a href="/">Home</a>
                                                          <ul className="sub-menu">
                                                              <li><a href="/">ICO Investment</a></li>
                                                              <li><a href="/blockchain">Blockchain</a></li>
                                                          </ul>
                                                      </li>
                                                      <li><a href="index.html#feature">Feature</a></li>
                                                      <li><a href="index.html#roadMap">RoadMap</a></li>
                                                      <li className="menu-item-has-children"><a href="#">blog</a>
                                                          <ul className="sub-menu">
                                                              <li><a href="/blog">Our Blog</a></li>
                                                              <li><a href="/blogDetails">Blog Details</a></li>
                                                          </ul>
                                                      </li>
                                                      <li className="active"><a href="contact.html">Contact</a></li>
                                                  </ul>
                                              </div>
                                              <div className="header-action">
                                                  <ul className="list-wrap">
                                                      <li className="header-login"><a href="#">Login<i className="fas fa-user"></i></a></li>
                                                      <li className="offcanvas-menu"><a href="#" className="menu-tigger"><i className="fas fa-bars"></i></a></li>
                                                  </ul>
                                              </div>
                                              <div className="mobile-nav-toggler"><i className="fas fa-bars"></i></div>
                                          </nav>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="mobile-menu">
                          <nav className="menu-box">
                              <div className="close-btn"><i className="fas fa-times"></i></div>
                              <div className="nav-logo">
                                  <a href="index.html"><img src="assets/img/logo/logo.png" style={{height: '35px'}} alt="Logo"/></a>
                              </div>
                              <div className="menu-outer">
                              </div>
                              <div className="social-links">
                                  <ul className="clearfix list-wrap">
                                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                      <li>
                                          <a href="#">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                  <path d="M10.0596 7.34522L15.8879 0.570312H14.5068L9.44607 6.45287L5.40411 0.570312H0.742188L6.85442 9.46578L0.742188 16.5703H2.12338L7.4676 10.3581L11.7362 16.5703H16.3981L10.0593 7.34522H10.0596ZM8.16787 9.54415L7.54857 8.65836L2.62104 1.61005H4.74248L8.71905 7.29827L9.33834 8.18405L14.5074 15.5779H12.386L8.16787 9.54449V9.54415Z" fill="currentColor"></path>
                                              </svg>
                                          </a>
                                      </li>
                                      <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                      <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                      <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                  </ul>
                              </div>
                          </nav>
                      </div>
                      <div className="menu-backdrop"></div>
                      <div className="extra-info">
                          <div className="close-icon menu-close">
                              <button><i className="far fa-window-close"></i></button>
                          </div>
                          <div className="logo-side mb-30">
                              <a href="index.html"><img src="assets/img/logo/logo.png" style={{height: '35px'}} alt="Logo"/></a>
                          </div>
                          <div className="side-info mb-30">
                              <div className="contact-list mb-30">
                                  <h4>Office Address</h4>
                                  <p>123/A, Miranda City Likaoli <br/> Prikano, Dope</p>
                              </div>
                              <div className="contact-list mb-30">
                                  <h4>Phone Number</h4>
                                  <p>+0989 7876 9865 9</p>
                                  <p>+(090) 8765 86543 85</p>
                              </div>
                              <div className="contact-list mb-30">
                                  <h4>Email Address</h4>
                                  <p>info@example.com</p>
                                  <p>example.mail@hum.com</p>
                              </div>
                          </div>
                          <div className="social-icon-right mt-30">
                              <a href="#"><i className="fab fa-facebook-f"></i></a>
                              <a href="#">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                      <path
                                          d="M10.0596 7.34522L15.8879 0.570312H14.5068L9.44607 6.45287L5.40411 0.570312H0.742188L6.85442 9.46578L0.742188 16.5703H2.12338L7.4676 10.3581L11.7362 16.5703H16.3981L10.0593 7.34522H10.0596ZM8.16787 9.54415L7.54857 8.65836L2.62104 1.61005H4.74248L8.71905 7.29827L9.33834 8.18405L14.5074 15.5779H12.386L8.16787 9.54449V9.54415Z"
                                          fill="currentColor"></path>
                                  </svg>
                              </a>
                              <a href="#"><i className="fab fa-google-plus-g"></i></a>
                              <a href="#"><i className="fab fa-instagram"></i></a>
                          </div>
                      </div>
                      <div className="offcanvas-overly"></div>

                  </header> */}
                  <Header/>
                  <main>
                      <section className="breadcrumb-area breadcrumb-bg" data-background="assets/img/bg/breadcrumb_bg.png">
                          <div className="container">
                              <div className="row">
                                  <div className="col-lg-12">
                                      <div className="breadcrumb-content">
                                          <h2 className="title">Contact Us</h2>
                                          <nav aria-label="breadcrumb">
                                              <ol className="breadcrumb">
                                                  <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                                  <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                                              </ol>
                                          </nav>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="breadcrumb-shape-wrap">
                              <img src="assets/img/images/breadcrumb_shape01.png" alt="" className="alltuchtopdown"/>
                              <img src="assets/img/images/breadcrumb_shape02.png" alt="" className="rotateme"/>
                          </div>
                      </section>
                      <section className="contact-area pt-140 pb-140">
                          <div className="container">
                              <div className="contact-info-wrap">
                                  <div className="row justify-content-center">
                                      <div className="col-xl-3 col-lg-4 col-md-6">
                                          <div className="contact-info-item">
                                              <div className="icon">
                                                  <i className="fas fa-map-marker-alt"></i>
                                              </div>
                                              <div className="content">
                                                  <h6 className="title">Location</h6>
                                                  <p>1901 Thornridge Cir. <br/> Shiloh, Hawaii</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-xl-3 col-lg-4 col-md-6">
                                          <div className="contact-info-item">
                                              <div className="icon">
                                                  <i className="fas fa-phone-alt"></i>
                                              </div>
                                              <div className="content">
                                                  <h6 className="title">Contact</h6>
                                                  <p><a href="tel:0123456789">+88(0) 555-0108</a> <br/> <a href="tel:0123456789">+88(0) 555-01117</a></p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-xl-3 col-lg-4 col-md-6">
                                          <div className="contact-info-item">
                                              <div className="icon">
                                                  <i className="fas fa-envelope"></i>
                                              </div>
                                              <div className="content">
                                                  <h6 className="title">Email</h6>
                                                  <p><a href="mailto:iko.@example.com">sara.cruz@example.com</a> <br/> <a href="mailto:iko.@example.com">iko.@example.com</a></p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-xl-3 col-lg-4 col-md-6">
                                          <div className="contact-info-item">
                                              <div className="icon">
                                                  <i className="fas fa-business-time"></i>
                                              </div>
                                              <div className="content">
                                                  <h6 className="title">Visit Between</h6>
                                                  <p>Mon - Sat : 8.00-5.00 <br/> Sunday : Closed</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="contact-form-wrap">
                                  <div className="row g-0">
                                      <div className="col-57 order-0 order-lg-2">
                                          <div className="contact-form">
                                              <h4 className="title">Send a message</h4>
                                              <form id="contact-form" action="assets/mail.php" method="POST">
                                                  <div className="row">
                                                      <div className="col-md-6">
                                                          <div className="form-grp">
                                                              <input type="text" name="name" placeholder="Enter you name"/>
                                                          </div>
                                                      </div>
                                                      <div className="col-md-6">
                                                          <div className="form-grp">
                                                              <input type="email" name="email" placeholder="Enter you email"/>
                                                          </div>
                                                      </div>
                                                      <div className="col-md-6">
                                                          <div className="form-grp">
                                                              <input type="number" name="number" placeholder="Mobile no"/>
                                                          </div>
                                                      </div>
                                                      <div className="col-md-6">
                                                          <div className="form-grp">
                                                              <input type="text" name="company" placeholder="Company"/>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="form-grp">
                                                      <textarea name="message" placeholder="Enter you message....."></textarea>
                                                  </div>
                                                  <button type="submit" className="btn">Send Message</button>
                                              </form>
                                              <p className="ajax-response mb-0"></p>
                                          </div>
                                      </div>
                                      <div className="col-43">
                                          <div className="contact-map">
                                              <iframe src="https://geo-devrel-javascript-samples.web.app/samples/style-array/app/dist/" allowfullscreen="" loading="lazy"></iframe>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="document-area">
                          <div className="container">
                              <div className="document-inner-wrap">
                                  <div className="row">
                                      <div className="col-lg-12">
                                          <div className="section-title text-center mb-60">
                                              <h2 className="title">Have Any Questions?</h2>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-lg-8">
                                          <div className="document-form-wrap">
                                              <h4 className="title">Get In Touch Now</h4>
                                              <form action="#">
                                                  <div className="row">
                                                      <div className="col-md-6">
                                                          <div className="form-grp">
                                                              <input type="text" placeholder="Your Name"/>
                                                          </div>
                                                      </div>
                                                      <div className="col-md-6">
                                                          <div className="form-grp">
                                                              <input type="email" placeholder="Your Email"/>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="form-grp">
                                                      <textarea name="message" placeholder="Enter you message....."></textarea>
                                                  </div>
                                                  <button type="submit" className="btn">Send Message</button>
                                              </form>
                                          </div>
                                      </div>
                                      <div className="col-lg-4">
                                          <div className="document-wrap">
                                              <h4 className="title">Read Documents</h4>
                                              <ul className="list-wrap">
                                                  <li>
                                                      <a href="#">
                                                          <span className="icon"><i className="fas fa-file-pdf"></i></span>
                                                          Whitepaper
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#">
                                                          <span className="icon"><i className="fas fa-file-pdf"></i></span>
                                                          Token Sale Terms
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#">
                                                          <span className="icon"><i className="fas fa-file-pdf"></i></span>
                                                          Presentation
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#">
                                                          <span className="icon"><i className="fas fa-file-pdf"></i></span>
                                                          Lightpaper
                                                      </a>
                                                  </li>
                                              </ul>
                                              <a href="#" className="btn">Download All</a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="document-shape">
                              <img src="assets/img/images/document_shape.png" alt="" className="alltuchtopdown"/>
                          </div>
                      </section>

                  </main>

                  <footer>
                      <div className="footer-area footer-bg" data-background="assets/img/bg/footer_bg.png">
                          <div className="container">
                              <div className="footer-top">
                                  <div className="row">
                                      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                                          <div className="footer-widget">
                                              <h4 className="fw-title">Usefull Links</h4>
                                              <div className="footer-link">
                                                  <ul className="list-wrap">
                                                      <li><a href="contact.html">Contact us</a></li>
                                                      <li><a href="contact.html">How it Works</a></li>
                                                      <li><a href="contact.html">Create</a></li>
                                                      <li><a href="contact.html">Explore</a></li>
                                                      <li><a href="contact.html">Terms & Services</a></li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-xl-3 col-lg-2 col-md-4 col-sm-6">
                                          <div className="footer-widget">
                                              <h4 className="fw-title">SOLUTIONS</h4>
                                              <div className="footer-link">
                                                  <ul className="list-wrap">
                                                      <li><a href="contact.html">Token Suite</a></li>
                                                      <li><a href="contact.html">Ecosystem</a></li>
                                                      <li><a href="contact.html">Investment</a></li>
                                                      <li><a href="contact.html">Portal</a></li>
                                                      <li><a href="contact.html">Tokenization</a></li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4">
                                          <div className="footer-widget">
                                              <h4 className="fw-title">Usefull Links</h4>
                                              <div className="footer-link">
                                                  <ul className="list-wrap">
                                                      <li><a href="contact.html">Help Center</a></li>
                                                      <li><a href="contact.html">Partners</a></li>
                                                      <li><a href="contact.html">Suggestions</a></li>
                                                      <li><a href="blog.html">Blog</a></li>
                                                      <li><a href="contact.html">Newsletters</a></li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-xl-3 col-lg-4 col-sm-8">
                                          <div className="footer-widget">
                                              <h4 className="fw-title">Subscribe Newsletter</h4>
                                              <div className="footer-newsletter">
                                                  <p>Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo</p>
                                                  <form action="#">
                                                      <input type="text" placeholder="Info@gmail.com"/>
                                                      <button type="submit"><i className="fas fa-paper-plane"></i></button>
                                                  </form>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="footer-bottom">
                                  <div className="row">
                                      <div className="col-lg-12">
                                          <div className="copyright-text">
                                              <p>Copyright © 2024 IKO. All rights reserved.</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="footer-shape-wrap">
                              <img src="assets/img/images/footer_shape01.png" alt="" className="alltuchtopdown"/>
                              <img src="assets/img/images/footer_shape02.png" alt="" className="leftToRight"/>
                          </div>
                      </div>
                  </footer>

                  <script src="assets/js/vendor/jquery-3.6.0.min.js"></script>
                  <script src="assets/js/bootstrap.min.js"></script>
                  <script src="assets/js/jquery.countdown.min.js"></script>
                  <script src="assets/js/jquery.appear.js"></script>
                  <script src="assets/js/slick.min.js"></script>
                  <script src="assets/js/ajax-form.js"></script>
                  <script src="assets/js/jquery.easing.js"></script>
                  <script src="assets/js/imagesloaded.pkgd.min.js"></script>
                  <script src="assets/js/isotope.pkgd.min.js"></script>
                  <script src="assets/js/jquery.magnific-popup.min.js"></script>
                  <script src="assets/js/wow.min.js"></script>
                  <script src="assets/js/main.js"></script>
        </body>
    </>  
    );
}

