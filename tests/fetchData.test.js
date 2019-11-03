import mockAxios from '../mocks/axios'
import { fetchData } from '../fetchData'

test('fetch name from the API', () => {
    const name = 'Good TV'
    mockAxios.get.mockImplementation(() =>
        Promise.resolve(name)
    )
    // expect(mockAxios.get).toHaveBeenCalledTimes(1)
    return fetchData().then(response => {
        expect(response).toEqual(name)
    })
})
