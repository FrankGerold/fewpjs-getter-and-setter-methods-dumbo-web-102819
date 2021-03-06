class Circle {
  constructor (radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }
  set diameter(value) {
    this.radius = value / 2;
  }

  get circumference() {
    return this.diameter * Math.PI;
  }
  set circumference(value) {
    this.diameter = value / Math.PI;
    this.radius = this.diameter / 2;
  }

  get area() {
    return (this.radius ** 2) * Math.PI
  }
  set area(value) {
    this.radius = Math.sqrt(value / Math.PI)
  }

}
