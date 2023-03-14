test1: {
  input: {
    foo(), bar(), taz();
  }
  expected_output: {
    foo();
    bar();
    taz();
  }
}
test2: {
  input: {
    test() ? cons() : alt();
  }
  expected_output: {
    if (test()) {
      cons();
    } else {
      alt();
    }
  }
}
test3: {
  input: {
    test() && cons();
  }
  expected_output: {
    if (test()) {
      cons();
    }
  }
}
test4: {
  input: {
    test() || alt();
  }
  expected_output: {
    if (!test()) {
      alt();
    }
  }
}
test5: {
  input: {
    a = (foo(), bar(), value);
  }
  expected_output: {
    foo();
    bar();
    a = value;
  }
}