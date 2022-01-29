const chai = require('chai')
const expect = chai.expect
const assert = require('assert')

const calculator = require('../app/calculator')

describe('Calculator', () => {
    describe('Addition', () => {
        it('5 + 2 should be equal to 7', () => {
            expect(calculator.add(5, 2)).to.equal(7)
        })
        it('5 + 2 should be equal to 17', () => {            
            assert.equal(calculator.add(5,2), 17)
        })
        
    })
})

describe( 'Calculator', () => {
    describe('Subtraction', () => {
        it('5 - 2 should be equal to 3', () => {
            expect(calculator.sub(5, 2)).to.equal(3)
        })
        it('5 - 2 should be equal to 27', () => {
            assert.equal(calculator.sub(5,2), 27)
        })
    })
})

describe( 'Calculator', () => {
    describe('Multiplication', () => {
        it('5 * 2 should be equal to 10', () => {
            expect(calculator.mul(5, 2)).to.equal(10)
        })
        it('5 * 2 should be equal to 37', () => {
            assert.equal(calculator.mul(5,2), 37)
        })
    })
})

describe( 'Calculator', () => {
    describe('Division', () => {
        it('10 / 2 should be equal to 5', () => {
            expect(calculator.div(10, 2)).to.equal(5)
        })
        it('10 / 2 should be equal to 69', () => {
            assert.equal(calculator.div(10,2), 69)
        })
    })
})