import React, { useState } from 'react';
import axios from 'axios';
import Nav from './Nav';

const Create = () => {
    // state
    const [state, setState] = useState({
        title: '',
        content: '',
        contents: '',
        user: ''
    });
    // destructure values from state
    const { title, content, contents, user } = state;

    // onchange event handler
    const handleChange = name => event => {
        // console.log('name', name, 'event', event.target.value);
        setState({ ...state, [name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        // console.table({ title, content, user });
        axios
            .post(`${process.env.REACT_APP_API}/post`, { title, content, contents, user })
            .then(response => {
                console.log(response);
                // empty state
                setState({ ...state, title: '', content: '', contents: '', user: '' });
                // show sucess alert
                alert(`Post titled ${response.data.title} is created`);
            })
            .catch(error => {
                console.log(error.response);
                alert(error.response.data.error);
            });
    };

    return (
        <div className="container pb-5">
            <Nav />
            <br />
            <h1>Santé au travail</h1>
            <br />

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="text-muted">Ressentez vous souvent l'angoisse du dimanche soir </label>
                    <div>
                    <button onclick="isConfirm(true)">Oui</button>
                    <button onclick="isConfirm(false)">Non</button> 
                    </div>


                    <textarea
                        onChange={handleChange('title')}
                        value={title}
                        type="text"
                        className="form-control"
                        placeholder="Veillez fournir plus de détails si vous le souhaitez..."
                    />
                    
                </div>
                
                <div className="form-group">
                    <label className="text-muted">Ressentez vous de l'enxieté quand vous devez parler de votre travail</label>
                    <div>
                    <button onclick="isConfirm(true)">Oui</button>
                    <button onclick="isConfirm(false)">Non</button> 
                    </div>
                    <textarea
                        onChange={handleChange('content')}
                        value={content}
                        type="text"
                        className="form-control"
                        placeholder="Veillez fournir plus de détails si vous le souhaitez..."
                    />
                </div>
                <div className="form-group">
                    <label className="text-muted">Vous sentez vous utile au travail ?</label>
                    <div>
                    <button onclick="isConfirm(true)">Oui</button>
                    <button onclick="isConfirm(false)">Non</button> 
                    </div>
                    <textarea
                        onChange={handleChange('contents')}
                        value={contents}
                        type="text"
                        className="form-control"
                        placeholder="Veillez fournir plus de détails si vous le souhaitez..."
                    />
                </div>
                <div className="form-group">
                    <label className="text-muted">Identifiant employé</label>
                    
                    <input
                        onChange={handleChange('user')}
                        value={user}
                        type="text"
                        className="form-control"
                        placeholder="Veillez saisir votre identifiant"
                    />
                </div>
                <div>
                    <button className="btn btn-primary">Soumettre</button>
                </div>
            </form>
        </div>
    );
};

export default Create;
