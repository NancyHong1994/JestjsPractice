import { fetchName } from '../src/fetchData'
import axios from 'axios'
import { JestEnvironment } from '@jest/environment'

jest.mock('axios')

test('fetch name from the API', async () => {
    const name = 'Good TV'
    axios.get.mockImplementation(
        () => Promise.resolve({ data : { name } })
    )
    const channelName = await fetchName()
    expect(channelName).toEqual(name)
    expect(axios.get).toHaveBeenCalled()
    expect(axios.get).toHaveBeenCalledTimes(1)
})
