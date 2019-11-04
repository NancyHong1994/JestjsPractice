import axios from 'axios'
import { fetchData } from '../src/fetchData'

jest.mock('axios')

test('fetch data from the api with the channel partner id', async () => {
    const channelPartnerId = 1
    const url = 'https://stagapi.ezystream.com/v4/channels/' + channelPartnerId.toString()

    axios.get.mockImplementation(
        () => Promise.resolve({ data : { id : channelPartnerId } })
    )

    const channelData = await fetchData(channelPartnerId)
    expect(channelData.id).toEqual(channelPartnerId)
    expect(axios.get).toHaveBeenNthCalledWith(1, url)
})
