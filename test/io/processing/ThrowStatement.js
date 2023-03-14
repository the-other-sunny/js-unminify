test1: {
  input: {
    if (foo())
      throw a, b;
  }
  expected_output: {
    if (foo()) {
      a;
      throw b;
    }
  }
}
test2: {
  input: {
    if (foo())
      throw a, b, c;
  }
  expected_output: {
    if (foo()) {
      a;
      b;
      throw c;
    }
  }
}