import ApiFetch from './apiFetch.js';
import {API_URL} from './constants.js';

class News {
    constructor() {
        this.components = {};
        const api = new ApiFetch(API_URL);
        this.register(api);
    }

    register(component) {
        this.components[component.constructor.name] = component;
    }

    execute(action, ...args) {
        for (let componentName in this.components) {
            const component = this.components[componentName];
            if (action in component) {
                component[action](...args);
            }

        }
    }
}

export default News;