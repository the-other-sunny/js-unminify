test1: {
  input: {
    for (var a, b, c, i = 0, iMax = 10; i <= iMax; ++i) {
      foo();
    }
  }
  expected_output: {
    var a;
    var b;
    var c;
    for (var i = 0, iMax = 10; i <= iMax; ++i) {
      foo();
    }
  }
}
test2: {
  input: {
    for (var a, b, c; i <= iMax; ++i) {
      foo();
    }
  }
  expected_output: {
    var a;
    var b;
    var c;
    for (; i <= iMax; ++i) {
      foo();
    }
  }
}
test3: {
  input: {
    for (var i = 0; i <= iMax; ++i) {
      foo();
    }
  }
  expected_output: {
    for (var i = 0; i <= iMax; ++i) {
      foo();
    }
  }
}
test4: {
  input: {
    for (var a; i <= iMax; ++i) {
      foo();
    }
  }
  expected_output: {
    var a;
    for (; i <= iMax; ++i) {
      foo();
    }
  }
}
test5: {
  input: {
    for (a, b, c, i = 0, iMax = 10; i <= iMax; ++i) {
      foo();
    }
  }
  expected_output: {
    a;
    b;
    c;
    for (i = 0, iMax = 10; i <= iMax; ++i) {
      foo();
    }
  }
}
test6: {
  input: {
    for (a, b, c; i <= iMax; ++i) {
      foo();
    }
  }
  expected_output: {
    a;
    b;
    c;
    for (; i <= iMax; ++i) {
      foo();
    }
  }
}
test7: {
  input: {
    for (i = 0; i <= iMax; ++i) {
      foo();
    }
  }
  expected_output: {
    for (i = 0; i <= iMax; ++i) {
      foo();
    }
  }
}
test8: {
  input: {
    for (a; i <= iMax; ++i) {
      foo();
    }
  }
  expected_output: {
    a;
    for (; i <= iMax; ++i) {
      foo();
    }
  }
}