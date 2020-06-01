//CORE
import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';

//COMPONENTS
import ButtonBack from '../ButtonBack/ButtonBack';
import ButtonSound from '../ButtonSound/ButtonSound';

//STYLES
import Styles from './Balda.module.css';

//UTILS
import { checkBalda } from '../../utils/helperFunctions';

//DATA
import {baldaArray} from '../../data/baldaArray';


const Balda = () => {

    const history = useHistory();

    const [balda, setBalda] = useState([...baldaArray]);
    const [word, setWord] = useState([]);
    const [listWords, setListWords] = useState([]);
    const [gameOver, setGameOver] = useState({player_one: 0, player_two: 0, finish: false});

    useEffect(() => {
        document.body.addEventListener('keydown', saveWord);
        return function() {
            document.body.removeEventListener('keydown', saveWord);
        };
    }, [word]);

    useEffect(() => {
        whoIsWin(balda);
    }, [balda]);

    const onRestart = () => {
        setBalda(baldaArray);
        setWord([]);
        setListWords([]);
        setGameOver({player_one: 0, player_two: 0, finish: false});
    };

    const onChangeLetter = (idx, e) => {
        const regexp = /^[а-я]$/i;
        if (e.target.value.search(regexp) === -1) {
            return;
        }
        setBalda([...balda.slice(0, idx), {...balda[idx], letter: e.target.value.toUpperCase()}, ...balda.slice(idx + 1)]);
    };

    const onClearLetter = (idx, e) => {
        e.preventDefault();
        setBalda([...balda.slice(0, idx), {...balda[idx], letter: ''}, ...balda.slice(idx + 1)]);
    };

    const onSelectionWord = (letter, idx) => () => {
        setBalda([...balda.slice(0, idx), {...balda[idx], selected: true}, ...balda.slice(idx + 1)]);
        const oldLetterIdx = word.findIndex(({id}) => id === idx);
        if (oldLetterIdx >= 0) {
            return;
        }
        setWord([...word, {id: idx, letter: letter}]);
    };

    const onClearSelectionWord = (idx) => () => {
        setBalda([...balda.slice(0, idx), {...balda[idx], selected: false}, ...balda.slice(idx + 1)]);
    };

    const saveWord = (e) => {
        if (e.code === 'Enter') {
            const someWord = listWords.findIndex(({wrd}) => wrd === word.map(({letter}) => letter).join(''));
            if (someWord >= 0) {
                setWord([]);
                const newBaldaArray = balda.map( item => item.selected === true ? {...item, selected: false} : item);
                setBalda([...newBaldaArray]);
                return;
            }
            setListWords([...listWords, {wrd: word.map(({letter}) => letter).join(''), length: word.map(({letter}) => letter).length }]);
            setWord([]);
            const newBaldaArray = balda.map( item => item.selected === true ? {...item, selected: false} : item);
            setBalda([...newBaldaArray]);
        }
    };

    const whoIsWin = (arr) => {
        if (checkBalda(arr) === 0) {
            setGameOver((gameOver) => {
                return {
                    ...gameOver,
                    player_one: listWords.filter((item, idx) =>  idx === 0 || idx%2 === 0).reduce((initialValue, prev) => {
                        return initialValue + prev.length;
                    }, 0),
                    player_two:  listWords.filter((item, idx) =>  idx === 1 || idx%2 !== 0).reduce((initialValue, prev) => {
                        return initialValue + prev.length;
                    }, 0),
                    finish: true
                };
            });
        }
    };

    const onEndgame = () => {
        setGameOver((gameOver) => {
            return {
                ...gameOver,
                player_one: listWords.filter((item, idx) =>  idx === 0 || idx%2 === 0).reduce((initialValue, prev) => {
                    return initialValue + prev.length;
                }, 0),
                player_two:  listWords.filter((item, idx) =>  idx === 1 || idx%2 !== 0).reduce((initialValue, prev) => {
                    return initialValue + prev.length;
                }, 0),
                finish: true
            };
        });
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
                            <ButtonSound nameGame={ history.location.pathname }/>
                        </div>
                        <div className={ Styles.restart_wrap } style={ {justifyContent: 'flex-end'} }>
                            <div className={ Styles.restart_btn }
                                 style={ {marginRight: '10px'} }
                                 onClick={ onEndgame }
                            >
                                Endgame
                            </div>
                        </div>
                    </div>
                    <div className={ Styles.container }>
                        {
                            balda.map(({id, letter, selected}, idx) => {
                                return !letter ?
                                    <input key={ id }
                                           className ={ Styles.cell }
                                           type='text'
                                           value={ letter }
                                           maxLength={ 1 }
                                           onChange={ (e) => onChangeLetter(idx, e) }
                                    /> :
                                    <div key={ id }
                                         className={ Styles.cell }
                                         style={ selected ? {background: '#f8ffae', cursor: 'pointer'} : {background: '#bcffb6', cursor: 'pointer'} }
                                         onContextMenu={ (e) => onClearLetter(idx, e) }
                                         onClick={ onSelectionWord(letter, idx) }
                                         onDoubleClick={ onClearSelectionWord(idx) }
                                    >
                                        { letter }
                                    </div>
                                ;
                            })
                        }
                    </div>
                </div>
                <div className={ Styles.table_board }>
                    <div className={ Styles.first_player }>
                        <div className={ Styles.table_header }>Игрок №1</div>
                        <div className={ Styles.table_list }>
                            {
                                listWords.map(({wrd, length}, idx) => {
                                    return idx === 0 || idx%2 === 0 ? <div key={ wrd }>{`${wrd} - ${length}`}</div> : null
                                })
                            }
                        </div>
                        {
                            !checkBalda(balda) || gameOver.finish ? <div className={ Styles.table_result}>
                                <span className={ Styles.table_result_title }>Результат: </span>
                                <span className={ Styles.table_result_sum }>
                                    {
                                        listWords.length ?
                                            listWords.filter((item, idx) =>  idx === 0 || idx%2 === 0).reduce((initialValue, prev) => {
                                                return initialValue + prev.length;
                                            }, 0) ?
                                                listWords.filter((item, idx) =>  idx === 0 || idx%2 === 0).reduce((initialValue, prev) => {
                                                    return initialValue + prev.length;
                                                }, 0) : null
                                        : null
                                    }
                                </span>
                            </div> : null
                        }
                        {
                            gameOver.player_one > gameOver.player_two  ?
                                <div className={ Styles.game_over }>Win!</div> : null
                        }
                    </div>
                    <div className={ Styles.second_player }>
                        <div className={ Styles.table_header }>Игрок №2</div>
                        <div className={ Styles.table_list }>
                            {
                                listWords.map(({wrd, length}, idx) => {
                                    return idx === 1 || idx%2 !== 0 ? <div key={ wrd }>{`${wrd} - ${length}`}</div> : null
                                })
                            }
                        </div>
                        {
                            !checkBalda(balda) || gameOver.finish ? <div className={Styles.table_result}>
                                <span className={Styles.table_result_title}>Результат: </span>
                                <span className={Styles.table_result_sum}>
                                    {
                                        listWords.length ?
                                            listWords.filter((item, idx) => idx === 1 || idx % 2 !== 0).reduce((initialValue, prev) => {
                                                return initialValue + prev.length;
                                            }, 0) ?
                                                listWords.filter((item, idx) => idx === 1 || idx % 2 !== 0).reduce((initialValue, prev) => {
                                                    return initialValue + prev.length;
                                                }, 0) : null
                                            : null
                                    }
                                </span>
                            </div> : null
                        }
                        {
                            gameOver.player_one < gameOver.player_two  ?
                                <div className={ Styles.game_over }>Win!</div> : null
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Balda;

