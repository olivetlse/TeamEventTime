import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Acc = () => {
    var imageName = require('./c2.jpg')
    
  

    return (
        <div className="container pb-5">
            <Nav />
            <br />
            <br />
            <h3>Celui qui déplace la montagne, c’est celui qui commence par enlever les petites pierres!</h3>
            <br />
            <h6>Pour assurer votre bien etre qui est trés important au sein de notre entreprise nous vous propose de bien remplir ce formulaire qui est anonyme chaque fin de mois, si vous voulez aussi remonter des reclamations nous serons toujours à votre ecoute </h6>
            <img style={{width : '1000px'}} src={imageName}/>  
        </div>

    );
};

export default Acc;