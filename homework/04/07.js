// 實作 class Vector {...}

class Vector
{
    constructor(x,y)
    {
        this.x = x
        this.y = y
    }
    add(vector)
    {
        return new Vector(this.x + vector.x, this.y + vector.y)
    }
    dot(vector)
    {
        return this.x * vector.x + this.y * vector.y
    }
    magnitude()
    {
        return Math.pow(this.x **2 + this.y **2, 0.5)
    }
    toString()
    {
        return `Vector(${this.x},${this.y}) `
    }
}

const v1 = new Vector(3, 4)
const v2 = new Vector(1, 2)

const v3 = v1.add(v2)
const dotProduct = v1.dot(v2)
const magnitude = v1.magnitude()

console.log(v3.toString())
console.log(dotProduct)
console.log(magnitude)
