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

const question1 = 'Тор и Джейн договорились встретиться на свидании у входа в парк ровно в 9 часов вечера. Но вот ведь незадача, и у Тора и у Джейн часы идут-то неверно! У Тора часы отстают на 3 минуты, однако он считает наоборот, что они спешат на 2 минуты. У Джейн часы спешат на 2 минуты, но она считает, что они отстают на 3 минуты. Как Вы думаете, кто из них опоздает на свидание?';
const question2 = 'С борта парохода был спущен стальной трап. Нижние 4 ступеньки трапа погружены в воду. Каждая ступенька имеет толщину в 5 см; расстояние между двумя соседними ступень­ками составляет 30 см. Начался прилив, при котором уровень воды стал поднимается со скоростью 40 см в час. Как Вы считаете, сколько ступенек окажется под водой через 2 часа?';
const question3 = 'Назови два числа, у которых количество цифр равно количеству букв, составляющих название каждого из этих чисел. Напишите ответ числами в формате "10, 500,  где первое число меньшее, второе большее.".';
const question5 = 'Лена живет на четвертом этаже, при этом, поднимаясь к себе домой, она проходит по лестнице 60 ступенек. Юля живет в этом же подъезде на втором этаже. Сколько ступенек проходит Юля, поднимаясь к себе домой на второй этаж?';
const question6 = 'На гладкую доску положили 2 кирпича — один плашмя, а другой на ребро. Кирпичи весят одинаково. Какой кирпич соскользнет первым, если наклонять доску?';
const question7 = 'Трехзначное число состоит из возрастающих (слева направо) цифр. Если это число прочитать, то все слова будут начинаться на одну и туже букву. Что это за число?';
const question8 = 'Если один кубический метр разделить на составляющие его кубические миллиметры и соединить их между собой гранями в одну прямую линию, то каковой длины окажется эта линия?';
const question9 = 'Когда моему отцу был 31 год, мне было 8 лет, а теперь отец старше меня вдвое. Сколько мне лет теперь?';
const question11 = 'Чашка кофе с кубиком сахара стоит 1 доллар 10 центов. Известно, что кофе дороже кубика сахара на 1 доллар. Сколько стоит само кофе, и сколько стоит кубик сахара? Напишите ответ числами в формате "70:5, где первое число стоимость кофе, второе - сахара.".';
const question13 = 'Возвращаясь с рыбалки домой, рыболов встретил своего приятеля, который поинтересовался его уловом. Но, так как наш рыболов помимо рыбалки был также большим любителем всякого рода загадок, ответил приятелю следующим образом: “Если к количеству пойманной мною рыбы добавить половину улова и еще десяток рыбин, то мой улов составил бы ровно сотню рыб”. Сколько рыбы поймал рыболов?';
const question14 = 'Агенту необходимо было проникнуть на одну “закрытую” вечеринку. Пропуском внутрь служило особое слово-пароль. Агент спрятался неподалеку от входа и стал прислушиваться. На вопрос охранника “Двадцать два?” первый посетитель ответил “Одиннадцать!” и был впущен внутрь. На вопрос “Двадцать восемь?” следующий посетитель ответил “Четырнадцать!” и также был впущен внутрь. “Всего-то делов” подумал агент, и на вопрос охранника “Сорок два?” смело ответил “Двадцать один!” и тут же был изгнан прочь как чужак. Каким должен был быть правильный ответ?';
const question15 = 'Пять землекопов за 5 часов выкапывают 5 м канавы. Сколько потребуется землекопов, для того чтобы выкопать 100 м канавы за 100 часов?';
const question16 = 'Пете и Коле купили по коробке конфет. В каждой коробке находится 12 конфет. Петя из своей коробки съел несколько конфет, а Коля из своей коробки съел столько конфет, сколько осталось в коробке у Пети. Сколько конфет осталось на двоих у Пети и Коли?';
const question17 = 'В одном городе построили новый район из 100 домов. Мастера по изготовлению табличек изготовили и привезли пачку новых табличек с нумерацией домов от 1 до 100. Сосчитайте количество всех цифр 9 встречающихся в этих табличках.';
const question19 = 'Одного человека спросили:\n' +
    '— Сколько вам лет?\n' +
    '— Порядочно, — ответил он.\n' +
    '— Я старше некоторых своих родственников почти в шестьсот раз. Может ли такое быть? Напишите ответ числами в формате "70:5", где первое число возраст человека, второе - родственника. Возраст человека записывать только в годах, а возраст родственника - в месяцах.';
const question20 = 'При издании книги потребовалось 2 775 цифр того, чтобы пронумеровать ее страницы. Сколько стра­ниц в книге?';
const question23 = 'Один джентльмен, показывая своему другу портрет, нарисованный по его заказу одним художником, сказал: "У меня нет ни сестер, ни братьев, но отец этого человека был сыном моего отца". Кто был изображен на портрете?';
const question24 = 'На поверхности пруда плавает одна кувшинка, которая постоянно делится и разрастается. Таким образом, каждый день площадь, которую занимают кувшинки, увеличивается в два раза. Через 3 недели покрытой оказывается вся поверхность пруда. За сколько дней покроется кувшинками вся поверхность пруда, если изначально на поверхности будут плавать две кувшинки?';

export const surturDungeonArray = [
    {id: 1, fieldName: 'exit', image: exit, boss: 'Surtur', personImage: surtur, hpValue: 100, question: question1, answer: ['тор', 'thor'], attempt: 3, defeated: false, visited: false},
    {id: 2, fieldName: 'fireDragon', image: fireDragon, hpValue: 70, question: question2, answer: ['4', 4, 'четыре', 'четыре ступеньки', '4 ступеньки', 'столько же'], attempt: 3, defeated: false, visited: false},
    {id: 3, fieldName: 'portalDown', image: portalDown, personImage: loki, question: question3, answer: ['100, 1000000', '100, 1 000 000', '100 , 1 000 000', '100,1 000 000', '100 , 1000000', '100,1000000', 'сто , миллион', 'сто, миллион', 'сто,миллион'], attempt: 1, defeated: false, visited: false},
    {id: 4, fieldName: 'health', image: health, hpValue: 50, used: false, visited: false},
    {id: 5, fieldName: 'blackDragon', image: blackDragon, hpValue: 50, question: question5, answer: ['20', 20, '20 ступенек','двадцать', 'двадцать ступенек',], attempt: 3, defeated: false, visited: false},
    {id: 6, fieldName: 'fireDragon', image: fireDragon, hpValue: 70, question: question6, answer: ['одновременно', 'в одно время', 'вместе', 'оба', 'оба кирпича'], attempt: 3, defeated: false, visited: false},
    {id: 7, fieldName: 'greenDragon', image: greenDragon, hpValue: 40, question: question7, answer: ['147', 147, ' сто сорок семь'], attempt: 3, defeated: false, visited: false},
    {id: 8, fieldName: 'barlog', image: barlog, hpValue: 30, question: question8, answer: ['1000км', '1000 км', 'тысячу км', 'тысячу километров', 'тысяча километров'], attempt: 3, defeated: false, visited: false},
    {id: 9, fieldName: 'blackDragon', image: blackDragon, hpValue: 50, question: question9, answer: ['23', 23, '23года', '23 года'], attempt: 3, defeated: false, visited: false},
    {id: 10, fieldName: 'portalTop', image: portalTop, visited: false},
    {id: 11, fieldName: 'imp', image: imp, hpValue: 20, question: question11, answer: ['1.05:0.05', '1,05:0,05', '1 доллар 5 центов:5 центов', 'доллар 5 центов:5 центов'], attempt: 3, defeated: false, visited: false},
    {id: 12, fieldName: 'health', image: health, hpValue: 25, used: false, visited: false},
    {id: 13, fieldName: 'imp', image: imp, hpValue: 20, question: question13, answer: ['60', 60,'шестьдесят'], attempt: 3, defeated: false, visited: false},
    {id: 14, fieldName: 'barlog1', image: barlog1, hpValue: 30, question: question14, answer: ['8', 8, 'восемь'], attempt: 3, defeated: false, visited: false},
    {id: 15, fieldName: 'golem', image: golem, hpValue: 20, question: question15, answer: ['5', 5, 'пять'], attempt: 3, defeated: false, visited: false},
    {id: 16, fieldName: 'portalTop', image: portalTop, personImage: heimdall, question: question16, answer: ['12', 12, 'двенадцать'], attempt: 1, defeated: false, visited: false},
    {id: 17, fieldName: 'imp', image: imp, hpValue: 20, question: question17, answer: ['20', 20, 'двадцать'], attempt: 3, defeated: false, visited: false},
    {id: 18, fieldName: 'health', image: health, hpValue: 15, used: false, visited: false},
    {id: 19, fieldName: 'barlog', image: barlog, hpValue: 30, question: question19, answer: ['50:1', '50:месяц', '50лет:1месяц', '50 лет:1 месяц'], attempt: 3, defeated: false, visited: false},
    {id: 20, fieldName: 'barlog1', image: barlog1, hpValue: 30, question: question20, answer: ['961', 961], attempt: 3, defeated: false, visited: false},
    {id: 21, fieldName: 'health', image: health, hpValue: 10, used: false, visited: false},
    {id: 22, fieldName: 'portalDown', image: portalDown, visited: false},
    {id: 23, fieldName: 'golem', image: golem, hpValue: 20, question: question23, answer: ['сын', 'сын джентельмена'], attempt: 3, defeated: false, visited: false},
    {id: 24, fieldName: 'evilCrab', image: evilCrab, hpValue: 20, question: question24, answer: ['20', 20, 'двадцать'], attempt: 3, defeated: false, visited: false},
    {id: 25, fieldName: 'enter', image: enter, visited: true}
];