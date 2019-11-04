const axios = require('axios')

export async function fetchName () {
    const name = await axios.get('https://stagapi.ezystream.com/v4/channels/1486')
        .then((response) => response.data.name)
        .catch(function (error) {
            console.log(error)
            return error
        })
    return name
}
