function Journey(object, crew, balloons) {
  this.object = object;
}

Journey.prototype.isPossible = function () {
  return this.balloons * 0.0048 >= this.object.weight + this.crew * 80;
};
