const {sum, myRemove, myFizzBuzz, encode} = require('./Exjest')


describe('Ex 1', () => {

it('adc 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
})

it('adc 4 + 5 to equal 9', () => {
    expect(sum(4, 5)).toBe(9)
})

it('adc 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0)
})
})

describe('Ex 2', () => {

it('remove item test 1', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
})

it('remove item test 2', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
})

it('remove item test 3', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
})
}) 

describe('Ex 3', () => {
    it('number div 3 and 5', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz')
    })

    it('number div 3', () => {
        expect(myFizzBuzz(3)).toBe('fizz')
    })

    it('number div 5', () => {
        expect(myFizzBuzz(5)).toBe('buzz')
    })

    it('number not div 3 and 5', () => {
        expect(myFizzBuzz(6)).not.toBe('fizzbuzz')
    })

    it('not a number', () => {
        expect(myFizzBuzz(String)).toBe(false)
    })
})

describe('Playground functions encode and decode', () => {
    it('its a function', () => {
        expect(encode())
    })
})