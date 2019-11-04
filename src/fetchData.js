const axios = require('axios')

export async function fetchData (channelParterId) {
    const data = await axios.get('https://stagapi.ezystream.com/v4/channels/' + channelParterId.toString())
        .then((response) => response.data)
    return data
}
