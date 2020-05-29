//CORE
import React from 'react';
import { NavLink } from "react-router-dom";

//STYLES
import Styles from './Menu.module.css';

const Menu = () => {
    return (
        <div className={ Styles.menu }>
            <NavLink to='fifteens' className={ `${Styles.link} ${Styles.bg_yellow}` }>
                <span className={ Styles.link_name }>Fifteens</span>
            </NavLink>
            <NavLink to='couples'  className={ `${Styles.link} ${Styles.bg_red}` }>
                <span className={ Styles.link_name }>Couples</span>
            </NavLink>
            <NavLink to='balda' className={ `${Styles.link} ${Styles.bg_green}` }>
                <span className={ Styles.link_name }>Balda</span>
            </NavLink>
            <NavLink to='surtur_dungeon'  className={ `${Styles.link} ${Styles.bg_blue}` }>
                <span className={ Styles.link_name }>Surtur's Dungeon</span>
            </NavLink>
        </div>
    );
};

export default Menu;
