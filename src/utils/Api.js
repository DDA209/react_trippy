class Api {

    getHome() {
        fetch('http://localhost:3001/api/home')
        .then( (resp) => resp.json() )
        .then( (json) => {
            console.log('utils/api#getHome json', json);
        });
    }
}

export default new Api();