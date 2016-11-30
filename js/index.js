import '../css/articles.less';
import '../css/page.less';

const FETCH_HANDLER_ID = 'news-button';
const id_button = document.getElementById(FETCH_HANDLER_ID);

const onClickHandler = () => {
    require.ensure([], () => {
        const news = require('./news.js');
        const style = require("../css/articles.less");
        const api = news.api;
        const renderer = news.renderer;
        api.fetch(renderer.generateNews.bind(renderer));
    });
};

id_button.addEventListener("click", onClickHandler, false);

if (!PRODUCTION) {
    console.log("dev mode");
}


