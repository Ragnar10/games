//CORE
import React, { useState } from 'react';

//COMPONENTS

//STYLES
import Styles from './SurturQuestion.module.css';

//UTILS

//DATA


const SurturQuestion = ({id, question, answer, attempt, defeated, person, name, onPortal, onChangeAttemptDefeated}) => {

    const [ourAnswer, setOurAnswer] = useState('');
    const [countAttempt, setCountAttempt] = useState(attempt);
    const [isDefeated, setIsDefeated] = useState(defeated);

    const onChangeAnswer = (e) => {
       setOurAnswer(e.target.value);
    } ;

    const onCheckedAnswer = () => {
        if (countAttempt === 0) {
            return false;
        }

        if (ourAnswer === answer) {
            setIsDefeated(true);
            setCountAttempt((countAttempt) => countAttempt - 1);
            setOurAnswer('');
        } else if (ourAnswer !== answer) {
            setCountAttempt((countAttempt) => countAttempt - 1);
            setOurAnswer('');
        }
    };

    const onSaveAnswer = () => {
        if (name === 'portalTop' || name === 'portalDown') {
            const idx = id - 1;
            onPortal(idx, countAttempt, isDefeated);
        }

        onChangeAttemptDefeated(id, countAttempt, isDefeated);
    };


    return (
        <div className={ Styles.question_wrapper }>
            <div className={ Styles.question }>
                <div className={ Styles.person_image} style={ {background: `url(${person}) no-repeat center`, backgroundSize: 'contain', backgroundColor: '#212121'} }/>
                <div className={ Styles.question_text }>{ question }</div>
            </div>
            <div className= { Styles.attempt }>
                <span className= { Styles.attempt_text }>Попытка: </span>
                { countAttempt }
            </div>
            <div className={ Styles.form }>
                {
                    !isDefeated ?
                        countAttempt > 0 ?
                            <>
                                <input type='text'
                                       maxLength={ 15 }
                                       value={ ourAnswer }
                                       className={ Styles.answer }
                                       onChange={ onChangeAnswer }
                                />
                                <div onClick={onCheckedAnswer} className={ `${Styles.save_btn} ${Styles.ok_btn}` }>Ok</div>
                            </> :
                                <div className={ Styles.wrong_answer }>{ name === 'portalTop' ? 'Sorry, Thor!': name === 'portalDown' ? 'Ahahahah, goodbye, Thor!' : 'Enemy win!'}</div> :
                            <div className={ Styles.true_answer }>{ name === 'portalTop' ? 'Bifrǫst!': name === 'portalDown' ? 'Arrrr, Thor, until next time!' : 'Enemy defeated!'}</div>
                }
            </div>
            <div onClick={ onSaveAnswer } className={ Styles.save_btn }>Save</div>
        </div>
    );
};

export default SurturQuestion;


