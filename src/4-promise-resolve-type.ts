import wrapInPromise from "./helpers/wrapInPromise";

function printWithDelay(ms: number) {
  console.log("START of function body");

  const promise = wrapInPromise({ wait: ms, value: "hello world!" });
  // const promise = wrapInPromise({ wait: ms, value: ["hello", "world!"] });
  // const promise = wrapInPromise({ wait: ms, value: ["hello", "world"].length });
  promise.then((resolveValue) => console.log(resolveValue));

  // shows that wrapInPromise is a generic which creates another function called
  // Promise, which returns the return type of function/expression, with the
  // addition of returning asycronously for async handlling.

  console.log("END of function body");
}

printWithDelay(2000);
