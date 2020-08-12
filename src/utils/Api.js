class Api {

    getHome() {

        fetch('http://localhost:3001/api/home')
        .then( (resp) => resp.json() )
        .then( (json) => {
            // console.log('utils/api#getHome json', json);
            const result = json.cities;
            console.log('utils/api#getHome result', result);
            return result

        });
    }
}

export default new Api();