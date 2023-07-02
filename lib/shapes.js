

// We are creating a BASE class
class Shape {
    constructor() {
        this.background = '';
        this.color = '';
        this.logo = '';
    }

    setBackground(background) {
        this.background = background;
    }
    setLogo(logo) {
        this.logo = logo;
    }
    setColor(color) {
        this.color = color;
    }
}


// these Classes INHERIT properties and methods from the BASE class
class Circle extends Shape {
    render() {
       return `
    <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill="${this.background}" />
        </circle>
        <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.color};">
            ${this.logo}
        </text>
    </svg>
        `;
        
    }
}

class Triangle extends Shape {
    render() {
        
        return `
        <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="${this.background}"/>
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.color};">
                ${this.logo}
            </text>
        </svg>
        `;
    }
}

class Square extends Shape {
    render() {
        return `
        <svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
            <rect width="120" height="120" fill="${this.background}"> 
            </rect>
            <text font-size="50" text-anchor="middle" x="60" y="45" style="fill: ${this.color};">
                ${this.logo}
            </text>
        </svg>
            `;
    }
}

module.exports = { Circle, Triangle, Square };
