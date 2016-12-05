import ArticlesRenderer from './renderer.js';
import ApiFetch from './apiFetch.js';
import {API_URL, ROOT_ELEMENT_ID} from './constants.js';

//run
class News {
    method(apiAddress, renders) {
        this.apiAddress = apiAddress;
        this.renders = renders;
    }

    replace() {
        var name = {};
        return {
            register: function (name) {
                name[name.apiAddress] = name;
                name[name.renders] = name;
            }
        }
    }

    run() {
        const api = new ApiFetch(API_URL);
        const renderer = new ArticlesRenderer(ROOT_ELEMENT_ID);
        const news = new News();
        news.replace().register(api);
        news.replace().register(renderer);
        api.fetch(renderer.generateNews.bind(renderer));
    }
}

export default News;