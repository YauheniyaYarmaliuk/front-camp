import '../css/articles.less';
import '../css/page.less';
import News from './news.js';
import ArticlesRenderer from './renderer.js';
import {ROOT_ELEMENT_ID} from './constants.js';

//Facade
class App {
    run() {
        const FETCH_HANDLER_ID = 'news-button';
        const id_button = document.getElementById(FETCH_HANDLER_ID);

        const onClickHandler = () => {
            const renderer = new ArticlesRenderer(ROOT_ELEMENT_ID);
            const news = new News();
            news.execute('fetch', renderer.generateNews.bind(renderer));
        };
        id_button.addEventListener("click", onClickHandler, false);
        if (!PRODUCTION) {
            console.log("dev mode");
        }
    }
}
export default App;