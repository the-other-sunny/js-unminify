test1: {
  input: {
    if (foo(), bar(), test())
      taz();
  }
  expected_output: {
    foo();
    bar();
    if (test()) {
      taz();
    }
  }
}
test2: {
  input: {
    if (a && (b, c))
      cons();
  }
  expected_output: {
    if (a) {
      b;
      if (c) {
        cons();
      }
    }
  }
}
test3: {
  input: {
    function f() {
      if (cond1 && (a, cond2)) {
        return x;
      } else
        alt();
    }
  }
  expected_output: {
    function f() {
      if (cond1) {
        a;
        if (cond2) {
          return x;
        }
      }
      alt();
    }
  }
}
test4: {
  input: {
    function f() {
      label: {
        if (cond1 && (a, cond2)) {
          return x;
        } else
          alt();
      }
    }
  }
  expected_output: {
    function f() {
      label: {
        if (cond1) {
          a;
          if (cond2) {
            return x;
          }
        }
        alt();
      }
    }
  }
}
test5: {
  input: {
    function f() {
      if (cond1 || (a, cond2)) {
        cons();
      } else {
        return x;
      }
    }
  }
  expected_output: {
    function f() {
      if (!cond1) {
        a;
        if (!cond2) {
          return x;
        }
      }
      cons();
    }
  }
}
test6: {
  input: {
    function f() {
      label: {
        if (cond1 || (a, cond2)) {
          cons();
        } else {
          return x;
        }
      }
    }
  }
  expected_output: {
    function f() {
      label: {
        if (!cond1) {
          a;
          if (!cond2) {
            return x;
          }
        }
        cons();
      }
    }
  }
}
test7: {
  input: {
    function f() {
      if (cond1 || (a, cond2))
        cons();
    }
  }
  expected_output: {
    function f() {
      if (!cond1) {
        a;
        if (!cond2) {
          return;
        }
      }
      cons();
    }
  }
}
test8: {
  input: {
    function f() {
      if (cond1 || (a, cond2)) {
        return x;
      }
      foo();
      bar();
    }
  }
  expected_output: {
    function f() {
      if (!cond1) {
        a;
        if (!cond2) {
          foo();
          bar();
          return;
        }
      }
      return x;
    }
  }
}