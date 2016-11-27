import articlesRenderer from 'renderer.js';
import apiFetch from 'apiFetch.js';
import { API_URL, ROOT_ELEMENT_ID } from 'constants.js';
class news {


}
const api = new apiFetch(API_URL);
const renderer = new articlesRenderer(ROOT_ELEMENT_ID);
//api.fetch(renderer.generateNews);
