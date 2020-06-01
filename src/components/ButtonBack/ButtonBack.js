//CORE
import React from 'react';
import {Link} from 'react-router-dom';

//STYLES
import Styles from './ButtonBack.module.css';

const ButtonBack = ({marginLeft, marginTop}) => {
    const marginStyle = {
        marginLeft: `${marginLeft}px`,
        marginTop: `${marginTop}px`
    };
    return <Link to='/' style={marginStyle} className={ Styles.back}>Back</Link>;
};

export default ButtonBack;