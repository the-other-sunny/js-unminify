test0: {
  this.data.humanoidInfo && (this.data.humanoidInfo.restrictions = e);
  this.canMoveDiagonally = !e.cantWalk8Directions;
  if (this.canMoveDiagonally === false && 0 === (1 & this.direction)) {
    var t = this.direction + 1;
    if (t > 7) {
      t = 1;
    }
    this.setDisposition(this.position, t);
  }
}
test1: {
  a;
  if (b) {
    foo();
  } else {
    c;
    if (d) {
      bar();
    }
  }
}