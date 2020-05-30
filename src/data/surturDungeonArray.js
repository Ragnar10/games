import exit from '../assets/images/exit_dungeon.png';
import enter from '../assets/images/enter_dungeon.jpg';
import portalTop from '../assets/images/portal_top.png';
import portalDown from '../assets/images/portal_down.png';
import health from '../assets/images/health.png';
import enemy_1 from  '../assets/images/iron_enemy_1.png';
import enemy_2 from  '../assets/images/iron_enemy_2.png';
import enemy_3 from  '../assets/images/iron_enemy_3.png';
import enemy_4 from  '../assets/images/iron_enemy_4.png';
import surtur from '../assets/images/surtur_boss.png';
import heimdall from  '../assets/images/heimdall.png';
import loki from  '../assets/images/loki.png';

export const surturDungeonArray = [
    {id: 1, fieldName: 'exit', image: exit, boss: 'Surtur', personImage: surtur, hpValue: 100, question: 'Who are you?', answer: ['thor'], attempt: 3, defeated: false, visited: false},
    {id: 2, fieldName: 'enemy_4', image: enemy_4, hpValue: 50, question: 'Who are you?', answer: ['thor'], attempt: 3, defeated: false, visited: false},
    {id: 3, fieldName: 'portalDown', image: portalDown, personImage: loki, question: 'Who are you?', answer: ['thor'], attempt: 1, defeated: false, visited: false},
    {id: 4, fieldName: 'health', image: health, hpValue: 50, used: false, visited: false},
    {id: 5, fieldName: 'enemy_3', image: enemy_3, hpValue: 30, question: 'Who are you?', answer: ['thor'], attempt: 3, defeated: false, visited: false},
    {id: 6, fieldName: 'enemy_4', image: enemy_4, hpValue: 50, question: 'Who are you?', answer: ['thor'], attempt: 3, defeated: false, visited: false},
    {id: 7, fieldName: 'enemy_3', image: enemy_3, hpValue: 30, question: 'Who are you?', answer: ['thor'], attempt: 3, defeated: false, visited: false},
    {id: 8, fieldName: 'enemy_2', image: enemy_2, hpValue: 20, question: 'Who are you?', answer: ['thor'], attempt: 3, defeated: false, visited: false},
    {id: 9, fieldName: 'enemy_3', image: enemy_3, hpValue: 30, question: 'Who are you?', answer: ['thor'], attempt: 3, defeated: false, visited: false},
    {id: 10, fieldName: 'portalTop', image: portalTop, visited: false},
    {id: 11, fieldName: 'enemy_1', image: enemy_1, hpValue: 10, question: 'Who are you?', answer: ['thor'], attempt: 3, defeated: false, visited: false},
    {id: 12, fieldName: 'health', image: health, hpValue: 25, used: false, visited: false},
    {id: 13, fieldName: 'enemy_1', image: enemy_1, hpValue: 10, question: 'Who are you?', answer: ['thor'], attempt: 3, defeated: false, visited: false},
    {id: 14, fieldName: 'enemy_2', image: enemy_2, hpValue: 20, question: 'Who are you?', answer: ['thor'], attempt: 3, defeated: false, visited: false},
    {id: 15, fieldName: 'enemy_1', image: enemy_1, hpValue: 10, question: 'Who are you?', answer: ['thor'], attempt: 3, defeated: false, visited: false},
    {id: 16, fieldName: 'portalTop', image: portalTop, personImage: heimdall, question: 'Who are you?', answer: ['thor'], attempt: 1, defeated: false, visited: false},
    {id: 17, fieldName: 'enemy_1', image: enemy_1, hpValue: 10, question: 'Who are you?', answer: ['thor'], attempt: 3, defeated: false, visited: false},
    {id: 18, fieldName: 'health', image: health, hpValue: 15, used: false, visited: false},
    {id: 19, fieldName: 'enemy_2', image: enemy_2, hpValue: 20, question: 'Who are you?', answer: ['thor'], attempt: 3, defeated: false, visited: false},
    {id: 20, fieldName: 'enemy_2', image: enemy_2, hpValue: 20, question: 'Who are you?', answer: ['thor'], attempt: 3, defeated: false, visited: false},
    {id: 21, fieldName: 'health', image: health, hpValue: 10, used: false, visited: false},
    {id: 22, fieldName: 'portalDown', image: portalDown, visited: false},
    {id: 23, fieldName: 'enemy_1', image: enemy_1, hpValue: 10, question: 'Who are you?', answer: ['thor'], attempt: 3, defeated: false, visited: false},
    {id: 24, fieldName: 'enemy_1', image: enemy_1, hpValue: 10, question: 'Who are you?', answer: ['thor'], attempt: 3, defeated: false, visited: false},
    {id: 25, fieldName: 'enter', image: enter, visited: true}
];