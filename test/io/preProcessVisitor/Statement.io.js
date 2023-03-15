block_insertion_1: {
  input: {
    do
      foo();
    while (condition());
  }
  expected_output: {
    do {
      foo();
    } while (condition());
  }
}
block_insertion_2: {
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
block_insertion_3: {
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
block_insertion_4: {
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
block_insertion_5: {
  input: {
    if (condition())
      foo();
  }
  expected_output: {
    if (condition()) {
      foo();
    }
  }
}
block_insertion_6: {
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
block_insertion_7: {
  input: {
    while (condition())
      foo();
  }
  expected_output: {
    while (condition()) {
      foo();
    }
  }
}
block_insertion_8: {
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
block_insertion_9: {
  input: {
    while (condition());
  }
  expected_output: {
    while (condition()) {}
  }
}