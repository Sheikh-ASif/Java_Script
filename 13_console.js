//In the javaScript there are various methods that we can used for particular used

// these all are the methods that we are used in the js
// Object [console] {
//     log: [Function: log],
//     warn: [Function: warn],
//     dir: [Function: dir],
//     time: [Function: time],
//     timeEnd: [Function: timeEnd],
//     timeLog: [Function: timeLog],
//     trace: [Function: trace],
//     assert: [Function: assert],
//     clear: [Function: clear],
//     count: [Function: count],
//     countReset: [Function: countReset],
//     group: [Function: group],
//     groupEnd: [Function: groupEnd],
//     table: [Function: table],
//     debug: [Function: debug],
//     info: [Function: info],
//     dirxml: [Function: dirxml],
//     error: [Function: error],
//     groupCollapsed: [Function: groupCollapsed],
//     Console: [Function: Console],
//     profile: [Function: profile],
//     profileEnd: [Function: profileEnd],
//     timeStamp: [Function: timeStamp],
//     context: [Function: context],
//     createTask: [Function: createTask]
//   }

let obj = { a:2, b:3, c:4, d:9}
console.table(obj)

console.log(obj)

let a = 4;
let b = 5;
let sum = a+b;
console.warn("This method try to add these two numbers")
console.log(sum)

// console.clear(" ")
console.info(sum)
console.time("sum")
console.timeEnd("sum")
console.timeStart("sum")