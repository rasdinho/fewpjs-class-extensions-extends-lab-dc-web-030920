class Polygon{
    constructor(sides){
        this.sides = sides
        this.count = this.sides.length
    }
    get countSides(){
        return this.sides.length
    }
    get perimeter(){
        let total = 0
        this.sides.forEach(side => {
            total += side
        })
        return total
    }

}

class Triangle extends Polygon {

    get isValid() {
      if (!Array.isArray(this.sides)) return;
      if (this.count !== 3) return;
      let side1 = this.sides[0]
      let side2 = this.sides[1]
      let side3 = this.sides[2]
      return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
    }
  }
  

class Square extends Polygon {
        get isValid(){
          if(!Array.isArray(this.sides)) return;
          if(this.count !== 4) return;
          let side1 = this.sides[0]
          let side2 = this.sides[1]
          let side3 = this.sides[2]
          let side4 = this.sides[3]
          return ((side1 === side2) && (side1 === side3) && (side1 === side4))
        }
        get area(){
            // if(!Array.isArray(this.sides)) return;
            // if(this.count !== 4) return;
            return this.sides[0] * this.sides[0]
        }
}



   




// The sum of the lengths of any two sides of a triangle is greater than the length of the third side.
//  If you take the three sides of a triangle and add them in pairs, the sum is greater than (not equal to) the third side.
//   If that is not true, then it is not possible to construct a triangle with the given side lengths.


// It will automatically have access to count and perimeter inherited from Polygon.

// Use the get keyword to make a getter method isValid that checks if the given 3 sides for a triangle is valid.