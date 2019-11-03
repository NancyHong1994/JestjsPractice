import * as q from '../q1_10'

test('check day is today and the hour is hour for now', () => {
    expect(q.q1()).toMatch('Today is : Monday')
})

test('check the date is mm/dd/yyyy or mm-dd-yyyy', () => {
    expect(q.q3()).toMatch('11/4/2019')
    expect(q.q3()).toMatch('11-4-2019')
})

test('check if the area of the triangle is 14.697', () => {
    expect(q.q4()).toBe('14.697')
})

test('check the res contain the reverse string', () => {
    expect(q.q5()).toContain('ecruoser3W')
})

test('check the given year is leap year or not', () => {
    expect(q.q6(2020)).toMatch('This is a leap year!')
    expect(q.q6(2023)).toMatch('This is not a leap year!')
})

test('check the resource of the year is 1/1/yyyy and the day is Sunday', () => {
    expect(q.q7()).toBe(2017)
})

test('find the days left until next Christmas', () => {
    expect(q.q9()).toBe(51)
})
