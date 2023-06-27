class SVG {
    constructor() {
        this.textEl = '';
        this.shapeEl = '';
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`
    }

    setShape(shape) {
        this.shapeEl = shape;
    }

    setText(text, textColor) {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill=${textColor}>${text}</text>`
    }
}

/*
let newShape = new SVG();
let circleObj = new Circle();
newShape.setShape(circleObj.render())
*/

module.exports = SVG;