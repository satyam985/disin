import React from 'react';
import Link from '../../utils/ActiveLink';

const Navbar = () => {
    const [menu, setMenu] = React.useState(true)

    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
    })
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <div id="navbar" className="navbar-area sticky-top">
            <div className="main-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link href="/">
                            <a onClick={toggleNavbar} className="navbar-brand">
                                <img className='w-25' src="/images/logo.png" alt="logo" />
                            </a>
                        </Link>

                        <button 
                            onClick={toggleNavbar} 
                            className={classTwo}
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="icon-bar top-bar"></span>
                            <span className="icon-bar middle-bar"></span>
                            <span className="icon-bar bottom-bar"></span>
                        </button>

                        <div className={classOne} id="navbarSupportedContent">
                            <ul className="navbar-nav">
                            <li className="nav-item">
                                    <Link href="/hbch-varanasi" activeClassName="active">
                                        <a onClick={toggleNavbar} className="nav-link">HBCH</a>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link href="#" activeClassName="active">
                                        <a onClick={e => e.preventDefault()} className="nav-link dropdown-toggle">
                                            About Us
                                        </a>
                                    </Link>

                                    <ul className="dropdown-menu">
                                    <li className="nav-item">
                                            <Link href="/about" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">About Us</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/about/history" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">History Of The Institute</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/about/mission" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Vision & Mission</a>
                                            </Link>
                                        </li>
                                    </ul>

                                </li>

                                <li className="nav-item">
                                    <Link href="/departments" activeClassName="active">
                                        <a onClick={toggleNavbar} className="nav-link">Departments</a>
                                    </Link>
                                </li>
   
                                <li className="nav-item">
                                    <Link href="#">
                                        <a onClick={e => e.preventDefault()} className="nav-link dropdown-toggle">
                                            Academic
                                        </a>
                                    </Link>

                                    <ul className="dropdown-menu">
                                    <li className="nav-item">
                                            <Link href="/academics" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Academic</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/academics/clinical-research-secretariat" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Clinical Research Secretariat</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/academics/ethics-committee" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Institutional Ethics Committees</a>
                                            </Link>
                                        </li>

                                        {/* <li className="nav-item">
                                            <Link href="/academics/courses" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Courses</a>
                                            </Link>
                                        </li> */}
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link href="#">
                                        <a onClick={e => e.preventDefault()} className="nav-link dropdown-toggle">
                                            Patient Service
                                        </a>
                                    </Link>

                                    <ul className="dropdown-menu">
                                    <li className="nav-item">
                                            <Link href="#" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">International Patients Advisor</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/services" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Online Payment</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="https://tmc.gov.in/m_webemr_Varanasi/emr/Login" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">E-Medical Records(EMR)</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/faq" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">FAQ's</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link href="/coming-soon" activeClassName="active">
                                        <a onClick={toggleNavbar} className="nav-link">Recruitment</a>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link href="/coming-soon" activeClassName="active">
                                        <a onClick={toggleNavbar} className="nav-link">Tenders</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
