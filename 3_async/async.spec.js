const Ajax = require('./async')

describe('Ajax: echo', () => {
    test('should return value asycn', async () => {
        const resut = await Ajax.echo('some data')
        expect(resut).toBe('some data')
    })
    test('should return value with promise',  () => {
      return  Ajax.echo('some data').then( data => [
           expect(data).toBe('some data')
       ])
    })
    test('should catch error  with promise',  () => {
        return  Ajax.echo('some data').then( err => [
            expect(err).toBeInstanceOf(Error)
        ])
    })
    test('should catch error  with promise',  async () => {
        try {
            await Ajax.echo()
        } catch (err) {
            expect(e.message).toBe('error')
        }
    })
})
