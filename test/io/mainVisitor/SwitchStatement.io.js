test1: {
  input: {
    switch (a, b, c) {
      default:
        bar();
    }
  }
  expected_output: {
    a;
    b;
    switch (c) {
      default:
        bar();
    }
  }
}