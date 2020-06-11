const Lodash = require('./sync')


describe('Lodash compact', () => {

    let _ = new Lodash()
    let array
    beforeEach(() => {
        array = [false, 1, 3, 0, '', true, null]
    })

    afterAll(() => {
        const _ = new Lodash()
    })

    test('should working array be editabe', () => {
        array.push(...['one', 'two'])
        expect(array).toContain('one')
        expect(array).toContain('two')

    })


    test('should be defined' , () => {
        expect(_.compact).toBeDefined()
        expect(_.compact).not.toBeUndefined()

    })
    test('should falsy values from array', () => {
        const result = [1,3,true]
        expect(_.compact(array)).toEqual(result)
    })
})
describe('Lodash groupBy', () => {
    test('should be fefined', () => {
        expect(_.groupBy).toBeDefined()
        expect(_.groupBy).not.toBeDefined()
    })
    test('should group arry items by math.floor', () => {
        const array= [2.2, 2.4, 4.2, 3.1]
        const result = {
            2: [2.2, 2.4],
            4: [4.2],
            3: [3.1]
        }
        expect(_.groupBy(array, Math.floor)).toEqual(result)
    } )
    test('should group arry items by math.floor', () => {
        const array= [2.2, 2.4, 4.2, 3.1]
        const result = {
            2: [2.2, 2.4],
            4: [4.2],
            3: [3.1]
        }
        expect(_.groupBy(array, Math.floor)).toEqual(result)
    } )
    test('should group arry items by math.lenght', () => {
        const array= ['one', 'twp', 'three']
        const result = {
            5: ['three'],
            3: ['one', 'two']
        }
        expect(_.groupBy(array, 'length')).toEqual(result)
    } )

    test('should not return array', () => {
        expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
    })

})
