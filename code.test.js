const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

var test1 = [[1],[2],[3],[4],[5],[0]]

assert(hasCycle(test1) == true)

var test2 = [[1],[2],[3],[4],[5],[]]

assert(hasCycle(test2) == false)

var test3 = [[1,4,5],[6],[1,3],[],[],[1],[2]]

assert(hasCycle(test3) == true)


var test4 = [[1],[2],[],[1]]

assert(hasCycle(test4) == false)

var test5 = []

assert(hasCycle(test5) == false)

var test6 = [[]]

assert(hasCycle(test6) == false)
