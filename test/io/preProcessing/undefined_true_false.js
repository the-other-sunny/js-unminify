test1: {
  input: {
    void 0;
    !0;
    !1;
    f(void 0, !0, !1);
  }
  expected_output: {
    undefined;
    true;
    false;
    f(undefined, true, false);
  }
}