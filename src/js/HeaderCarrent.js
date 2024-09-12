import React, {useContext, useEffect, useState} from "react"
/*
import {FiX, FiMenu} from "react-icons/fi";
import {AppContext} from "../../appContext";
import {getTranslation} from "../../utils/helper";
import {Dropdown} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
*/

function HeaderCarrent() {
    return (
        <header className="header-area formobile-menu header--transparent">
            <div className="header-wrapper" id="header-wrapper">
                <div className="container">
                    <div className="row align-items-center">
                                <nav className="navbar d-lg-block navbar-expand-lg">
                                    <div className="container-fluid">
                                            <a className="navbar-brand d-flex align-content-start"
                                               href="#">
                                                <img src="../logo192.png" alt="company" width="64" height="64"
                                                     className="d-inline-block align-text-bottom"/>
                                                <b className="navbar-text p-3"> VMMP s.r.o.</b>
                                            </a>
                                            <ul className="nav justify-content-end">
                                                <li className="nav-item"><a className="nav-link" href="#"></a></li>
                                                <li className="nav-item"><a href="#carlist"
                                                                            className="nav-link">Auta</a></li>
                                                <li className="nav-item"><a href="#contacts"
                                                                            className="nav-link">Kontakty</a></li>
                                            </ul>
                                    </div>
                                </nav>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default HeaderCarrent;