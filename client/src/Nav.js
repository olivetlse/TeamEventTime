import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
    <nav>
        <ul className="nav nav-tabs">
        <li className="nav-item pr-3 pt-3 pb-3">
                <Link to="/">Accueil</Link>
            </li>
            <li className="nav-item pr-3 pt-3 pb-3">
                <Link to="/">Psychiatre</Link>
            </li>
            <li className="nav-item pr-3 pt-3 pb-3">
                <Link to="/create">Formulaire</Link>
            </li>
            <li className="nav-item ml-auto pr-3 pt-3 pb-3">
                <Link to="/login">Connexion</Link>
            </li>
        </ul>
    </nav>
);

export default Nav;
