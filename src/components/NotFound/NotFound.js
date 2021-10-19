import React from 'react';
import notfound from '../../images/404.png'
import './NotFound.css'



const NotFound = () => {
    return (
        <div>
            <img className ="tp-notfound-image" src={notfound} alt="" />
        </div>
    );
};

export default NotFound;