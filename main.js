import {findByAuthor} from './news_module';

var btn_click_for_news = document.getElementById('button_get_news');
btn_click_for_news.onclick(findByAuthor);