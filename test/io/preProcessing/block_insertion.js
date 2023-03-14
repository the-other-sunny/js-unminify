test1: {
  input: {
    do
      foo();
    while (test());
  }
  expected_output: {
    do {
      foo();
    } while (test());
  }
}
test2: {
  input: {
    for (const a in A)
      foo();
  }
  expected_output: {
    for (const a in A) {
      foo();
    }
  }
}
test3: {
  input: {
    for (const a of A)
      foo();
  }
  expected_output: {
    for (const a of A) {
      foo();
    }
  }
}
test4: {
  input: {
    for (let i = 0; i < iMax; ++i)
      foo();
  }
  expected_output: {
    for (let i = 0; i < iMax; ++i) {
      foo();
    }
  }
}
test5: {
  input: {
    if (test())
      foo();
  }
  expected_output: {
    if (test()) {
      foo();
    }
  }
}
test6: {
  input: {
    bar:
      foo();
  }
  expected_output: {
    bar: {
      foo();
    }
  }
}
test7: {
  input: {
    while (test())
      foo();
  }
  expected_output: {
    while (test()) {
      foo();
    }
  }
}
test8: {
  input: {
    with (x)
      foo();
  }
  expected_output: {
    with (x) {
      foo();
    }
  }
}
test9: {
  input: {
    while (test());
  }
  expected_output: {
    while (test()) {}
  }
}
