class apiFetch {
    constructor(apiUrl){}
    fetch(responseAction){
        return fetch(this.apiUrl)
             .then((response) => response.json())
             .then((json) => responseAction(json))
             .catch((ex) => console.error('failed', ex));

    }
}
export default apiFetch;

