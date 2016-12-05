//Singleton
class ApiFetch {
    constructor(apiUrl) {
        if (!this.instance) {
            this.instance = this;
            this.apiUrl = apiUrl;
        }
        return this.instance;
    }

    fetch(responseAction) {
        return fetch(this.apiUrl)
            .then((response) => response.json())
            .then((json) => responseAction(json))
            .catch((ex) => console.error('failed', ex));
    }

}
export default ApiFetch;

