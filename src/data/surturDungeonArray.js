//IMAGES
import exit from '../assets/images/exit_dungeon.png';
import enter from '../assets/images/enter_dungeon.jpg';
import portalTop from '../assets/images/portal_top.png';
import portalDown from '../assets/images/portal_down.png';
import health from '../assets/images/health.png';
import golem from  '../assets/images/golem.gif';
import imp from  '../assets/images/imp.gif';
import evilCrab from  '../assets/images/evil_crab.gif';
import barlog from  '../assets/images/barlog.gif';
import barlog1 from  '../assets/images/barlog1.gif';
import blackDragon from '../assets/images/black_dragon.gif';
import fireDragon from '../assets/images/fire_dragon.gif';
import greenDragon from '../assets/images/green_dragon.gif';
import surtur from '../assets/images/surtur.gif';
import heimdall from  '../assets/images/heimdall.png';
import loki from  '../assets/images/loki.png';

export const surturDungeonArray = [
    {id: 1, fieldName: 'exit', image: exit, boss: 'Surtur', personImage: surtur, hpValue: 100, question: 'Who are you?', answer: ['thor'], attempt: 3, defeated: false, visited: false},
    {id: 2, fieldName: 'fireDragon', image: fireDragon, hpValue: 70, question: 'Who are you?', answer: ['thor'], attempt: 3, defeated: false, visited: false},
    {id: 3, fieldName: 'portalDown', image: portalDown, personImage: loki, question: 'Who are you?', answer: ['thor'], attempt: 1, defeated: false, visited: false},
    {id: 4, fieldName: 'health', image: health, hpValue: 50, used: false, visited: false},
    {id: 5, fieldName: 'blackDragon', image: blackDragon, hpValue: 50, question: 'Who are you?', answer: ['thor'], attempt: 3, defeated: false, visited: false},
    {id: 6, fieldName: 'fireDragon', image: fireDragon, hpValue: 70, question: 'Who are you?', answer: ['thor'], attempt: 3, defeated: false, visited: false},
    {id: 7, fieldName: 'greenDragon', image: greenDragon, hpValue: 40, question: 'Who are you?', answer: ['thor'], attempt: 3, defeated: false, visited: false},
    {id: 8, fieldName: 'barlog', image: barlog, hpValue: 30, question: 'Who are you?', answer: ['thor'], attempt: 3, defeated: false, visited: false},
    {id: 9, fieldName: 'blackDragon', image: blackDragon, hpValue: 50, question: 'Who are you?', answer: ['thor'], attempt: 3, defeated: false, visited: false},
    {id: 10, fieldName: 'portalTop', image: portalTop, visited: false},
    {id: 11, fieldName: 'imp', image: imp, hpValue: 20, question: 'Who are you?', answer: ['thor'], attempt: 3, defeated: false, visited: false},
    {id: 12, fieldName: 'health', image: health, hpValue: 25, used: false, visited: false},
    {id: 13, fieldName: 'imp', image: imp, hpValue: 20, question: 'Who are you?', answer: ['thor'], attempt: 3, defeated: false, visited: false},
    {id: 14, fieldName: 'barlog1', image: barlog1, hpValue: 30, question: 'Who are you?', answer: ['thor'], attempt: 3, defeated: false, visited: false},
    {id: 15, fieldName: 'golem', image: golem, hpValue: 20, question: 'Who are you?', answer: ['thor'], attempt: 3, defeated: false, visited: false},
    {id: 16, fieldName: 'portalTop', image: portalTop, personImage: heimdall, question: 'Who are you?', answer: ['thor'], attempt: 1, defeated: false, visited: false},
    {id: 17, fieldName: 'imp', image: imp, hpValue: 20, question: 'Who are you?', answer: ['thor'], attempt: 3, defeated: false, visited: false},
    {id: 18, fieldName: 'health', image: health, hpValue: 15, used: false, visited: false},
    {id: 19, fieldName: 'barlog', image: barlog, hpValue: 30, question: 'Who are you?', answer: ['thor'], attempt: 3, defeated: false, visited: false},
    {id: 20, fieldName: 'barlog1', image: barlog1, hpValue: 30, question: 'Who are you?', answer: ['thor'], attempt: 3, defeated: false, visited: false},
    {id: 21, fieldName: 'health', image: health, hpValue: 10, used: false, visited: false},
    {id: 22, fieldName: 'portalDown', image: portalDown, visited: false},
    {id: 23, fieldName: 'golem', image: golem, hpValue: 20, question: 'Who are you?', answer: ['thor'], attempt: 3, defeated: false, visited: false},
    {id: 24, fieldName: 'evilCrab', image: evilCrab, hpValue: 20, question: 'Who are you?', answer: ['thor'], attempt: 3, defeated: false, visited: false},
    {id: 25, fieldName: 'enter', image: enter, visited: true}
];