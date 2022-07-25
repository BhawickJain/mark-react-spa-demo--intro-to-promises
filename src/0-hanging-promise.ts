import sleep from "./helpers/sleep";

function printStraightforwardly(message: string) {
  console.log("START of function body");

  console.log(message);

  console.log("END of function body");
}

function printWithSleep(message: string) {
  console.log("START of function body");

  sleep(10000);
  console.log(message);

  console.log("END of function body");
}

// returns
// START of function body
// Hello world
// END of function body
//// 10 second delay ////
// Done in 11.72s
// Since sleep is a promise, message is logged
// but function scope / execution environment 
// not exited until promise is done. It is 
// non blocking to statements within the function
// scope but becomes blocking when function tries
// exit.

// printStraightforwardly("Hello world!");
printWithSleep("Hello world!");
