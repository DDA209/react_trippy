class Api {

    getHome() {

        fetch('http://localhost:3001/api/home')
        .then( (resp) => resp.json() )
        .then( (json) => {
<<<<<<< HEAD
            const cities = json.cities
            this.setState({
            cities
            });
=======
            // console.log('utils/api#getHome json', json);
            const result = json.cities;
            console.log('utils/api#getHome result', result);
            return result

>>>>>>> 4085e94b39a23ee0aafa63370bd172ef85d2e2a7
        });
    }
}

export default new Api();