import sleep from "./helpers/sleep";

function printWithDelay(message: string) {
  console.log("START of function body");

  const promise = sleep(2000);
  promise.then(() => console.log(message));

  console.log("END of function body");
}

function printWithDelayAndResolvedValue(message: string) {
  console.log("START of function body");

  const promise = sleep(2000);
  promise.then((resolvedValue) => console.log(resolvedValue, message));

  console.log("END of function body");
}

// a promisified function is a function that returns
// a promise function. This promise function is a
// generic but at a specifc instance becomes of the
// same return type as the function that was 
// promisified. This promise function instantiates
// and gives control to manage the asyncronous
// execution thread.

function printWithDelayAndTypedCallback(message: string) {
  console.log("START of function body");

  const callbackVoidParam = (singleParam: void) =>
    console.log(singleParam, message);
  const callbackStringParam = (singleParam: string) =>
    console.log(singleParam, message);

  const promise = sleep(2000);
  promise.then(callbackVoidParam);
  // promise.then(callbackStringParam); 
  // type error: callbackStringParam wants a 
  // string argument but we're giving it a void
  // the promose return resolves to a type that
  // does not match callback function in .then

  console.log("END of function body");
}

printWithDelay("hello world!");
// printWithDelayAndResolvedValue("hello world!");
// printWithDelayAndTypedCallback("hello world!");
