import '../css/articles.less';
import '../css/page.less';
import News from './news.js';

//Facade
class App {
    run() {
        const FETCH_HANDLER_ID = 'news-button';
        const id_button = document.getElementById(FETCH_HANDLER_ID);

        const onClickHandler = () => {
            const news = new News();
            news.run()
        };
        id_button.addEventListener("click", onClickHandler, false);
        if (!PRODUCTION) {
            console.log("dev mode");
        }
    }
}
export default App;