test1: {
  input: {
    for (var a, b, c, i = 0, l = 10; i < l; ++i) {
      foo();
    }
  }
  expected_output: {
    var a;
    var b;
    var c;
    for (var i = 0, l = 10; i < l; ++i) {
      foo();
    }
  }
}
test2: {
  input: {
    for (var a, b, c; i < l; ++i) {
      foo();
    }
  }
  expected_output: {
    var a;
    var b;
    var c;
    for (; i < l; ++i) {
      foo();
    }
  }
}
test3: {
  input: {
    for (var i = 0; i < l; ++i) {
      foo();
    }
  }
  expected_output: {
    for (var i = 0; i < l; ++i) {
      foo();
    }
  }
}
test4: {
  input: {
    for (var a; i < l; ++i) {
      foo();
    }
  }
  expected_output: {
    var a;
    for (; i < l; ++i) {
      foo();
    }
  }
}
test5: {
  input: {
    for (a, b, c, i = 0, l = 10; i < l; ++i) {
      foo();
    }
  }
  expected_output: {
    a;
    b;
    c;
    for (i = 0, l = 10; i < l; ++i) {
      foo();
    }
  }
}
test6: {
  input: {
    for (a, b, c; i < l; ++i) {
      foo();
    }
  }
  expected_output: {
    a;
    b;
    c;
    for (; i < l; ++i) {
      foo();
    }
  }
}
test7: {
  input: {
    for (i = 0; i < l; ++i) {
      foo();
    }
  }
  expected_output: {
    for (i = 0; i < l; ++i) {
      foo();
    }
  }
}
test8: {
  input: {
    for (a; i < l; ++i) {
      foo();
    }
  }
  expected_output: {
    a;
    for (; i < l; ++i) {
      foo();
    }
  }
}
test9: {
  input: {
    for(; i < l && cond(); ++i) {
      foo();
    }
  }
  expected_output: {
    for (; i < l; ++i) {
      if (!cond()) {
        break;
      }
      foo();
    }
  }
}
test10: {
  input: {
    for(; i < l && cond1() && cond2(); ++i) {
      foo();
    }
  }
  expected_output: {
    for (; i < l; ++i) {
      if (!cond1()) {
        break;
      }
      if (!cond2()) {
        break;
      }
      foo();
    }
  }
}
test11: {
  input: {
    for(; a, b, i < l; ++i) {
      foo();
    }
  }
  expected_output: {
    for (;; ++i) {
      a;
      b;
      if (i >= l) {
        break;
      }
      foo();
    }
  }
}
test12: {
  input: {
    for (var a = 1, b = 2; i < l;) {
      foo();
    }
  }
  expected_output: {
    var a = 1;
    var b = 2;
    while (i < l) {
      foo();
    }
  }
}
test13: {
  input: {
    for (a = 1, b = 2; i < l;) {
      foo();
    }
  }
  expected_output: {
    a = 1;
    b = 2;
    while (i < l) {
      foo();
    }
  }
}