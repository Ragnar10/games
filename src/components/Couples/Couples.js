//CORE
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { flipInY } from 'react-animations';

//COMPONENTS
import ButtonBack from '../ButtonBack/ButtonBack';
import ButtonSound from '../ButtonSound/ButtonSound';

//STYLES
import Styles from './Couples.module.css';

//UTILS
import {shuffle, checkCouples, setImages} from '../../utils/helperFunctions';

//DATA
import {couplesArray} from '../../data/couplesArray';

const Couples = () => {

    const history = useHistory();

    const [couples, setCouples] = useState([...couplesArray, ...couplesArray]);
    const [counter, setCounter] = useState(0);
    const [animate, setAnimate] = useState('');

    useEffect(() => {
        setCouples([...shuffle(couples)]);
    }, []);

    const onRestart = () => {
        setCouples([...shuffle(couples.map(item => ({...item, isShow: false, isOpen: false}) ))]);
        setCounter(0);
        setAnimate('');
    };

    const onShow = (idx) => () => {
        const isOpenArray = couples.filter(item => item.isOpen === true);
        if (isOpenArray.length === 2) {
            return;
        }

        if (couples[idx].isShow === true) {
            return;
        }

        const checkIsOpen = couples.findIndex(item => item.isOpen === true);
        if (checkIsOpen < 0) {
            setCouples([...couples.slice(0, idx), {...couples[idx], isOpen: true}, ...couples.slice(idx + 1)]);
        }

        const newCouples = couples;
        if (checkIsOpen >= 0) {
            if (checkIsOpen === idx) {
                return;
            }
            setCouples([...couples.slice(0, idx), {...couples[idx], isOpen: true}, ...couples.slice(idx + 1)]);
            if (couples[checkIsOpen].id !== couples[idx].id) {
               setTimeout(() => {
                    newCouples[idx].isOpen = false;
                    newCouples[checkIsOpen].isOpen = false;
                    setCouples([...newCouples])
                }, 1500);
            } else {
                newCouples[idx].isOpen = false;
                newCouples[checkIsOpen].isOpen = false;
                newCouples[idx].isShow = true;
                newCouples[checkIsOpen].isShow = true;
                setCouples([...newCouples])
            }
        }

        setCounter(counter + 1);
        setAnimate(idx);
    };

    const Flip = styled.div`animation: 1s ${keyframes`${flipInY}`}`;

    return (
        <div className={ Styles.wrapper }>
            <ButtonBack/>
            <div className={ Styles.header }>
                <div className={ Styles.restart_wrap }>
                    <div className={ Styles.restart_btn }
                         onClick={onRestart}
                    >
                        Restart
                    </div>
                    <ButtonSound nameGame={ history.location.pathname }/>
                </div>
                <div className={ Styles.counter_wrap }>
                    <div className={ Styles.counter }>
                        Количество попыток: <span className={ Styles.counter_total }>{Math.floor(counter / 2)}</span>
                    </div>
                </div>
            </div>
            <div className={ Styles.container }>
                {
                    couples.map(({id, image, isOpen, isShow}, idx) => {
                        return (
                            idx === animate ?
                                <Flip key={ idx }><div
                                     className={ Styles.cell }
                                     style={ isOpen || isShow ? setImages(image, '200%', 'center center') : null }
                                     onClick={ onShow(idx) }
                                /></Flip> :
                                <div key={ idx }
                                     className={ Styles.cell }
                                     style={ isOpen || isShow ? setImages(image, '200%', 'center center') : null }
                                     onClick={ onShow(idx) }
                                />
                        );
                    })
                }
                {
                    checkCouples(couples) ?
                        <div className={ Styles.game_over }>Congratulations!</div> : null
                }
            </div>
        </div>
    );
};

export default Couples;

