import React from 'react';

import './Button.scss';

const Button = ({children}) => {
    return (
        <>
            <button className="primary-button">{ children }</button>
        </>
    );
}

export default Button;