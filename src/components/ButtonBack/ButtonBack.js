//CORE
import React from 'react';
import {Link} from 'react-router-dom';

//STYLES
import Styles from './ButtonBack.module.css';

const ButtonBack = ({width}) => {
    const backStyle = {
        width: `${width}`
    };
    return <Link to='/' style={backStyle} className={ Styles.back}>Back</Link>;
};

export default ButtonBack;