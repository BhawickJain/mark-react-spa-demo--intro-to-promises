import sleep from "./helpers/sleep";

function printWithDelay(message: string) {
  console.log("START of function body");

  sleep(5000).then(() => console.log(message));
  // we tell that execution thread defined in the
  // callback function inside .then is dependend
  // on what is returned by the promise of the
  // previous function. 
  //
  // The line by line execution thread as written
  // is called the syncronous execution thread. 
  // One statement is executed and evaluated before
  // the next. But, since sleep return a promise
  // the syncronous execution thread just continues.
  // The code inside .then thus follows an
  // asyncronous execution thread as they are
  // executed after sleep has been resolved. 
  //
  // Another way to look at it, if sleep was not
  // returning a promise, and then was map, the
  // syncronous execution thread would have resolved
  // sleep fully then .map the return with .log.
  //
  // You can't have a then, when there is no promise
  // returned, as .then is conceptually implied by
  // how syncronous execution flow works. Then defines
  // an asyncronous execution flow once a promise is
  // instantiated.
  // 
  // A promise return implies code below and outside
  // of then does not depend on its return. Whilst
  // code inside .then does. .then code handles the
  // return of the promise.
  //
  // A promise effectively control _when_ .then is
  // executed.

  console.log("END of function body");
}

printWithDelay("Hello world!");
