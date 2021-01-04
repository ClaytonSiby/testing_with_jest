const { expect } = require("@jest/globals");

const capitalize = require('../index');

describe('Manipulate a input string', () => {
    let name = 'clayton';

    test('Capitalizes a string value to start with an UpperCase', () => {
        expect(capitalize(name)).toEqual('Clayton');
    })
})