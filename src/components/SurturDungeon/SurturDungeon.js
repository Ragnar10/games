//CORE
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

//COMPONENTS
import ButtonBack from '../ButtonBack/ButtonBack';
import SurturQuestion from './SurturQuestion/SurturQuestion';

//STYLES
import Styles from './SurturDungeon.module.css';

//IMAGES
import thorNormal from '../../assets/images/thor_normal.gif';
import thorAttack from '../../assets/images/thor_attack.gif';
import thorWin from '../../assets/images/thor_win.gif';
import mjolnirCrashed from '../../assets/images/mjolnir_crashed.png';

//UTILS

//DATA
import {surturDungeonArray} from "../../data/surturDungeonArray";

const SurturDungeon = () => {

    const [surturDungeon, setSurturDungeon] = useState(surturDungeonArray);
    const [thor, setThor] = useState({name: 'Thor', hpValue: 100, image: {thorNormal, thorAttack}});

    useEffect(() => {
        setSurturDungeon([...surturDungeonArray]);
    }, []);

    const onRestart = () => {
        setSurturDungeon([...surturDungeonArray]);
        setThor({name: 'Thor', hpValue: 100, image: {thorNormal, thorAttack}});
    };

    const setImages = (image, size) => {
        return {
            backgroundImage: `url(${image}`,
            backgroundSize: `${size}`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
        };
    };

    const onPortal = (idx, countAttempt, isDefeated) => {
        const portalTopIdxArray = surturDungeon.map((item, idx) => item.fieldName === 'portalTop' ? idx : null).filter(item => item > 0);
        const portalDownIdxArray = surturDungeon.map((item, idx) => item.fieldName === 'portalDown' ? idx : null).filter(item => item > 0);
        const newSurturDungeon = surturDungeon;
            // Portal Top
        if (portalTopIdxArray[0] < portalTopIdxArray[1] && portalTopIdxArray[1] === idx && isDefeated === true) {
            newSurturDungeon[idx] = {...newSurturDungeon[idx], visited: false};
            newSurturDungeon[portalTopIdxArray[0]] = {...newSurturDungeon[portalTopIdxArray[0]], visited: true};
            setSurturDungeon([...newSurturDungeon]);
            console.log(surturDungeon[idx]);
            return;
        }
           // Portal Down
        if (portalDownIdxArray[0] < portalDownIdxArray[1] && portalDownIdxArray[0] === idx && isDefeated === false && countAttempt === 0) {
            newSurturDungeon[idx] = {...newSurturDungeon[idx], visited: false};
            newSurturDungeon[portalDownIdxArray[1]] = {...newSurturDungeon[portalDownIdxArray[1]], visited: true};
            setSurturDungeon([...newSurturDungeon]);
        }

    };

    const onMove = (idx) => () => {
        const oldIdx = surturDungeon.findIndex(item => item.visited === true);
        const newSurturDungeon = surturDungeon;
        if (newSurturDungeon[idx].fieldName === 'health' && newSurturDungeon[idx].used === false && thor.hpValue !== 100) {
            const overHp = thor.hpValue + newSurturDungeon[idx].hpValue;
            setThor((thor) => ({...thor, hpValue: overHp < 100 ? thor.hpValue + newSurturDungeon[idx].hpValue : 100}));
            newSurturDungeon[idx] = {...newSurturDungeon[idx], used: true};
            setSurturDungeon([...newSurturDungeon]);
        }
            // Steps
        if (newSurturDungeon[oldIdx].attempt > 0 && newSurturDungeon[oldIdx].defeated === false ) {
            return false;
        }
        if (Math.abs(oldIdx - idx) !== 1 && Math.abs(oldIdx - idx) !== 5) {
            return false;
        } else {
            newSurturDungeon[oldIdx] = {...newSurturDungeon[oldIdx], visited: false};
            newSurturDungeon[idx] = {...newSurturDungeon[idx], visited: true};
            setSurturDungeon([...newSurturDungeon]);
        }
    };

    const onChangeAttemptDefeated = (id, countAttempt, isDefeated, next) => {
        const idx = surturDungeon.findIndex(item => item.id === id);

        if ( surturDungeon[idx].fieldName !== 'portalTop' && surturDungeon[idx].fieldName !== 'portalDown') {
            if (countAttempt === 0 && isDefeated === false) {
                const belowHp = thor.hpValue - surturDungeon[idx].hpValue;
                setThor({...thor, hpValue: belowHp < 0 ? 0 : thor.hpValue - surturDungeon[idx].hpValue});
                setSurturDungeon([...surturDungeon.slice(0, idx), {
                    ...surturDungeon[idx],
                    attempt: 3
                }, ...surturDungeon.slice(idx + 1)]);
                return;
            } else if (countAttempt === 1 && isDefeated === true) {
                const belowHp = thor.hpValue - surturDungeon[idx].hpValue / 5;
                setThor({...thor, hpValue: belowHp < 0 ? 0 :  thor.hpValue - surturDungeon[idx].hpValue / 5});
            } else if (countAttempt === 0 && isDefeated === true) {
                const belowHp = thor.hpValue - surturDungeon[idx].hpValue / 2;
                setThor({...thor, hpValue: belowHp < 0 ? 0 :  thor.hpValue - surturDungeon[idx].hpValue / 2});
            }
        }

        setSurturDungeon([...surturDungeon.slice(0, idx), {...surturDungeon[idx], attempt: countAttempt, defeated: isDefeated, nextStep: next}, ...surturDungeon.slice(idx + 1)]);

        if (surturDungeon[idx].fieldName === 'portalDown' && countAttempt === 0 && isDefeated === false) {
            setSurturDungeon([...surturDungeon.slice(0, idx), {...surturDungeon[idx], attempt: 0, defeated: true}, ...surturDungeon.slice(idx + 1)]);

        }
    };

    const Moved = styled.div`animation: 1s ${keyframes`${fadeIn}`}`;
    const ShowQuestion = styled.div`animation: 1s ${keyframes`${fadeIn}`}`;

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
                            surturDungeon.map((item, idx) => {
                                return item.visited ?
                                    <Moved key={ item.id }><div
                                         className={ Styles.cell }
                                         onClick={ onMove(idx) }
                                         style={
                                             item.fieldName === 'exit' ?
                                                 setImages(item.image, '150%') :
                                                 item.defeated === false || item.used === false || item.fieldName === 'portalTop' || item.fieldName === 'portalDown' || item.fieldName === 'enter' || item.fieldName === 'exit' ?
                                                     setImages(item.image, 'contain') : null
                                         }
                                    >
                                        {
                                            item.visited ?
                                                <div className={ Styles.thor }
                                                     style={ item.attempt > 0 && item.defeated === false ? setImages(thor.image.thorAttack, '200%') : setImages(thor.image.thorNormal, 'contain') }
                                                /> : null
                                        }
                                    </div></Moved> :
                                    <div key={ item.id }
                                         className={ Styles.cell }
                                         onClick={onMove(idx)}
                                         style={
                                             item.fieldName === 'exit' ?
                                                 setImages(item.image, '150%') :
                                                 item.defeated === false || item.used === false || item.fieldName === 'portalTop' || item.fieldName === 'portalDown' || item.fieldName === 'enter' || item.fieldName === 'exit' ?
                                                     setImages(item.image, 'contain') : null
                                         }
                                    >
                                    </div>
                            })
                        }
                        {
                            thor.hpValue <= 0 ?
                                <div className={ Styles.game_over }>
                                    Game Over! <span className={ Styles.mjolnir } style={ setImages(mjolnirCrashed, 'contain') }/>
                                </div> : null
                        }
                        {
                            surturDungeon[0].visited && surturDungeon[0].defeated === true && thor.hpValue > 0 ?
                                <div className={ Styles.game_over } style={ setImages(thorWin, '150%') }>Congratulations!</div> : null
                        }
                    </div>
                </div>
                <div className={ Styles.info_board }>
                    {
                        surturDungeon.find(item => item.visited === true).question && surturDungeon.find(item => item.visited === true).defeated === false ?
                            surturDungeon.filter(item => item.visited === true).map(item => {
                                return (
                                    <ShowQuestion style={ {width: 500, minHeight: '60%'} } key={item.id}>
                                        <SurturQuestion id={ item.id }
                                                    question={ item.question }
                                                    answer={ item.answer }
                                                    attempt={ item.attempt }
                                                    defeated={ item.defeated }
                                                    person={ item.personImage ? item.personImage : item.image }
                                                    name={ item.fieldName }
                                                    onPortal={ onPortal }
                                                    onChangeAttemptDefeated={ onChangeAttemptDefeated }
                                        />
                                    </ShowQuestion>
                            )}) :
                            <div style={ {width: 500, height: '45%'} }/>
                    }
                    <div className={ Styles.thor_stat }>
                        <div className={ Styles.thor_wrapper }>
                            { thor.name }
                            <div className={ Styles.thor_model }/>
                        </div>
                        <div className={ Styles.health }
                             style={ thor.hpValue === 100 ? {background: '#ad0300' } :
                                 {background: `linear-gradient(to bottom, transparent ${100 - thor.hpValue}%, #ad0300 ${thor.hpValue}%)`} }
                        >
                            <span style={ {display: 'block'} }>{ thor.hpValue }</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SurturDungeon;


