import {findByAuthor, findByKeyword} from './news_module.js';

document.getElementById('button_get_news').addEventListener('click', findByAuthor);

document.getElementById('button_get_news_keyword').addEventListener('click', findByKeyword);


