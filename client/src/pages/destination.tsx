import React from 'react'

export default function destination() {
    return (
        <div className="marketplace">
            <header className="header" data-header="">
                <div className="overlay" data-overlay="" />
                <div className="header-top">
                    <div className="container">
                        <div className="wrapper">
                            <ul className="header-top-social-list">
                                <li>
                                    <a href="#" className="header-top-social-link">
                                        <i className="logo-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="header-top-social-link">
                                        <i className="logo-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="header-top-social-link">
                                        <i className="logo-instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="header-top-social-link">
                                        <i className="logo-pinterest" />
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
                        <nav className="navbar" data-navbar="">
                            <div className="navbar-top">
                                <a href="#" className="logo">
                                    <img
                                        src="./assets/img-file/Dp.svg"
                                        className="profilepic"
                                        alt="logo"
                                    />
                                    <center>
                                        <h1 style={{ color: "#fff" }}>Leke codeforcer</h1>
                                    </center>
                                </a>
                                <button
                                    className="nav-close-btn"
                                    data-nav-close-btn=""
                                    aria-label="Close Menu"
                                >
                                    <i className="close-outline" />
                                </button>
                            </div>
                            <div className="navbar-bottom">
                                <ul className="navbar-list">
                                    <li>
                                        <a href="./Wifi.html" className="navbar-link" data-nav-link="">
                                            WIFI
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#about" className="navbar-link" data-nav-link="">
                                            PROFILE
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="./DestinationPage.html"
                                            className="navbar-link"
                                            data-nav-link=""
                                        >
                                            NAVIGATION
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#service" className="navbar-link" data-nav-link="">
                                            NEWS UPDATE
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#property" className="navbar-link" data-nav-link="">
                                            MARKET SPACE
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="./Accommodation.html"
                                            className="navbar-link"
                                            data-nav-link=""
                                        >
                                            ACCOMMODATION
                                        </a>
                                    </li>
                                    <hr />
                                    <li>
                                        <a href="#contact" className="navbar-link" data-nav-link="">
                                            LOG OUT
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div className="header-bottom-actions">
                            <button className="header-bottom-actions-btn" aria-label="Search">
                                <i className="home-outline" />
                                <span>Home</span>
                            </button>
                            <button className="header-bottom-actions-btn" aria-label="Profile">
                                <i className="location-outline" />
                                <span>Map</span>
                            </button>
                            <button className="header-bottom-actions-btn" aria-label="Cart">
                                <i className="key-outline" />
                                <span>Hostel</span>
                            </button>
                            <button
                                className="header-bottom-actions-btn"
                                data-nav-open-btn=""
                                aria-label="Open Menu"
                            >
                                <i className="person-outline" />
                                <span>Menu</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div className="destination-container">
                    <center>
                        <h1>Destination Arrived</h1>
                        <img
                            src="./assets/img-file/image 3.svg"
                            alt="Destination Image"
                            className="destination-image"
                        />
                        <a href="./MarketSpace.html" className="close-button">
                            Close
                        </a>
                    </center>
                </div>
            </main>
        </div>

    )
}
