const assert = require('assert');
const buy = require('../buy');

describe("compra un item", () => {
    const card = {number: "1234234534564567", expiry: "11/21", cv: "233"};
    let cd = {price: 9.99, stock: 10};

    it("reduce el stock por el item comprado", () => {
        const payments = () => true;
        cd = buy(cd, 1, card, payments);
        assert.equal(cd.stock, 9);
    });

    it("se le hace un cargo a la tarjeta por cada item comprado<", () => {
        let paymentArgs = [];
        const payments = function ()  {
            paymentArgs = arguments;
            return true;
        }

        cd = buy(cd, 1, card, payments);

        assert.deepEqual(paymentArgs[0], card);
        assert.equal(paymentArgs[1], cd.price);
    });

    it("Error cuando no hay Stock", () => {
        const payments = () => true;
        assert.throws(() => buy(cd, 11, card, payments), Error, "Out of stock");
    });

    it("Error cuando el pago no es aceptado", () => {
        const payments = () => false;
        assert.throws(() => buy(cd, 1, card, payments))
    });
})