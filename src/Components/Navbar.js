import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';


export default function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light text-center fw-bold shadow">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} className='img-fluid' alt='logo'
                            style={{ height: '40px' }} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navbar-right" id="navbarNavAltMarkup">
                        <div className="nav navbar-nav ms-auto">
                            <ul className="navbar-nav mb-lg-0">
                                {sessionStorage.getItem('role') &&
                                    <li className="nav-item mx-1">
                                        <Link className="nav-link" to='/message-list'>Message list</Link>
                                    </li>}
                                <li className="nav-item mx-1">
                                    <Link className="nav-link" to='/about-us'>About</Link>
                                </li>
                                {!sessionStorage.getItem('login') && <li className="nav-item">
                                    <Link className="nav-link" to='/login'>Log In</Link>
                                </li>
                                }
                                {sessionStorage.getItem('login') &&
                                    <li className="nav-item">
                                        <div class="dropdown">
                                            <Link className="nav-link  rounded-circle bg-ska-secondary text-ska-primary" style={{ textDecoration: 'none', width: '40px' }}
                                                id="dropdownMenuLink" data-bs-toggle="dropdown" to="#" role="button" aria-expanded="false">
                                                {JSON.parse(sessionStorage['myDetails']).firstname?.slice(0, 1).toUpperCase()}
                                            </Link>
                                            <ul class="ska-box dropdown-menu px-0" aria-labelledby="dropdownMenuLink">
                                                <li><Link className="dropdown-item" to='/profile'>
                                                    <i class="bi bi-person-square" /> Profile</Link></li>
                                                <li><Link className="dropdown-item" to='/logout'>
                                                    <i class="bi bi-box-arrow-right" /> Log Out</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
