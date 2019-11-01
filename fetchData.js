const axios = require('axios')

export function fetchData () {
    axios.get('https://stagapi.ezystream.com/v4/channels/1486')
        .then(function (response) {
            console.log(response)
            return response.data.name
        })
        .catch(function (error) {
            console.log(error)
        })
}
