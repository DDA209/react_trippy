class Api {

    getHome() {
        fetch('http://localhost:3001/api/home')
        .then( (resp) => resp.json() )
        .then( (json) => {
            const cities = json.cities
            this.setState({
            cities
            });
        });
    }
}

export default new Api();