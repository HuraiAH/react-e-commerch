import React from 'react';
import './logo.css';
import logoSearchBar from '../../../images/logo.png'

const logo = ()=> {
    return (
        <div className='container-fluid search_wrap d-flex align-items-center justify-content-center mt-2'>
            <img src={logoSearchBar} alt="/" className='img-fluid' />
            <input type="text" placeholder='search in baraz' />
            <button>search</button>
            
        </div>
    );
}

export default logo;