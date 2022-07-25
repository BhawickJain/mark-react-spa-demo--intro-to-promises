import sleep from "./helpers/sleep";

function printWithDelay() {
  console.log("START of function body");

  const promiseOne = sleep(2000);
  const promiseTwo = promiseOne.then(() =>
    console.log("resolved first promise")
  );
  const promiseThree = promiseTwo.then(() =>
    console.log("resolved second promise")
  );
  promiseThree.then(() => console.log("resolved third promise"));

  console.log("END of function body");
}

function printWithRepeatedDelay() {
  console.log("START of function body");

  const promiseOne = sleep(2000);
  const promiseTwo = promiseOne.then(() => {
    console.log("resolved first promise");
    return sleep(2000);
  });
  const promiseThree = promiseTwo.then(() => {
    console.log("resolved second promise");
    // return sleep(2000);
  });
  promiseThree.then(() => {
    console.log("resolved third promise");
    return sleep(2000);
  });

  console.log("END of function body");
}

// 2 seconds
// resolved first promise
// 2 seconds
// resovled second promise
// ...
// because each return is also
// a promise leading to .then again
// if you want asyncronous execution
// since the previous .then is a promise as well
// without return sleep, the next .then 
// executes immediately

// function printWithDelay() {
//   console.log("START of function body");

//   sleep(2000)
//     .then(() => console.log("resolved first promise"))
//     .then(() => console.log("resolved second promise"))
//     .then(() => console.log("resolved third promise"));

//   console.log("END of function body");
// }

// printWithDelay();
printWithRepeatedDelay();
