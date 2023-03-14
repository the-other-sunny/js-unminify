test1: {
  input: {
    function f() {
      return a, b, c;
    }
  }
  expected_output: {
    function f() {
      a;
      b;
      return c;
    }
  }
}
test2: {
  input: {
    function f() {
      return a ? b : c;
    }
  }
  expected_output: {
    function f() {
      if (a) {
        return b;
      } else {
        return c;
      }
    }
  }
}
test3: {
  input: {
    function f() {
      return void foo();
    }
  }
  expected_output: {
    function f() {
      foo();
      return;
    }
  }
}
test4: {
  input: {
    function f() {
      return a = 1;
    }
  }
  expected_output: {
    function f() {
      a = 1;
      return a;
    }
  }
}
test5: {
  input: {
    function f() {
      return undefined;
    }
  }
  expected_output: {
    function f() {
      return;
    }
  }
}
test6: {
  input: {
    function f() {
      return a === 1 && bar();
    }
  }
  expected_output: {
    function f() {
      if (a !== 1) {
        return false;
      } else {
        return bar();
      }
    }
  }
}
test7: {
  input: {
    function f() {
      return a !== 1 || bar();
    }
  }
  expected_output: {
    function f() {
      if (a !== 1) {
        return true;
      } else {
        return bar();
      }
    }
  }
}
test8: {
  input: {
    function f() {
      return a === 1 || b <= 2 && !c;
    }
  }
  expected_output: {
    function f() {
      return a === 1 || b <= 2 && !c;
    }
  } 
}