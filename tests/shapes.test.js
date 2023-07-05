const { Triangle, Square, Circle } = require('../lib/shapes');

/*
describe("As A GROUPING function", () => {
    
})
*/

describe("Testing Square Object Instance", () => {

    it('Creates a Square instance', () => {
        //--> set our Object
        let testSqu = new Square();

        expect(testSqu).toBeInstanceOf(Square)
    })

    it('Creates a Square SVG with a background of red', () => {
        //--> set out Object
        let testSqu = new Square();
        //-->adding/updating data for the object
        testSqu.setBackground('red');

    })

    it('Creates a Square SVG with a background of red and txt color of green', () => {
        //-->set our Object
        let testSqu = new Square();
        //--> adding/updating data for the object
        testSqu.setBackground('red');
        testSqu.setColor('green');

        expect(testSqu.background).toEqual('red');
        expect(testSqu.color).toEqual('green');
    })
})
describe("Testing Circle Object Instance", () => {

    it('Creates a Circle instance', () => {
        //-->  set our Object 
        let testCir = new Circle();

        expect(testCir).toBeInstanceOf(Circle)
    })

    it('Creates a Circle SVG with a background of green', () => {
        //-->  set our Object 
        let testCir = new Circle();
        // --> adding/updating data for the object
        testCir.setBackground('green');

        expect(testCir.background).toEqual('green');
    })

    it('Creates a Circle SVG with a background of green and txt color of red', () => {
        //-->  set our Object 
        let testCir = new Circle();
        // --> adding/updating data for the object
        testCir.setBackground('green');
        testCir.setColor("red");

        expect(testCir.background).toEqual('green');
        expect(testCir.color).toEqual('red');
    })


    it('Renders a Circle SVG Object', () => {
        //-->  set our Object 
        let testCir = new Circle();
        // --> adding/updating data for the object
        testCir.setBackground('green');
        testCir.setLogo('TXT');
        testCir.setColor('red');

        expect(testCir.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill="green" /></circle><text x="150" y="125" font-size="70" text-anchor="middle" fill="red">TXT</text></svg>`)
    })

    // CAN use it() or test() methods in JEST

})

/*
test('Make sure that the info entered when the node js command is entered into prompt comes out correct', () => {
    expext(
        Square
    )
})
*/