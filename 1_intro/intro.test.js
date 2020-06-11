const {sum, nativeNull} = require('./intro')

describe('Sum function', () => {
    test(' should retrun sum of two values', () => {
        expect(sum(1, 3)).toBe(4)
    })
    test(' should return value correctly comparing to other', () => {
        expect(sum(2, 3)).toBeGreaterThanOrEqual(5)
        expect(sum(2, 3)).toBeLessThan(10)
    })
})
describe('Native null function', () => {
        test(' should return false value null', () => {
            expect(nativeNull()).toBe(null)
            expect(nativeNull()).toBeNull()
        })

    }
)
