import ArticlesRenderer from './renderer.js';
import ApiFetch from './apiFetch.js';
import { API_URL, ROOT_ELEMENT_ID } from './constants.js';

export const api = new ApiFetch(API_URL);
export const renderer = new ArticlesRenderer(ROOT_ELEMENT_ID);

