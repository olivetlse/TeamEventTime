import React from 'react';
import { Link } from 'react-router-dom';
var imageName = require('./images.png')
const Nav = () => (
    
    <nav>
        <ul className="nav nav-tabs">
        <img style={{width : '100px'}} src={imageName}/>  
        <li className="nav-item pr-3 pt-3 pb-3">
                <Link to="/Acc">Accueil</Link>
            </li>
            <li className="nav-item pr-3 pt-3 pb-3">
                <Link to="/create">Formulaire</Link>
            </li>
            <li className="nav-item pr-3 pt-3 pb-3">
                <Link to="/">Reponses</Link>
            </li>
            <li className="nav-item pr-3 pt-3 pb-3">
                <Link to="/Psy">Psychiatre</Link>
            </li> 
            <li className="nav-item ml-auto pr-3 pt-3 pb-3">
                <Link to="/login">Connexion</Link>
            </li>
        </ul>
    </nav>
);

export default Nav;
