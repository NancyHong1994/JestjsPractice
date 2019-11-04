const axios = require('axios')

export async function fetchData (channelParterId) {
    const url = 'https://stagapi.ezystream.com/v4/channels/' + channelParterId.toString()
    const data = await axios.get(url)
        .then((response) => response.data)
    return data
}
