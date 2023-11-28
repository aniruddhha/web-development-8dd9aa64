class Shape {

    constructor(color) {
        this.color = color
    }

    calculateArea() {  } // incomlplete 
}

// circle is a shape
class Circle extends Shape {

    #radius

    constructor(color, radius) {
        super(color)
        this.#radius = radius
    }

    calculateArea() {
        return Math.PI * (this.#radius ** 2)
    }
}

class Rectangle extends Shape {

    #length
    #width

    constructor(color, length, width) {
        super(color)
        this.#length = length
        this.#width = width
    }

    calculateArea() {
        return this.#length * this.#width
    }
}

const circle = new Circle('red', 2)
// this is the instance of Shape and Circle
// console.log(`Area Of Circle is ${circle.calculateArea()}`)

const rectangle = new Rectangle('blue', 45, 56)
// this is the instance of Shape and Rectangle
// console.log(`Area of Rectangle is ${rectangle.calculateArea()}`)

function anyShapeArea(shape) {
    if(shape instanceof Shape) {
        console.log(`Area is ${shape.calculateArea()}`)
        return
    }
    console.log(`Invalid Object`)
}

anyShapeArea(circle)
anyShapeArea(rectangle)
anyShapeArea('any data')