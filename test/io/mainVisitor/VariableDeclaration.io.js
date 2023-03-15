test1: {
  input: {
    var a, b = 1, c, d = 2;
  }
  expected_output: {
    var a;
    var b = 1;
    var c;
    var d = 2;
  }
}
test2: {
  input: {
    const a = (foo(), bar(), taz());
  }
  expected_output: {
    foo();
    bar();
    const a = taz();
  }
}
test3: {
  input: {
    let a = 1, b = (x(), y()), c;
  }
  expected_output: {
    let a = 1;
    x();
    let b = y();
    let c;
  }
}