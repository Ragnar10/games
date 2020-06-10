//CORE
import React from 'react';

//COMPONENTS
import ButtonOptions from '../ButtonOptions/ButtonOptions';

//STYLES
import Styles from './Options.module.css';

//DATA
import { fifteensOptions, couplesOptions, baldaOptions, surtursOptions } from "../../data/options";

const Options = ({nameGame, onShowOptions, textButton}) => {

    const options = nameGame === '/fifteens' ? fifteensOptions: nameGame === '/couples' ? couplesOptions : nameGame === '/balda' ? baldaOptions : nameGame === '/surtur_dungeon' ? surtursOptions : null;

    return (
        <div className={ Styles.options_wrapper }>
            <div className={ Styles.options_controls }>
                <div className={ Styles.options_header }>Управление:</div>
                {
                    options ?
                        options.controls.map(item => {
                            return <div key={ item.id } className={ Styles.options_item }>{ `- ${item.control}` }</div>;
                        }) : null
                }
            </div>
            <div className={ Styles.options_missions }>
                <div className={ Styles.options_header }>Цель игры:</div>
                {
                    options ?
                        <div className={ Styles.options_item }>{ options.mission }</div> : null
                }
            </div>
            <ButtonOptions onShowOptions={ onShowOptions } text={ textButton }/>
        </div>
    );
};

export default Options;