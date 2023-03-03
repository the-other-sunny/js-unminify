test0: {
  i.response = e;
  e.json().then(function (i) {
    console.error(new Error("Haapi status: " + e.status + " " + e.statusText + " " + t + " " + i.reason));
  });
  throw i;
}