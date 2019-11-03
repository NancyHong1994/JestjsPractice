import { fetchData } from '../fetchData'
import axios from 'axios'

jest.mock('axios')

test('fetch name from the API', () => {
    const name = 'Good TV'
    const resp = { data: { name: name } }
    axios.get.mockResolvedValue(resp)
    return fetchData().then(response => {
        expect(response).toEqual(name)
        expect(axios.get).toHaveBeenCalledTimes(1)
    })
})
