import {findByAuthor, findByKeyword , findBydate ,myPageLoad} from './news_module.js';

document.getElementsByTagName('body').addEventListener('load' , myPageLoad);

document.getElementById('button_get_news').addEventListener('click', findByAuthor);

document.getElementById('button_get_news_keyword').addEventListener('click', findByKeyword);

document.getElementById('button_get_news_date').addEventListener('click', findBydate);






