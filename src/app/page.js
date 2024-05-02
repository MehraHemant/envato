import Image from "next/image";
import styles from "./page.module.css";
import Header from "./component/header";

export default function Home() {
  return (
   <>
   <body className="home-purple-gradient">
   
    {/* <div id="preloader">
        <div className="spinner">
            <div className="rect1"></div>
            <div className="rect2"></div>
            <div className="rect3"></div>
            <div className="rect4"></div>
            <div className="rect5"></div>
        </div>
    </div> */}

    <button className="scroll-top scroll-to-target" data-target="html">
        <i className="fas fa-angle-up"></i>
    </button>

    {/* <header id="header" className="header-layout1">
        <div id="sticky-header" className="menu-area transparent-header">
            <div className="container custom-container">
                <div className="row">
                    <div className="col-12">
                        <div className="menu-wrap">
                            <nav className="menu-nav">
                                <div className="logo">
                                    <a href="index.html"><img src="/assets/img/logo/logo.png" style={{height: "200px"}} alt="Logo"/></a>
                                </div>
                                <div className="navbar-wrap main-menu d-none d-lg-flex">
                                    <ul className="navigation">
                                        <li className="active menu-item-has-children"><a className="section-link" href="#header">Home</a>
                                            <ul className="sub-menu">
                                                <li className="active"><a href="/">ICO Investment</a></li>
                                                <li><a href="/blockchain">Blockchain</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#feature" className="section-link">Feature</a></li>
                                        <li><a href="#roadMap" className="section-link">RoadMap</a></li>
                                        <li className="menu-item-has-children"><a href="#">blog</a>
                                            <ul className="sub-menu">
                                                <li><a href="/blog">Our Blog</a></li>
                                                <li><a href="/blogDetails">Blog Details</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/contact">Contact</a></li>
                                    </ul>
                                </div>
                                <div className="header-action">
                                    <ul className="list-wrap">
                                        <li>
                                            <div className="dropdown-link">
                                                <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink1" data-bs-toggle="dropdown" aria-expanded="false">ENG</a>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                                                    <li>
                                                        <a href="#">GER</a>
                                                        <a href="#">FREN</a>
                                                        <a href="#">ARAB</a>
                                                        <a href="#">LAT</a>
                                                        <a href="#">SPA</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="header-login"><a className="btn2" href="/rollup">LOGIN</a></li>
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
                    <a href="index.html"><img src="/assets/img/logo/logo.png" style={{height: "35px"}} alt="Logo"/></a>
                </div>
                <div className="menu-outer">
                </div>
                <div className="social-links">
                    <ul className="clearfix list-wrap">
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path
                                        d="M10.0596 7.34522L15.8879 0.570312H14.5068L9.44607 6.45287L5.40411 0.570312H0.742188L6.85442 9.46578L0.742188 16.5703H2.12338L7.4676 10.3581L11.7362 16.5703H16.3981L10.0593 7.34522H10.0596ZM8.16787 9.54415L7.54857 8.65836L2.62104 1.61005H4.74248L8.71905 7.29827L9.33834 8.18405L14.5074 15.5779H12.386L8.16787 9.54449V9.54415Z"
                                        fill="currentColor"></path>
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
    </header> */}
    <Header/>

    <div className="hero-wrapper hero-1">
        <div className="hero-bg-gradient">
        </div>
        <div className="ripple-shape">
            <span className="ripple-1"></span>
            <span className="ripple-2"></span>
            <span className="ripple-3"></span>
            <span className="ripple-4"></span>
            <span className="ripple-5"></span>
        </div>

        <div className="container">
            <div className="hero-style1">
                <div className="row flex-row-reverse">
                    <div className="col-lg-3">
                        <div className="hero-thumb alltuchtopdown">
                            <img src="/assets/img/update/hero/hero-1-1.jpg" alt="img"/>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <h1 className="hero-title">Putting Your Money in Product Backed Projects</h1>
                        <div className="btn-wrap">
                            <a href="contact.html" className="btn btn2" >
                                Purchase a Token
                            </a>
                            <a href="blog.html" className="btn btn-two" >
                                Read  Documents
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            <div className="hero-countdown-wrap">
                <h2 className="hero-countdown-wrap-title">ICO will start in..</h2>
                <ul className="skill-feature_list">
                    <li><span>Value</span> of technology invested</li>
                    <li><span>Private</span> sale</li>
                    <li><h4>ICO</h4></li>
                </ul>
                <div className="skill-feature">
                    <div className="progress">
                        <div className="progress-bar" style={{width: "80%"}}>
                        </div>
                    </div>
                    <div className="progress-value-max">100 Min $</div>
                </div>
                <ul className="skill-feature_list style2">
                    <li>7.75 Min</li>
                    <li>1.5 Min</li>
                    <li>140,000 $ chosen</li>
                </ul>
                <div className="banner-countdown-wrap">
                    <div className="coming-time" data-countdown="2024/8/29"></div>
                </div>
            </div>
        </div>
    </div>

    <div className="brand-area2">
        <div className="container">
            <div className="row g-0">
                <div className="col-lg-12">
                    <div className="brand-title text-center">
                        <h6 className="title">Our top Partner</h6>
                    </div>
                </div>
            </div>
            <div className="brand-item-wrap style2">
                <div className="row g-0 brand-active2">
                    <div className="col-12">
                        <div className="brand-item">
                            <img src="/assets/img/brand/brand_img01.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="brand-item">
                            <img src="/assets/img/brand/brand_img02.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="brand-item">
                            <img src="/assets/img/brand/brand_img03.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="brand-item">
                            <img src="/assets/img/brand/brand_img04.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="brand-item">
                            <img src="/assets/img/brand/brand_img05.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="brand-item">
                            <img src="/assets/img/brand/brand_img06.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="brand-item">
                            <img src="/assets/img/brand/brand_img07.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="brand-item">
                            <img src="/assets/img/brand/brand_img04.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="wcu-area-1 pt-130 pb-140 position-relative" id="feature">
        <div className="bg-gradient-1">
            <img src="/assets/img/update/bg/bg-gradient1-1.jpg" alt="img"/>
        </div>
        <div className="container">
            <div className="mb-25">
                <div className="row gy-5">
                    <div className="col-lg-7">
                        <div className="section-title mb-0">
                            <h2 className="title style2">Why You Choose IKO is worth buying today?</h2>
                            <p className="sec-text">Use the window for the planned investment  and calculate the estimated <br/> Iko price and your monthly dividends at a fixed time
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="wcu-thumb text-center alltuchtopdown">
                            <img src="/assets/img/update/normal/why_1-1.png" alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row gy-5 justify-content-between">
                <div className="col-lg-5">
                    <div className="wcu-amount-quantity">
                        <div className="amount">
                            <h5 className="title">Amount invested</h5>
                            <p className="price">50,000 $</p>
                        </div>
                        <div className="quantity">
                            <h5 className="title">Quantity Iko</h5>
                            <p className="price">500,000 Iko</p>
                        </div>
                    </div>
                    <ul className="wcu-price-progress-wrap">
                        <li>
                            <h6 className="progress-wrap-title">Expected FOX price</h6>
                            <p className="progress-wrap-text">0.36 $</p>
                            <div className="skill-feature">
                                <div className="progress">
                                    <div className="progress-bar" style={{width: "70%"}}>
                                    </div>
                                </div>
                                <div className="progress-value">
                                    <span>100 $</span>
                                    <span>100,000 $</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <h6 className="progress-wrap-title">Expected FOX price</h6>
                            <p className="progress-wrap-text">0.36 $</p>
                            <div className="skill-feature">
                                <div className="progress">
                                    <div className="progress-bar" style={{width: "80%"}}>
                                    </div>
                                </div>
                                <div className="progress-value">
                                    <span>100 $</span>
                                    <span>100,000 $</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <h6 className="progress-wrap-title">Calculation time</h6>
                            <p className="progress-wrap-text">Q3 2020</p>
                            <div className="skill-feature">
                                <div className="progress">
                                    <div className="progress-bar" style={{width: "40%"}}>
                                    </div>
                                </div>
                                <div className="progress-value">
                                    <span>100 $</span>
                                    <span>100,000 $</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <div className="feature-card">
                        <div className="feature-card-icon">
                            <img src="/assets/img/update/icon/feature-icon1-1.svg" alt="img"/>
                        </div>
                        <div className="feature-card-details">
                            <h4 className="feature-card-title">The expected value of your investment</h4>
                            <p className="feature-card-text">180,000 $</p>
                            <p className="feature-card-text">ROI = 360 %</p>
                        </div>
                    </div>
                    <div className="feature-card">
                        <div className="feature-card-icon">
                            <img src="/assets/img/update/icon/feature-icon1-2.svg" alt="img"/>
                        </div>
                        <div className="feature-card-details">
                            <h4 className="feature-card-title">Expected monthly dividend</h4>
                            <p className="feature-card-text">3600 FOX = 1296 $</p>
                        </div>
                    </div>
                    <div className="feature-card">
                        <div className="feature-card-icon">
                            <img src="/assets/img/update/icon/feature-icon1-3.svg" alt="img"/>
                        </div>
                        <div className="feature-card-details">
                            <h4 className="feature-card-title">Masternode bonus</h4>
                            <p className="feature-card-text">180,000 $</p>
                            <p className="feature-card-text">ROI = 360 %</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div className="pt-130 overflow-hidden bg-black2">
        <div className="container">
            <div className="row">
                <div className="col-xl-6">
                    <div className="section-title mb-45">
                        <h2 className="title style2">Introducing Iko Crypto</h2>
                        <p className="sec-text">True wealth in the world of virtual currencies</p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-between">
                <div className="col-xl-4">
                    <div className="intro-wrap mt-xl-4">
                        <h6 className="intro-wrap-title">Who We Are</h6>
                        <p className="intro-wrap-text">Iko is a 100% pre-scratched cryotome
                            There are 1 Million Minutes, and 60% of them can be yours (60% - ICO)
                            Utility & security token
                            (applies to all transactions and gives a monthly dividend)</p>
                    </div>
                    <div className="intro-wrap">
                        <h6 className="intro-wrap-title">Wealth?</h6>
                        <p className="intro-wrap-text">Users with Iko have lower system fees
                            Price growth is gathered by demand for Unifox technologies. You own a stake in an international corporation. You are part of the community</p>
                    </div>
                    <div className="intro-wrap">
                        <h6 className="intro-wrap-title">True Riches?</h6>
                        <p className="intro-wrap-text">The underlying growth attracts investors
                            The whole community is interested in growing the Iko prize. The company is planning to continue to expand the project, and it will cost the top up</p>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="intro-thumb1 alltuchtopdown">
                        <img src="/assets/img/update/normal/intro_1-1.png" alt="img"/>
                    </div>
                    <div className="intro-wrap mt-50">
                        <h6 className="intro-wrap-title">Our Mission & Vission</h6>
                        <p className="intro-wrap-text">Iko is a 100% pre-scratched cryptome
                            There are 1 Million Minutes, and 60% of them can be yours (60% - ICO)
                            Utility & security token
                            (applies to all transactions and gives a monthly dividend)</p>
                        <p className="intro-wrap-text mt-40">Iko is a 100% pre-scratched cryptome
                            There are 1 Million Minutes, and 60% of them can be yours (60% - ICO)
                            Utility & security token
                            (applies to all transactions and gives a monthly dividend)</p>
                        <p className="intro-wrap-text mt-40">Iko is a 100% pre-scratched cryptome
                            There are 1 Million Minutes, and 60% of them can be yours (60% - ICO)</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
    <div className="pt-130 pb-140 overflow-hidden bg-black2 position-relative z-index-common" id="roadMap">
        <div className="bg-gradient-2">
            <img src="/assets/img/update/bg/bg-gradient1-1.jpg" alt="img"/>
        </div>
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-6 col-sm-8">
                    <div className="section-title mb-50">
                        <h2 className="title style2">Our Roadmap</h2>
                    </div>
                </div>
                <div className="col-sm-auto">
                    <div className="icon-box">
                        <button className="slider-arrow prev-btn default"><i className="fas fa-arrow-left"></i></button>
                        <button className="slider-arrow next-btn default"><i className="fas fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid p-0">
            <div className="slider-area position-relative">
                <div className="row roadMap-active2 roadmap-slider1">
                    <div className="col-lg-4">
                        <div className="roadmap-item">
                            <span className="roadmap-title">End of Q4 2021</span>
                            <div className="roadmap-content">
                                <h4 className="title"><span className="dot"></span>Research</h4>
                                <p>SubQuery Builders/Grants Program SQT Network contract internal MVP Coordinator and client SDK implementations</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="roadmap-item">
                            <span className="roadmap-title">End of Q4 2021</span>
                            <div className="roadmap-content">
                                <h4 className="title"><span className="dot"></span>App Beta Test</h4>
                                <p>SubQuery Builders/Grants Program SQT Network contract internal MVP Coordinator and client SDK implementations</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="roadmap-item">
                            <span className="roadmap-title">End of Q4 2021</span>
                            <div className="roadmap-content">
                                <h4 className="title"><span className="dot"></span>Token Test</h4>
                                <p>SubQuery Builders/Grants Program SQT Network contract internal MVP Coordinator and client SDK implementations</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="roadmap-item">
                            <span className="roadmap-title">End of Q4 2021</span>
                            <div className="roadmap-content">
                                <h4 className="title"><span className="dot"></span>Alpha Test</h4>
                                <p>SubQuery Builders/Grants Program SQT Network contract internal MVP Coordinator and client SDK implementations</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="roadmap-item">
                            <span className="roadmap-title">End of Q4 2021</span>
                            <div className="roadmap-content">
                                <h4 className="title"><span className="dot"></span>Concept</h4>
                                <p>SubQuery Builders/Grants Program SQT Network contract internal MVP Coordinator and client SDK implementations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="pt-130 overflow-hidden">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-7">
                    <div className="section-title text-center mb-50">
                        <h2 className="title style2">Invest in Our ecosystem shares today</h2>
                    </div>
                </div>
            </div>
            <div className="row gy-30">
                <div className="col-lg-3 col-md-6">
                    <div className="invest-card">
                        <div className="invest-card-icon">
                            <img src="/assets/img/update/invest/invest-icon-1.png" alt="icon"/>
                        </div>
                        <a className="btn btn3" href="#">Enclose BTC</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="invest-card">
                        <div className="invest-card-icon">
                            <img src="/assets/img/update/invest/invest-icon-2.png" alt="icon"/>
                        </div>
                        <a className="btn btn3" href="#">Enclose ETH</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="invest-card">
                        <div className="invest-card-icon">
                            <img src="/assets/img/update/invest/invest-icon-3.png" alt="icon"/>
                        </div>
                        <a className="btn btn3" href="#">Bank Transfer</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="invest-card">
                        <div className="invest-card-icon">
                            <img src="/assets/img/update/invest/invest-icon-4.png" alt="icon"/>
                        </div>
                        <a className="btn btn3" href="#">Enclose UXC</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="pt-130 pb-140 overflow-hidden position-relative z-index-common">
        <div className="bg-gradient-3">
            <img src="/assets/img/update/bg/bg-gradient1-1.jpg" alt="img"/>
        </div>

        <div className="pb-110">
            <div className="container">
                <div className="section-title text-center mb-50">
                    <h2 className="title style2">Active founders</h2>
                </div>
                <div className="row gy-4 justify-content-center">
                    <div className="col-lg-6">
                        <div className="founder-card">
                            <div className="founder-card-img">
                                <img src="/assets/img/update/team/founder-1-1.png" alt="img"/>
                            </div>
                            <div className="founder-card-details">
                                <h3 className="founder-card-title">Eleanor Pena</h3>
                                <p className="founder-card-desig">Founder & CEO</p>
                                <div className="social-btn">
                                    <a href="https://www.linkedin.com/">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path
                                                d="M10.0596 7.34522L15.8879 0.570312H14.5068L9.44607 6.45287L5.40411 0.570312H0.742188L6.85442 9.46578L0.742188 16.5703H2.12338L7.4676 10.3581L11.7362 16.5703H16.3981L10.0593 7.34522H10.0596ZM8.16787 9.54415L7.54857 8.65836L2.62104 1.61005H4.74248L8.71905 7.29827L9.33834 8.18405L14.5074 15.5779H12.386L8.16787 9.54449V9.54415Z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </a>
                                    <a href="https://youtube.com/">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="founder-card">
                            <div className="founder-card-img">
                                <img src="/assets/img/update/team/founder-1-2.png" alt="img"/>
                            </div>
                            <div className="founder-card-details">
                                <h3 className="founder-card-title">William Xeno</h3>
                                <p className="founder-card-desig">Founder & CEO</p>
                                <div className="social-btn">
                                    <a href="https://www.linkedin.com/">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path
                                                d="M10.0596 7.34522L15.8879 0.570312H14.5068L9.44607 6.45287L5.40411 0.570312H0.742188L6.85442 9.46578L0.742188 16.5703H2.12338L7.4676 10.3581L11.7362 16.5703H16.3981L10.0593 7.34522H10.0596ZM8.16787 9.54415L7.54857 8.65836L2.62104 1.61005H4.74248L8.71905 7.29827L9.33834 8.18405L14.5074 15.5779H12.386L8.16787 9.54449V9.54415Z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </a>
                                    <a href="https://youtube.com/">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="text-center">
                        <div className="team-tab-btn filter-menu-active">
                            <button data-filter=".cat1" className="active" type="button">Advisory Team</button>
                            <button data-filter=".cat2" type="button">Management Team</button>
                            <button data-filter=".cat3" type="button">Marketing Team</button>
                        </div>
                    </div>
                    <div className="filter-active-cat1">
                        <div className="team-tab-content filter-item cat1">
                            <ul className="team-tab-list">
                                <li>
                                    <div className="team-card">
                                        <div className="team-card_img">
                                            <img src="/assets/img/update/team/team-1-1.png" alt="Team Image"/>
                                            <div className="social-btn">
                                                <a href="https://www.linkedin.com/">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-card_content">
                                            <h3 className="team-card_title"><a href="#">Jacob Jones</a></h3>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="team-card">
                                        <div className="team-card_img">
                                            <img src="/assets/img/update/team/team-1-2.png" alt="Team Image"/>
                                            <div className="social-btn">
                                                <a href="https://www.linkedin.com/">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-card_content">
                                            <h3 className="team-card_title"><a href="#">Albert Flores</a></h3>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="team-card">
                                        <div className="team-card_img">
                                            <img src="/assets/img/update/team/team-1-3.png" alt="Team Image"/>
                                            <div className="social-btn">
                                                <a href="https://www.linkedin.com/">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-card_content">
                                            <h3 className="team-card_title"><a href="#">Devon Lane</a></h3>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="team-card">
                                        <div className="team-card_img">
                                            <img src="/assets/img/update/team/team-1-4.png" alt="Team Image"/>
                                            <div className="social-btn">
                                                <a href="https://www.linkedin.com/">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-card_content">
                                            <h3 className="team-card_title"><a href="#">Jacob Jones</a></h3>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="team-card">
                                        <div className="team-card_img">
                                            <img src="/assets/img/update/team/team-1-5.png" alt="Team Image"/>
                                            <div className="social-btn">
                                                <a href="https://www.linkedin.com/">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-card_content">
                                            <h3 className="team-card_title"><a href="#">Jacob Jones</a></h3>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="team-card">
                                        <div className="team-card_img">
                                            <img src="/assets/img/update/team/team-1-6.png" alt="Team Image"/>
                                            <div className="social-btn">
                                                <a href="https://www.linkedin.com/">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-card_content">
                                            <h3 className="team-card_title"><a href="#">Jacob Jones</a></h3>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="team-card">
                                        <div className="team-card_img">
                                            <img src="/assets/img/update/team/team-1-7.png" alt="Team Image"/>
                                            <div className="social-btn">
                                                <a href="https://www.linkedin.com/">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-card_content">
                                            <h3 className="team-card_title"><a href="#">Albert Flores</a></h3>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="team-card">
                                        <div className="team-card_img">
                                            <img src="/assets/img/update/team/team-1-8.png" alt="Team Image"/>
                                            <div className="social-btn">
                                                <a href="https://www.linkedin.com/">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-card_content">
                                            <h3 className="team-card_title"><a href="#">Devon Lane</a></h3>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="team-card">
                                        <div className="team-card_img">
                                            <img src="/assets/img/update/team/team-1-9.png" alt="Team Image"/>
                                            <div className="social-btn">
                                                <a href="https://www.linkedin.com/">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-card_content">
                                            <h3 className="team-card_title"><a href="#">Jacob Jones</a></h3>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="team-card">
                                        <div className="team-card_img">
                                            <img src="/assets/img/update/team/team-1-10.png" alt="Team Image"/>
                                            <div className="social-btn">
                                                <a href="https://www.linkedin.com/">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-card_content">
                                            <h3 className="team-card_title"><a href="#">Jacob Jones</a></h3>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="team-tab-content filter-item cat2">
                            <ul className="team-tab-list">
                                <li>
                                    <div className="team-card">
                                        <div className="team-card_img">
                                            <img src="/assets/img/update/team/team-1-4.png" alt="Team Image"/>
                                            <div className="social-btn">
                                                <a href="https://www.linkedin.com/">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-card_content">
                                            <h3 className="team-card_title"><a href="#">Jacob Jones</a></h3>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="team-card">
                                        <div className="team-card_img">
                                            <img src="/assets/img/update/team/team-1-3.png" alt="Team Image"/>
                                            <div className="social-btn">
                                                <a href="https://www.linkedin.com/">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-card_content">
                                            <h3 className="team-card_title"><a href="#">Devon Lane</a></h3>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="team-card">
                                        <div className="team-card_img">
                                            <img src="/assets/img/update/team/team-1-5.png" alt="Team Image"/>
                                            <div className="social-btn">
                                                <a href="https://www.linkedin.com/">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-card_content">
                                            <h3 className="team-card_title"><a href="#">Jacob Jones</a></h3>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="team-card">
                                        <div className="team-card_img">
                                            <img src="/assets/img/update/team/team-1-6.png" alt="Team Image"/>
                                            <div className="social-btn">
                                                <a href="https://www.linkedin.com/">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-card_content">
                                            <h3 className="team-card_title"><a href="#">Jacob Jones</a></h3>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="team-card">
                                        <div className="team-card_img">
                                            <img src="/assets/img/update/team/team-1-7.png" alt="Team Image"/>
                                            <div className="social-btn">
                                                <a href="https://www.linkedin.com/">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-card_content">
                                            <h3 className="team-card_title"><a href="#">Albert Flores</a></h3>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="team-card">
                                        <div className="team-card_img">
                                            <img src="/assets/img/update/team/team-1-2.png" alt="Team Image"/>
                                            <div className="social-btn">
                                                <a href="https://www.linkedin.com/">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-card_content">
                                            <h3 className="team-card_title"><a href="#">Albert Flores</a></h3>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="team-card">
                                        <div className="team-card_img">
                                            <img src="/assets/img/update/team/team-1-8.png" alt="Team Image"/>
                                            <div className="social-btn">
                                                <a href="https://www.linkedin.com/">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-card_content">
                                            <h3 className="team-card_title"><a href="#">Devon Lane</a></h3>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="team-card">
                                        <div className="team-card_img">
                                            <img src="/assets/img/update/team/team-1-1.png" alt="Team Image"/>
                                            <div className="social-btn">
                                                <a href="https://www.linkedin.com/">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-card_content">
                                            <h3 className="team-card_title"><a href="#">Jacob Jones</a></h3>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="team-card">
                                        <div className="team-card_img">
                                            <img src="/assets/img/update/team/team-1-9.png" alt="Team Image"/>
                                            <div className="social-btn">
                                                <a href="https://www.linkedin.com/">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-card_content">
                                            <h3 className="team-card_title"><a href="#">Jacob Jones</a></h3>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="team-card">
                                        <div className="team-card_img">
                                            <img src="/assets/img/update/team/team-1-10.png" alt="Team Image"/>
                                            <div className="social-btn">
                                                <a href="https://www.linkedin.com/">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-card_content">
                                            <h3 className="team-card_title"><a href="#">Jacob Jones</a></h3>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="team-tab-content filter-item cat3">
                            <ul className="team-tab-list">
                                <li>
                                    <div className="team-card">
                                        <div className="team-card_img">
                                            <img src="/assets/img/update/team/team-1-1.png" alt="Team Image"/>
                                            <div className="social-btn">
                                                <a href="https://www.linkedin.com/">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-card_content">
                                            <h3 className="team-card_title"><a href="#">Jacob Jones</a></h3>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="team-card">
                                        <div className="team-card_img">
                                            <img src="/assets/img/update/team/team-1-2.png" alt="Team Image"/>
                                            <div className="social-btn">
                                                <a href="https://www.linkedin.com/">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-card_content">
                                            <h3 className="team-card_title"><a href="#">Albert Flores</a></h3>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="team-card">
                                        <div className="team-card_img">
                                            <img src="/assets/img/update/team/team-1-3.png" alt="Team Image"/>
                                            <div className="social-btn">
                                                <a href="https://www.linkedin.com/">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-card_content">
                                            <h3 className="team-card_title"><a href="#">Devon Lane</a></h3>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="team-card">
                                        <div className="team-card_img">
                                            <img src="/assets/img/update/team/team-1-4.png" alt="Team Image"/>
                                            <div className="social-btn">
                                                <a href="https://www.linkedin.com/">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-card_content">
                                            <h3 className="team-card_title"><a href="#">Jacob Jones</a></h3>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="team-card">
                                        <div className="team-card_img">
                                            <img src="/assets/img/update/team/team-1-5.png" alt="Team Image"/>
                                            <div className="social-btn">
                                                <a href="https://www.linkedin.com/">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-card_content">
                                            <h3 className="team-card_title"><a href="#">Jacob Jones</a></h3>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="team-card">
                                        <div className="team-card_img">
                                            <img src="/assets/img/update/team/team-1-6.png" alt="Team Image"/>
                                            <div className="social-btn">
                                                <a href="https://www.linkedin.com/">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-card_content">
                                            <h3 className="team-card_title"><a href="#">Jacob Jones</a></h3>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="team-card">
                                        <div className="team-card_img">
                                            <img src="/assets/img/update/team/team-1-7.png" alt="Team Image"/>
                                            <div className="social-btn">
                                                <a href="https://www.linkedin.com/">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-card_content">
                                            <h3 className="team-card_title"><a href="#">Albert Flores</a></h3>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="team-card">
                                        <div className="team-card_img">
                                            <img src="/assets/img/update/team/team-1-8.png" alt="Team Image"/>
                                            <div className="social-btn">
                                                <a href="https://www.linkedin.com/">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-card_content">
                                            <h3 className="team-card_title"><a href="#">Devon Lane</a></h3>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="team-card">
                                        <div className="team-card_img">
                                            <img src="/assets/img/update/team/team-1-9.png" alt="Team Image"/>
                                            <div className="social-btn">
                                                <a href="https://www.linkedin.com/">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-card_content">
                                            <h3 className="team-card_title"><a href="#">Jacob Jones</a></h3>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="team-card">
                                        <div className="team-card_img">
                                            <img src="/assets/img/update/team/team-1-10.png" alt="Team Image"/>
                                            <div className="social-btn">
                                                <a href="https://www.linkedin.com/">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-card_content">
                                            <h3 className="team-card_title"><a href="#">Jacob Jones</a></h3>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="pt-130 bg-black2">
        <div className="container">
            <div className="section-title text-center mb-50">
                <h2 className="title style2">Our partners</h2>
            </div>
            <div className="slider-area">
                <div className="row partner-slider1">
                    <div className="col-lg-4">
                        <div className="partner-card">
                            <div className="partner-card-img">
                                <img src="/assets/img/update/client/client-1-4.svg" alt="img"/>
                            </div>
                            <p className="partner-card-text">Stable crypto currency and an important part of the UniFox ecosystem</p>
                            <a className="btn btn3" href="blog.html">EXPLORE</a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="partner-card">
                            <div className="partner-card-img">
                                <img src="/assets/img/update/client/client-1-2.svg" alt="img"/>
                            </div>
                            <p className="partner-card-text">Online exchanger, specializing in the exchange of private
                                individuals</p>
                            <a className="btn btn3" href="blog.html">EXPLORE</a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="partner-card">
                            <div className="partner-card-img">
                                <img src="/assets/img/update/client/client-1-5.svg" alt="img"/>
                            </div>
                            <p className="partner-card-text">A company that provides all IT services within the ecosystem of UniFox</p>
                            <a className="btn btn3" href="blog.html">EXPLORE</a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="partner-card">
                            <div className="partner-card-img">
                                <img src="/assets/img/update/client/client-1-4.svg" alt="img"/>
                            </div>
                            <p className="partner-card-text">Stable crypto currency and an important part of the UniFox ecosystem</p>
                            <a className="btn btn3" href="blog.html">EXPLORE</a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="partner-card">
                            <div className="partner-card-img">
                                <img src="/assets/img/update/client/client-1-2.svg" alt="img"/>
                            </div>
                            <p className="partner-card-text">Online exchanger, specializing in the exchange of private
                                individuals</p>
                            <a className="btn btn3" href="blog.html">EXPLORE</a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="partner-card">
                            <div className="partner-card-img">
                                <img src="/assets/img/update/client/client-1-5.svg" alt="img"/>
                            </div>
                            <p className="partner-card-text">A company that provides all IT services within the ecosystem of UniFox</p>
                            <a className="btn btn3" href="blog.html">EXPLORE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="pt-130 pb-140 bg-black2 overflow-hidden position-relative z-index-common">
        <div className="bg-gradient-4">
            <img src="/assets/img/update/bg/bg-gradient1-2.jpg" alt="img"/>
        </div>
        <div className="event-area">
            <div className="container">
                <div className="section-title text-center mb-50">
                    <h2 className="title style2">Join Events for meet us</h2>
                </div>
                <div className="row gy-60 gx-30 justify-content-center">
                    <div className="col-lg-3 col-md-6">
                        <div className="event-card">
                            <div className="event-card-img">
                                <a href="#">
                                    <img src="/assets/img/update/event/1-1.png" alt="blog image"/>
                                </a>
                            </div>
                            <div className="event-card-content">
                                <h4 className="event-card-title"><a href="contact.html">BlockVienna</a></h4>
                                <div className="event-meta">
                                    <a href="#">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.99895 8.95321C9.1477 8.95321 10.0789 8.02197 10.0789 6.87321C10.0789 5.72446 9.1477 4.79321 7.99895 4.79321C6.85019 4.79321 5.91895 5.72446 5.91895 6.87321C5.91895 8.02197 6.85019 8.95321 7.99895 8.95321Z" stroke="var(--tg-primary-color)" stroke-width="1.5"/>
                                        <path d="M2.41281 5.65992C3.72615 -0.113413 12.2795 -0.106746 13.5861 5.66659C14.3528 9.05325 12.2461 11.9199 10.3995 13.6933C9.05948 14.9866 6.93948 14.9866 5.59281 13.6933C3.75281 11.9199 1.64615 9.04659 2.41281 5.65992Z" stroke="var(--tg-primary-color)" stroke-width="1.5"/>
                                        </svg>
                                        Venna
                                    </a>
                                    <a href="#">
                                        <i className="far fa-clock"></i>
                                        August 17, 2024
                                    </a>
                                </div>
                                <a href="#" className="btn btn3">
                                    JOIN US
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="event-card">
                            <div className="event-card-img">
                                <a href="#">
                                    <img src="/assets/img/update/event/1-2.png" alt="blog image"/>
                                </a>
                            </div>
                            <div className="event-card-content">
                                <h4 className="event-card-title"><a href="contact.html">Summit Summits</a></h4>
                                <div className="event-meta">
                                    <a href="#">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.99895 8.95321C9.1477 8.95321 10.0789 8.02197 10.0789 6.87321C10.0789 5.72446 9.1477 4.79321 7.99895 4.79321C6.85019 4.79321 5.91895 5.72446 5.91895 6.87321C5.91895 8.02197 6.85019 8.95321 7.99895 8.95321Z" stroke="var(--tg-primary-color)" stroke-width="1.5"/>
                                        <path d="M2.41281 5.65992C3.72615 -0.113413 12.2795 -0.106746 13.5861 5.66659C14.3528 9.05325 12.2461 11.9199 10.3995 13.6933C9.05948 14.9866 6.93948 14.9866 5.59281 13.6933C3.75281 11.9199 1.64615 9.04659 2.41281 5.65992Z" stroke="var(--tg-primary-color)" stroke-width="1.5"/>
                                        </svg>
                                        USA
                                    </a>
                                    <a href="#">
                                        <i className="far fa-clock"></i>
                                        June 12, 2024
                                    </a>
                                </div>
                                <a href="#" className="btn btn3">
                                    JOIN US
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="event-card">
                            <div className="event-card-img">
                                <a href="#">
                                    <img src="/assets/img/update/event/1-3.png" alt="blog image"/>
                                </a>
                            </div>
                            <div className="event-card-content">
                                <h4 className="event-card-title"><a href="contact.html">Blockchain Summit</a></h4>
                                <div className="event-meta">
                                    <a href="#">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.99895 8.95321C9.1477 8.95321 10.0789 8.02197 10.0789 6.87321C10.0789 5.72446 9.1477 4.79321 7.99895 4.79321C6.85019 4.79321 5.91895 5.72446 5.91895 6.87321C5.91895 8.02197 6.85019 8.95321 7.99895 8.95321Z" stroke="var(--tg-primary-color)" stroke-width="1.5"/>
                                        <path d="M2.41281 5.65992C3.72615 -0.113413 12.2795 -0.106746 13.5861 5.66659C14.3528 9.05325 12.2461 11.9199 10.3995 13.6933C9.05948 14.9866 6.93948 14.9866 5.59281 13.6933C3.75281 11.9199 1.64615 9.04659 2.41281 5.65992Z" stroke="var(--tg-primary-color)" stroke-width="1.5"/>
                                        </svg>
                                        America
                                    </a>
                                    <a href="#">
                                        <i className="far fa-clock"></i>
                                        July 05, 2024
                                    </a>
                                </div>
                                <a href="#" className="btn btn3">
                                    JOIN US
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="event-card">
                            <div className="event-card-img">
                                <a href="#">
                                    <img src="/assets/img/update/event/1-4.png" alt="blog image"/>
                                </a>
                            </div>
                            <div className="event-card-content">
                                <h4 className="event-card-title"><a href="contact.html">Economy ICO 2024</a></h4>
                                <div className="event-meta">
                                    <a href="#">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.99895 8.95321C9.1477 8.95321 10.0789 8.02197 10.0789 6.87321C10.0789 5.72446 9.1477 4.79321 7.99895 4.79321C6.85019 4.79321 5.91895 5.72446 5.91895 6.87321C5.91895 8.02197 6.85019 8.95321 7.99895 8.95321Z" stroke="var(--tg-primary-color)" stroke-width="1.5"/>
                                        <path d="M2.41281 5.65992C3.72615 -0.113413 12.2795 -0.106746 13.5861 5.66659C14.3528 9.05325 12.2461 11.9199 10.3995 13.6933C9.05948 14.9866 6.93948 14.9866 5.59281 13.6933C3.75281 11.9199 1.64615 9.04659 2.41281 5.65992Z" stroke="var(--tg-primary-color)" stroke-width="1.5"/>
                                        </svg>
                                        Costa Rica
                                    </a>
                                    <a href="#">
                                        <i className="far fa-clock"></i>
                                        September 09, 2024
                                    </a>
                                </div>
                                <a href="#" className="btn btn3">
                                    JOIN US
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="event-card">
                            <div className="event-card-img">
                                <a href="#">
                                    <img src="/assets/img/update/event/1-5.png" alt="blog image"/>
                                </a>
                            </div>
                            <div className="event-card-content">
                                <h4 className="event-card-title"><a href="contact.html">Blockchain summit</a></h4>
                                <div className="event-meta">
                                    <a href="#">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.99895 8.95321C9.1477 8.95321 10.0789 8.02197 10.0789 6.87321C10.0789 5.72446 9.1477 4.79321 7.99895 4.79321C6.85019 4.79321 5.91895 5.72446 5.91895 6.87321C5.91895 8.02197 6.85019 8.95321 7.99895 8.95321Z" stroke="var(--tg-primary-color)" stroke-width="1.5"/>
                                        <path d="M2.41281 5.65992C3.72615 -0.113413 12.2795 -0.106746 13.5861 5.66659C14.3528 9.05325 12.2461 11.9199 10.3995 13.6933C9.05948 14.9866 6.93948 14.9866 5.59281 13.6933C3.75281 11.9199 1.64615 9.04659 2.41281 5.65992Z" stroke="var(--tg-primary-color)" stroke-width="1.5"/>
                                        </svg>
                                        Brazil
                                    </a>
                                    <a href="#">
                                        <i className="far fa-clock"></i>
                                        September 14, 2024
                                    </a>
                                </div>
                                <a href="#" className="btn btn3">
                                    JOIN US
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="event-card">
                            <div className="event-card-img">
                                <a href="#">
                                    <img src="/assets/img/update/event/1-6.png" alt="blog image"/>
                                </a>
                            </div>
                            <div className="event-card-content">
                                <h4 className="event-card-title"><a href="contact.html">Blockchain & bitcoin</a></h4>
                                <div className="event-meta">
                                    <a href="#">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.99895 8.95321C9.1477 8.95321 10.0789 8.02197 10.0789 6.87321C10.0789 5.72446 9.1477 4.79321 7.99895 4.79321C6.85019 4.79321 5.91895 5.72446 5.91895 6.87321C5.91895 8.02197 6.85019 8.95321 7.99895 8.95321Z" stroke="var(--tg-primary-color)" stroke-width="1.5"/>
                                        <path d="M2.41281 5.65992C3.72615 -0.113413 12.2795 -0.106746 13.5861 5.66659C14.3528 9.05325 12.2461 11.9199 10.3995 13.6933C9.05948 14.9866 6.93948 14.9866 5.59281 13.6933C3.75281 11.9199 1.64615 9.04659 2.41281 5.65992Z" stroke="var(--tg-primary-color)" stroke-width="1.5"/>
                                        </svg>
                                        Argentina
                                    </a>
                                    <a href="#">
                                        <i className="far fa-clock"></i>
                                        August 14, 2024
                                    </a>
                                </div>
                                <a href="#" className="btn btn3">
                                    JOIN US
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="event-card">
                            <div className="event-card-img">
                                <a href="#">
                                    <img src="/assets/img/update/event/1-7.png" alt="blog image"/>
                                </a>
                            </div>
                            <div className="event-card-content">
                                <h4 className="event-card-title"><a href="contact.html">Money conference</a></h4>
                                <div className="event-meta">
                                    <a href="#">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.99895 8.95321C9.1477 8.95321 10.0789 8.02197 10.0789 6.87321C10.0789 5.72446 9.1477 4.79321 7.99895 4.79321C6.85019 4.79321 5.91895 5.72446 5.91895 6.87321C5.91895 8.02197 6.85019 8.95321 7.99895 8.95321Z" stroke="var(--tg-primary-color)" stroke-width="1.5"/>
                                        <path d="M2.41281 5.65992C3.72615 -0.113413 12.2795 -0.106746 13.5861 5.66659C14.3528 9.05325 12.2461 11.9199 10.3995 13.6933C9.05948 14.9866 6.93948 14.9866 5.59281 13.6933C3.75281 11.9199 1.64615 9.04659 2.41281 5.65992Z" stroke="var(--tg-primary-color)" stroke-width="1.5"/>
                                        </svg>
                                        Franch
                                    </a>
                                    <a href="#">
                                        <i className="far fa-clock"></i>
                                        May 24, 2024
                                    </a>
                                </div>
                                <a href="#" className="btn btn3">
                                    JOIN US
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="event-card">
                            <div className="event-card-img">
                                <a href="#">
                                    <img src="/assets/img/update/event/1-8.png" alt="blog image"/>
                                </a>
                            </div>
                            <div className="event-card-content">
                                <h4 className="event-card-title"><a href="contact.html">Crypto Economy </a></h4>
                                <div className="event-meta">
                                    <a href="#">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.99895 8.95321C9.1477 8.95321 10.0789 8.02197 10.0789 6.87321C10.0789 5.72446 9.1477 4.79321 7.99895 4.79321C6.85019 4.79321 5.91895 5.72446 5.91895 6.87321C5.91895 8.02197 6.85019 8.95321 7.99895 8.95321Z" stroke="var(--tg-primary-color)" stroke-width="1.5"/>
                                        <path d="M2.41281 5.65992C3.72615 -0.113413 12.2795 -0.106746 13.5861 5.66659C14.3528 9.05325 12.2461 11.9199 10.3995 13.6933C9.05948 14.9866 6.93948 14.9866 5.59281 13.6933C3.75281 11.9199 1.64615 9.04659 2.41281 5.65992Z" stroke="var(--tg-primary-color)" stroke-width="1.5"/>
                                        </svg>
                                        Saudi Arabia
                                    </a>
                                    <a href="#">
                                        <i className="far fa-clock"></i>
                                        May 24, 2024
                                    </a>
                                </div>
                                <a href="#" className="btn btn3">
                                    JOIN US
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="press-cta-area pt-130">
            <div className="container">
                <div className="section-title text-center mb-50">
                    <h2 className="title style2">Press us</h2>
                </div>
                <div className="cta-slider1 row">
                    <div className="col-lg-6">
                        <div className="cta-wrap1">
                            <div className="cta-wrap-details">
                                <img src="/assets/img/update/client/press-1-1.svg" alt="img"/>
                                <h3 className="cta-wrap-title">huffpost.com</h3>
                                <p className="cta-wrap-text">UniFox seeks to incorporate cryptocurrencies
                                    into everyday life through the introduction of their autonomous design.</p>
                            </div>
                            <a className="btn btn4" href="blog.html">READ MORE</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cta-wrap1">
                            <div className="cta-wrap-details">
                                <img src="/assets/img/update/client/press-1-2.svg" alt="img"/>
                                <h3 className="cta-wrap-title">msnbc.com</h3>
                                <p className="cta-wrap-text">In excellence from Tether or love another "stable" crippling. Unicash can easily be converted to local currency by special bankers </p>
                            </div>
                            <a className="btn btn4" href="blog.html">READ MORE</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cta-wrap1">
                            <div className="cta-wrap-details">
                                <img src="/assets/img/update/client/press-1-1.svg" alt="img"/>
                                <h3 className="cta-wrap-title">huffpost.com</h3>
                                <p className="cta-wrap-text">UniFox seeks to incorporate cryptocurrencies
                                    into everyday life through the introduction of their autonomous design.</p>
                            </div>
                            <a className="btn btn4" href="/blog">READ MORE</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cta-wrap1">
                            <div className="cta-wrap-details">
                                <img src="/assets/img/update/client/press-1-2.svg" alt="img"/>
                                <h3 className="cta-wrap-title">msnbc.com</h3>
                                <p className="cta-wrap-text">In excellence from Tether or love another "stable" crippling. Unicash can easily be converted to local currency by special bankers </p>
                            </div>
                            <a className="btn btn4" href="blog.html">READ MORE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="pt-140 pb-140 overflow-hidden">
        <div className="container">
            <div className="row gy-40 justify-content-between">
                <div className="col-xl-4 text-xl-start">
                    <div className="section-title mb-50">
                        <h2 className="title style2">Frequently Asked Questions</h2>
                        <p className="sec-text">DO have any kind Of questions?
                            We're here to help.</p>
                    </div>
                    <div className="faq-thumb mt-60">
                        <img src="/assets/img/update/normal/faq_1-1.png" alt="img"/>
                    </div>
                </div>
                <div className="col-xxl-6 col-xl-8">
                    <div className="accordion-area accordion" id="faqAccordion">

                        <div className="accordion-card active">
                            <div className="accordion-header" id="collapse-item-1">
                                <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1"><span className="number">1</span> How to buy FOX tokens?</button>
                            </div>
                            <div id="collapse-1" className="accordion-collapse collapse show" aria-labelledby="collapse-item-1" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    <p className="faq-text">It's very simple! Register here. In your personal account, create a wallet where you can store your FOX tokens. Then just send any amount to the displayed address in your office.</p>
                                </div>
                            </div>
                        </div>


                        <div className="accordion-card">
                            <div className="accordion-header" id="collapse-item-2">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2"><span className="number">2</span> What is the value of FOX tokens?
                                </button>
                            </div>
                            <div id="collapse-2" className="accordion-collapse collapse " aria-labelledby="collapse-item-2" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    <p className="faq-text">It's very simple! Register here. In your personal account, create a wallet where you can store your FOX tokens. Then just send any amount to the displayed address in your office.</p>
                                </div>
                            </div>
                        </div>


                        <div className="accordion-card">
                            <div className="accordion-header" id="collapse-item-3">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3"><span className="number">3</span> What is the value of FOX tokens?</button>
                            </div>
                            <div id="collapse-3" className="accordion-collapse collapse " aria-labelledby="collapse-item-3" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    <p className="faq-text">It's very simple! Register here. In your personal account, create a wallet where you can store your FOX tokens. Then just send any amount to the displayed address in your office.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-card">
                            <div className="accordion-header" id="collapse-item-4">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-4" aria-expanded="false" aria-controls="collapse-4"><span className="number">4</span> How are coins distribut ed?</button>
                            </div>
                            <div id="collapse-4" className="accordion-collapse collapse " aria-labelledby="collapse-item-4" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    <p className="faq-text">It's very simple! Register here. In your personal account, create a wallet where you can store your FOX tokens. Then just send any amount to the displayed address in your office.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-card">
                            <div className="accordion-header" id="collapse-item-5">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-5" aria-expanded="false" aria-controls="collapse-5"><span className="number">5</span> How to buy FOX tokens?</button>
                            </div>
                            <div id="collapse-5" className="accordion-collapse collapse " aria-labelledby="collapse-item-5" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    <p className="faq-text">It's very simple! Register here. In your personal account, create a wallet where you can store your FOX tokens. Then just send any amount to the displayed address in your office.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-card">
                            <div className="accordion-header" id="collapse-item-6">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-6" aria-expanded="false" aria-controls="collapse-6"><span className="number">6</span> How to buy FOX tokens?</button>
                            </div>
                            <div id="collapse-6" className="accordion-collapse collapse " aria-labelledby="collapse-item-6" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    <p className="faq-text">It's very simple! Register here. In your personal account, create a wallet where you can store your FOX tokens. Then just send any amount to the displayed address in your office.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-card">
                            <div className="accordion-header" id="collapse-item-7">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-7" aria-expanded="false" aria-controls="collapse-7"><span className="number">7</span> How to buy FOX tokens?</button>
                            </div>
                            <div id="collapse-7" className="accordion-collapse collapse " aria-labelledby="collapse-item-7" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    <p className="faq-text">It's very simple! Register here. In your personal account, create a wallet where you can store your FOX tokens. Then just send any amount to the displayed address in your office.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer className="footer-wrapper footer-layout1 position-relative">
        <div className="bg-gradient-1">
            <img src="/assets/img/update/bg/bg-gradient1-1.jpg" alt="img"/>
        </div>
        <div className="container">
            <div className="footer-menu-area">
                <div className="row gy-4 justify-content-between align-items-center">
                    <div className="col-xl-5 col-lg-4">
                        <div className="social-btn justify-content-center justify-content-lg-start">
                            <a href="https://www.facebook.com/">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path
                                        d="M10.0596 7.34522L15.8879 0.570312H14.5068L9.44607 6.45287L5.40411 0.570312H0.742188L6.85442 9.46578L0.742188 16.5703H2.12338L7.4676 10.3581L11.7362 16.5703H16.3981L10.0593 7.34522H10.0596ZM8.16787 9.54415L7.54857 8.65836L2.62104 1.61005H4.74248L8.71905 7.29827L9.33834 8.18405L14.5074 15.5779H12.386L8.16787 9.54449V9.54415Z"
                                        fill="currentColor"></path>
                                </svg>
                            </a>
                            <a href="https://instagram.com/">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://linkedin.com/">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-8 text-lg-end text-center">
                        <ul className="footer-menu-list">
                            <li>
                                <a href="index.html">
                                    HOME
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    OUR PROJECTS
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    OUR TEAM
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    NEWS FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    DOCUMENTS
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-wrap text-center text-lg-start">
            <div className="container">
                <div className="row gy-3 justify-content-between align-items-center">
                    <div className="col-lg-6 align-self-center">
                        <p className="copyright-text">Copyright © 2024 <a href="#">IKO.</a> All rights reserved.</p>
                    </div>
                    <div className="col-lg-6 text-lg-end">
                        <ul className="footer-links">
                            <li>
                                <a href="blog.html">
                                    Job & Career
                                </a>
                            </li>
                            <li>
                                <a href="contact.html">
                                    Terms and Condition
                                </a>
                            </li>
                            <li>
                                <a href="contact.html">
                                    Help Center
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </footer>

    <script src="/assets/js/vendor/jquery-3.6.0.min.js"></script>
    <script src="/assets/js/bootstrap.min.js"></script>
    <script src="/assets/js/jquery.countdown.min.js"></script>
    <script src="/assets/js/jquery.appear.js"></script>
    <script src="/assets/js/slick.min.js"></script>
    <script src="/assets/js/ajax-form.js"></script>
    <script src="/assets/js/jquery.easing.js"></script>
    <script src="/assets/js/imagesloaded.pkgd.min.js"></script>
    <script src="/assets/js/isotope.pkgd.min.js"></script>
    <script src="/assets/js/jquery.magnific-popup.min.js"></script>
    <script src="/assets/js/wow.min.js"></script>
    <script src="/assets/js/main.js"></script>
</body>
   </>
  );
}
