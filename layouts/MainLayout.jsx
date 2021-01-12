import { mainNav } from '../configs/_nav';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/layouts/MainLayout.module.css';
import Image from 'next/image';

import { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const MainLayout = ({ children }) => {
    const router = useRouter();
    const activePath = mainNav.find((nav) => nav.routeLink === router.pathname);

    return (
        <div>
            <Navbar>
                <Navbar.Brand className="text-center mx-auto">
                    <Image src="/images/logo.png" width="100" height="100" />
                </Navbar.Brand>
            </Navbar>
            <Navbar bg="light" expand="lg" className={styles.nav_cover}>
                <Navbar.Toggle className="ml-auto" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="text-center">
                    <Nav variant="pills" className="mx-auto" defaultActiveKey={router.route}>
                        {mainNav.map((nav) => (
                            <Nav.Item key={nav.key}>
                                <Link href={nav.routeLink}>
                                    <a
                                        className={`nav-link mx-2 font-weight-bold  ${
                                            activePath.title === nav.title
                                                ? 'active text-white '
                                                : ''
                                        }`}>
                                        {nav.title}
                                    </a>
                                </Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {children}

            <section id="footer">
                <div className="container">
                    <div className="row text-center text-xs-center text-sm-left text-md-left">
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <h5>Quick links</h5>
                            <ul className="list-unstyled quick-links">
                                <li>
                                    <a href="https://www.fiverr.com/share/qb8D02">
                                        <i className="fa fa-angle-double-right"></i>Home
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.fiverr.com/share/qb8D02">
                                        <i className="fa fa-angle-double-right"></i>About
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.fiverr.com/share/qb8D02">
                                        <i className="fa fa-angle-double-right"></i>FAQ
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.fiverr.com/share/qb8D02">
                                        <i className="fa fa-angle-double-right"></i>Get Started
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.fiverr.com/share/qb8D02">
                                        <i className="fa fa-angle-double-right"></i>Videos
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <h5>Quick links</h5>
                            <ul className="list-unstyled quick-links">
                                <li>
                                    <a href="https://www.fiverr.com/share/qb8D02">
                                        <i className="fa fa-angle-double-right"></i>Home
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.fiverr.com/share/qb8D02">
                                        <i className="fa fa-angle-double-right"></i>About
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.fiverr.com/share/qb8D02">
                                        <i className="fa fa-angle-double-right"></i>FAQ
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.fiverr.com/share/qb8D02">
                                        <i className="fa fa-angle-double-right"></i>Get Started
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.fiverr.com/share/qb8D02">
                                        <i className="fa fa-angle-double-right"></i>Videos
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <h5>Quick links</h5>
                            <ul className="list-unstyled quick-links">
                                <li>
                                    <a href="https://www.fiverr.com/share/qb8D02">
                                        <i className="fa fa-angle-double-right"></i>Home
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.fiverr.com/share/qb8D02">
                                        <i className="fa fa-angle-double-right"></i>About
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.fiverr.com/share/qb8D02">
                                        <i className="fa fa-angle-double-right"></i>FAQ
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.fiverr.com/share/qb8D02">
                                        <i className="fa fa-angle-double-right"></i>Get Started
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://wwwe.sunlimetech.com"
                                        title="Design and developed by">
                                        <i className="fa fa-angle-double-right"></i>Imprint
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                            <ul className="list-unstyled list-inline social text-center">
                                <li className="list-inline-item">
                                    <a href="https://www.fiverr.com/share/qb8D02">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.fiverr.com/share/qb8D02">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.fiverr.com/share/qb8D02">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.fiverr.com/share/qb8D02">
                                        <i className="fa fa-google-plus"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.fiverr.com/share/qb8D02" target="_blank">
                                        <i className="fa fa-envelope"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                            <p>
                                <u>
                                    <a href="https://www.nationaltransaction.com/">
                                        National Transaction Corporation
                                    </a>
                                </u>{' '}
                                is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned
                                subsidiary of U.S. Bancorp, Minneapolis, MN]
                            </p>
                            <p className="h6">
                                © All right Reversed.
                                <a
                                    className="text-green ml-2"
                                    href="https://www.sunlimetech.com"
                                    target="_blank">
                                    Sunlimetech
                                </a>
                            </p>
                        </div>
                        <hr />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MainLayout;
