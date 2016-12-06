import ApiFetch from './apiFetch.js';
import {API_URL} from './constants.js';

class News {
    constructor() {
        this.components = {};
        const api = new ApiFetch(API_URL);
        this.register(api);
    }

    register(component) {
        this.components[component.constructor] = component;
    }

    execute(action, ...args) {
        for (let component in this.components) {
            if(action in component) {
                component[action](...args);
            }

        }
    }
}

export default News;