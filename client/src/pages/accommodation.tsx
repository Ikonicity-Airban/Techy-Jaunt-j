const Accommodation = () => {
  return <div className='marketplace'>

    <header className="header" data-header>

      <div className="overlay" data-overlay></div>

      <div className="header-top">
        <div className="container">
          <div className="wrapper">
            <ul className="header-top-social-list">

              <li>
                <a href="#" className="header-top-social-link">
                  <i className="logo-facebook"></i>
                </a>
              </li>

              <li>
                <a href="#" className="header-top-social-link">
                  <i className="logo-twitter"></i>
                </a>
              </li>

              <li>
                <a href="#" className="header-top-social-link">
                  <i className="logo-instagram"></i>
                </a>
              </li>

              <li>
                <a href="#" className="header-top-social-link">
                  <i className="logo-pinterest"></i>
                </a>
              </li>

            </ul>
          </div>

        </div>
      </div>

      <div className="header-bottom">
        <div className="container">

          <a href="#" className="logo">
            <img src="./assets/img-file/LOGO.png" alt="logo" />
          </a>

          <nav className="navbar" data-navbar>

            <div className="navbar-top">

              <a href="#" className="logo">
                <img src="./assets/img-file/Dp.svg" className='profilepic' alt="logo" />
                <center>
                  <h1 >Leke codeforcer</h1>
                </center>
              </a>

              <button className="nav-close-btn" data-nav-close-btn aria-label="Close Menu">
                <i className="close-outline"></i>
              </button>

            </div>

            <div className="navbar-bottom">
              <ul className="navbar-list">

                <li>
                  <a href="./Wifi.html" className="navbar-link" data-nav-link>WIFI</a>
                </li>

                <li>
                  <a href="#about" className="navbar-link" data-nav-link>PROFILE</a>
                </li>



                <li>
                  <a href="./DestinationPage.html" className="navbar-link" data-nav-link>NAVIGATION</a>
                </li>
                <li>
                  <a href="#service" className="navbar-link" data-nav-link>NEWS UPDATE</a>
                </li>

                <li>
                  <a href="#property" className="navbar-link" data-nav-link>MARKET SPACE</a>
                </li>

                <li>
                  <a href="./Accommodation.html" className="navbar-link" data-nav-link>ACCOMMODATION</a>
                </li>
                <hr />
                <li>
                  <a href="#contact" className="navbar-link" data-nav-link>LOG OUT</a>
                </li>

              </ul>
            </div>

          </nav>

          <div className="header-bottom-actions">

            <button className="header-bottom-actions-btn" aria-label="Search">
              <i className="home-outline"></i>

              <span>Home</span>
            </button>

            <button className="header-bottom-actions-btn" aria-label="Profile">
              <i className="location-outline"></i>

              <span>Map</span>
            </button>

            <button className="header-bottom-actions-btn" aria-label="Cart">
              <i className="key-outline"></i>

              <span>Hostel</span>
            </button>

            <button className="header-bottom-actions-btn" data-nav-open-btn aria-label="Open Menu">
              <i className="person-outline"></i>
              <span>Menu</span>
            </button>

          </div>

        </div>
      </div>

    </header>

    <main>
      <div className="navigation2">
        <a href="./MarketSpace.html" className="back-button22">&larr; Accommodation</a>
        <div className="link-container">
          <a href="./Oncampus.html" className="link">On Campus</a>
          <a href="./Offcampus.html" className="link">Off Campus</a>
          <a href="./Intown.html" className="link">In Town</a>
          <a href="./Receipt.html" className="link">Receipt</a>
          <a href="/invoice" className="link">Invoice</a>
          <a href="./Payment.html" className="link">Payment</a>
          <a href="./paypro.html" className="link">Pay pro</a>
          <a href="./PaymentOpt.html" className="link">Payment option</a>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <img src="./assets/img-file/Frame 58.svg" alt="Placeholder Image" />

        </div>
        <div className="card">
          <img src="./assets/img-file/Frame 59.svg" alt="Placeholder Image" />

        </div>
        <div className="card">
          <img src="./assets/img-file/Frame 60.svg" alt="Placeholder Image" />

        </div>
        <div className="navigation2">
          <a href="/secondintro" className="skip-button22">See all &rarr;</a>
        </div>
      </div>

    </main><footer className="footer2">
      &copy; Team J - campus sync app
    </footer>;
  </div>



};

export default Accommodation;