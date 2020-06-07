//CORE
import React from 'react';
import { NavLink } from "react-router-dom";

//STYLES
import Styles from './Menu.module.css';

const Menu = () => {
    return (
        <div className={ Styles.menu }>
            <NavLink to='fifteens' className={ `${Styles.link} ${Styles.bg_fifteens}` }>
                <span className={ Styles.link_name }>Fifteens</span>
            </NavLink>
            <NavLink to='couples'  className={ `${Styles.link} ${Styles.bg_couples}` }>
                <span className={ Styles.link_name }>Couples</span>
            </NavLink>
            <NavLink to='balda' className={ `${Styles.link} ${Styles.bg_balda}` }>
                <span className={ Styles.link_name }>Balda</span>
            </NavLink>
            <NavLink to='surtur_dungeon'  className={ `${Styles.link} ${Styles.bg_dungeon}` }>
                <span className={ `${Styles.link_name} ${Styles.link_name_long}` }>{`Surtur's \n Dungeon`}</span>
            </NavLink>
        </div>
    );
};

export default Menu;
