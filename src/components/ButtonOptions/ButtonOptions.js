//CORE
import React from 'react';
import {Link} from 'react-router-dom';

//STYLES
import Styles from './ButtonOptions.module.css';

const ButtonOptions = ({onShowOptions, text}) => {

    return <div className={ Styles.options_btn } onClick={ onShowOptions }>{ text }</div>;
};

export default ButtonOptions;