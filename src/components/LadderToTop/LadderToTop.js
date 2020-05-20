//CORE
import React, { useState, useEffect } from 'react';

//COMPONENTS
import ButtonBack from '../ButtonBack/ButtonBack';

//STYLES
import Styles from './LadderToTop.module.css';

//UTILS

//DATA
import {ladderTopArray} from "../../data/ladderTopArray";

const LadderToTop = () => {

    const [ladderTop, setLadderTop] = useState(ladderTopArray);


    const onRestart = () => {
        setLadderTop(ladderTopArray);
    };

    const onChangeValue = (idx, e) => {
        const regexp = /^[0-9]$/i;
        if (e.target.value.search(regexp) === -1) {
            return;
        }
        setLadderTop([...ladderTop.slice(0, idx), {...ladderTop[idx], value: e.target.value}, ...ladderTop.slice(idx + 1)]);
    };

    const onClearValue = (idx) => () => {
        setLadderTop([...ladderTop.slice(0, idx), {...ladderTop[idx], value: ''}, ...ladderTop.slice(idx + 1)]);
    };

    return (
        <>
            <ButtonBack marginLeft={ 110 } marginTop={ 20 } />
            <div className={ Styles.main }>
                <div className={ Styles.wrapper }>
                    <div className={ Styles.header }>
                        <div className={ Styles.restart_wrap }>
                            <div className={ Styles.restart_btn }
                                 onClick={ onRestart }
                            >
                                Restart
                            </div>
                        </div>
                    </div>
                    <div className={ Styles.container }>
                        {
                            ladderTop.map(({id, value, touched}, idx) => {
                                return !value ?
                                    <input key={ id }
                                           className ={ Styles.cell }
                                           type='text'
                                           value={ value }
                                           onChange={ (e) => onChangeValue(idx, e) }
                                    /> :
                                    <div key={ id }
                                         className={ Styles.cell }
                                         style={ touched ? {background: '#bcffb6', cursor: 'pointer'} : {background: '#f8ffae', cursor: 'pointer'} }
                                         onClick={  onClearValue(idx) }
                                    >
                                        { value }
                                    </div>
                                    ;
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default LadderToTop;

