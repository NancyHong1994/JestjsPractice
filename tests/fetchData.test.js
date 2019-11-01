import axios from 'axios'
import fetchData from '../fetchData'
import { exportAllDeclaration } from '@babel/types'

jest.mock('axios')

test('should fetch name', () => {
    const name = 'Good TV'
    const resp = { data: name }
    axios.get.mockImplementation(() => Promise.resolve({ status: 200, resp }))
    expect().toEqual(name)
})
