//CORE
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { bounceIn } from 'react-animations';

//COMPONENTS
import ButtonBack from '../ButtonBack/ButtonBack';
import ButtonSound from '../ButtonSound/ButtonSound';
import ButtonOptions from '../ButtonOptions/ButtonOptions';
import Options from  '../Options/Options';

//STYLES
import Styles from './Fifteens.module.css';

//UTILS
import {shuffle, checkFifteens} from '../../utils/helperFunctions';

//DATA
import {fifteenArray} from '../../data/fifteenArray';

const Fifteens = () => {

    const history = useHistory();

    const [fifteen, setFifteen] = useState(fifteenArray);
    const [counter, setCounter] = useState(0);
    const [animate, setAnimate] = useState('');
    const [options, setOptions] = useState(false);

    useEffect(() => {
        setFifteen([...shuffle(fifteen)]);
        document.body.addEventListener('keydown', onKeyMove);
        return function() {
            document.body.removeEventListener('keydown', onKeyMove);
        };
    }, []);

    useEffect(() => {
        document.body.addEventListener('keydown', onKeyMove);
        return function() {
            document.body.removeEventListener('keydown', onKeyMove);
        };
    }, [counter]);

    const onRestart = () => {
        setFifteen([...shuffle(fifteen)]);
        setCounter(0);
        setAnimate(0);
    };

    const onMove = (item, id) => () => {
        if ( item === 0) {
            return false;
        }
        const newFifteen = fifteen;
        const zeroId = newFifteen.findIndex(item => item === 0);

        if ( zeroId === 3 && id === 4 ||
             zeroId === 7 && id === 8 ||
             zeroId === 11 && id === 12 ||
             zeroId === 4 && id === 3 ||
             zeroId === 8 && id === 7 ||
             zeroId === 12 && id === 11 ) {
            return false;
        }

        if ( Math.abs(zeroId - id) !== 4 && Math.abs(zeroId - id) !== 1 ) {
            return false;
        } else {
            newFifteen[zeroId] = item;
            newFifteen[id] = 0;

            setFifteen([...newFifteen]);
            setCounter(counter + 1);
            setAnimate(item);
        }
    };

    const onKeyMove = (e) => {
        if (e.code === 'ArrowDown') {
            const newFifteen = fifteen;
            const zeroId = newFifteen.findIndex(item => item === 0);
            if (zeroId < 4 ) {
                return false;
            }
            const zero = newFifteen[zeroId];
            const item = newFifteen[zeroId - 4];
            newFifteen[zeroId] = item;
            newFifteen[zeroId - 4] = zero;

            setFifteen([...newFifteen]);
            setCounter(counter + 1);
            setAnimate(item);
        } else if (e.code === 'ArrowUp') {
            const newFifteen = fifteen;
            const zeroId = newFifteen.findIndex(item => item === 0);
            if (zeroId > 11 ) {
                return false;
            }
            const zero = newFifteen[zeroId];
            const item = newFifteen[zeroId + 4];
            newFifteen[zeroId] = item;
            newFifteen[zeroId + 4] = zero;

            setFifteen([...newFifteen]);
            setCounter(counter + 1);
            setAnimate(item);
        } else if (e.code === 'ArrowLeft') {
            const newFifteen = fifteen;
            const zeroId = newFifteen.findIndex(item => item === 0);
            if (zeroId === 3 || zeroId === 7 || zeroId === 11 || zeroId === 15) {
                return false;
            }
            const zero = newFifteen[zeroId];
            const item = newFifteen[zeroId + 1];
            newFifteen[zeroId] = item;
            newFifteen[zeroId + 1] = zero;

            setFifteen([...newFifteen]);
            setCounter(counter + 1);
            setAnimate(item);
        } else if (e.code === 'ArrowRight') {
            const newFifteen = fifteen;
            const zeroId = newFifteen.findIndex(item => item === 0);
            if (zeroId === 0 || zeroId === 4 || zeroId === 8 || zeroId === 12) {
                return false;
            }
            const zero = newFifteen[zeroId];
            const item = newFifteen[zeroId - 1];
            newFifteen[zeroId] = item;
            newFifteen[zeroId - 1] = zero;

            setFifteen([...newFifteen]);
            setCounter(counter + 1);
            setAnimate(item);
        }
    };

    const onShowOptions = () => {
        setOptions((options) => !options);
    };

    const Bounce = styled.div`animation: .5s ${keyframes`${bounceIn}`}`;

    return (
        <>
            {
                !options ?
                    <div className={ Styles.wrapper }>
                        <div>
                            <ButtonBack/>
                            <ButtonOptions onShowOptions={ onShowOptions } text={ 'Options' }/>
                        </div>
                        <div className={ Styles.header }>
                            <div className={ Styles.restart_wrap }>
                                <div className={ Styles.restart_btn }
                                     onClick={ onRestart }
                                >
                                    Restart
                                </div>
                                <ButtonSound nameGame={ history.location.pathname }/>
                            </div>
                            <div className={ Styles.counter_wrap }>
                                <div className={ Styles.counter }>
                                    Количество ходов: <span className={ Styles.counter_total }>{ counter }</span>
                                </div>
                            </div>
                        </div>
                        <div className={ Styles.container }>
                            {
                                fifteen.map((item, id) => {
                                    return item !== 0 ? item === animate ?
                                        <Bounce>
                                            <div key={ item}
                                                 className={ Styles.cell }
                                                 style={ item === id + 1 ? trueCell : null }
                                                 onClick={ onMove(item, id)}
                                            >{ item }</div>
                                        </Bounce> :
                                        <div key={ item}
                                             className={ Styles.cell }
                                             style={ item === id + 1 ? trueCell : null }
                                             onClick={ onMove(item, id)}
                                        >{ item }</div> :
                                        <div className={ `${Styles.cell} ${Styles.cell_zero}`} key={ item }/>;
                                })
                            }
                            {
                                checkFifteens(fifteen) ?
                                    <div className={ Styles.game_over }>Congratulations!</div> : null
                            }
                        </div>
                    </div> : <Options nameGame={ history.location.pathname } textButton={ 'Назад' } onShowOptions={ onShowOptions }/>
            }
        </>
    );
};

export default Fifteens;

const trueCell = {
    background: 'linear-gradient(125deg, rgba(254,182,182,1) 0%, rgba(255,126,103,1) 50%, rgba(255,121,67,1) 100%)',
    boxShadow: '2px 2px 5px rgb(205, 78, 79), -2px -2px 5px rgb(205, 78, 79)'
};