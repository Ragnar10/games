//CORE
import React, { useState, useEffect } from 'react';

//SOUND
import fifteensSound from '../../assets/sounds/fifteens.mp3';
import couplesSound from '../../assets/sounds/couples.mp3';
import baldaSound from '../../assets/sounds/balda.mp3';
import surtursDungeonSound from '../../assets/sounds/surtursDungeon.mp3';

//ICONS
import soundOn from '../../assets/icons/sound_on.png';
import soundOff from '../../assets/icons/sound_off.png';

//STYLES
import Styles from './ButtonSound.module.css';

//UTILS
import { setImages } from '../../utils/helperFunctions';

const ButtonSound = ({nameGame}) => {

    const [play, setPlay] = useState();

    useEffect(() => {

    });

    const sound = nameGame === '/fifteens' ? fifteensSound : nameGame === '/couples' ? couplesSound : nameGame === '/balda' ? baldaSound : nameGame === '/surtur_dungeon' ? surtursDungeonSound : null;

    const onPlayMusic = () => {
        setPlay((play) => !play);
    };

    const onChangeVolume = (e) => {
        document.getElementById('player').volume = e.target.value / 10;
    };

    return  (
        <>
            <div className={ Styles.sound_btn }
                 style={ play ? setImages(soundOn, 'cover') : setImages(soundOff, 'cover') }
                 onClick={ onPlayMusic }>
            </div>
            <div className={Styles.range}>
                <input type={'range'}
                       name={'volume'}
                       id={'volume'}
                       min={0}
                       max={10}
                       onChange={onChangeVolume}
                />
            </div>
            {
               play ?
                   <audio src={sound}
                          loop={true}
                          autoPlay={true}
                          id={'player'}
                    /> : null
            }
        </>
    );
};

export default ButtonSound;