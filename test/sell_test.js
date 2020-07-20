const assert = require('assert')
const sell = require('../sell')

describe('vende un cd/item', () => {
    const cantidad = 500
    const venta = 200
    it("comision deberia ser de de 5%", () => {
        assert.equal(sell(cantidad, venta), 10)
        
    })

    it("la comision deberia ser 7%", () => {
        const cantidad = 500
        const venta = 900
        assert.equal(sell(cantidad, venta), 63 )
    })

})

module.exports =  sell