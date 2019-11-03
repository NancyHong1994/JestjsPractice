const axios = require('axios')

export function fetchData () {
    return axios.get('https://stagapi.ezystream.com/v4/channels/1486')
        .then((response) => response.data.name)
        .catch(function (error) {
            console.log(error)
        })
}
