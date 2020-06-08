//CORE
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { shake } from 'react-animations';

//COMPONENTS

//STYLES
import Styles from './SurturQuestion.module.css';

//UTILS

//DATA


const SurturQuestion = ({id, question, answer, attempt, defeated, person, name, wrongAnswer, onSetWrongAnswer, onPortal, onChangeAttemptDefeated}) => {

    const [ourAnswer, setOurAnswer] = useState('');

    const onChangeAnswer = (e) => {
        setOurAnswer(e.target.value);
    } ;

    const onSaveAnswer = () => {
        if (attempt === 0) {
            return false;
        }

        if (answer.findIndex(item => item === ourAnswer.toLowerCase()) >= 0) {
            if (name === 'portalTop' || name === 'portalDown') {
                const idx = id - 1;
                onPortal(idx, attempt - 1, true);
            }
            onChangeAttemptDefeated(id, attempt - 1, true);
            onSetWrongAnswer(false);
            setOurAnswer('');
        } else if (answer.findIndex(item => item === ourAnswer.toLowerCase()) === -1) {
            if (name === 'portalTop' || name === 'portalDown') {
                const idx = id - 1;
                onPortal(idx, attempt - 1, false);
            }
            onChangeAttemptDefeated(id, attempt - 1, false);
            onSetWrongAnswer(true);
            setOurAnswer('');
        }
    };


    return (
        <div className={ Styles.question_wrapper }>
            <div className={ Styles.question }>
                <div className={ Styles.person_image} style={ {background: `url(${person}) no-repeat center`, backgroundSize: 'contain', backgroundColor: '#212121'} }/>
                <div className={ Styles.question_text }>{ question }</div>
            </div>
            <div className= { Styles.attempt }>
                <span className= { Styles.attempt_text }>Попытка: </span>
                { attempt }
            </div>
            <div className={ Styles.form }>
                {
                    !defeated ?
                        attempt > 0 ?
                            <>
                                <input type='text'
                                    maxLength={50}
                                    value={ourAnswer}
                                    className={Styles.answer}
                                    onChange={onChangeAnswer}
                                />
                                {
                                    wrongAnswer && attempt < 3 ? <div className={ Styles.wrong_check}>Неверный ответ!</div> : null
                                }
                            </> : null : null
                }
            </div>
            { attempt === 0 && defeated === false && name === 'portalTop' ? null : <div onClick={ onSaveAnswer } className={ Styles.save_btn }>{'Ответить' }</div> }
        </div>
    );
};

export default SurturQuestion;


