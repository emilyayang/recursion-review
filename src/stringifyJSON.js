// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
//input:object or array or value
//output: string
  //if typeof obj is undefined or symbol or null or function
    // return "null"
  //if type of obj is boolean or number
    // return obj without quotes
  //if type of obj is string
    // return obj with quotes
  // if obj !isArray or is an obj
    //create a result variable = "{"
    //loop through for..in 
      //result += stringifyJSON(obj[key])
  // if obj isArray
  //create a result variable = "["
    //loop through with for loop 
      //result += stringifyJSON(obj[i])
  //return result
  if (typeof obj === "symbol" || obj === null) {
    return "null";
  }
  else if (typeof obj === "function" || obj === undefined ) {
    return "";
  }
  else if (typeof obj === "boolean" || typeof obj === "number") {
    return `${obj}`;
  }
  else if (typeof obj === "string") {
    return `"${obj}"`;
  }
  else if (typeof obj === "object") {
    if (!Array.isArray(obj)) { //if it is an object
      var output = `{`;
      if (Object.keys(obj).length === 0 && obj.constructor === Object) {
        return "{}";
      }

      for (var key in obj) {
        if (typeof obj[key] === "function" || obj[key] === undefined || key === undefined) {
          return "{}";
        }
        output += stringifyJSON(key) + ":" + stringifyJSON(obj[key]) + ",";
      }
        return output.slice(0,-1) + `}`;
    }
    else if (Array.isArray(obj)) { //if it is an array
      var output = `[`;
      if (obj.length === 0) {
          return "[]";
      }
    for (var i = 0; i < obj.length; i++) {
       output += stringifyJSON(obj[i]) + ",";
    }
    return output.slice(0,-1) + `]`;
    }
  }
  return output;
};

stringifyJSON({ x: 5, y: 6 });
// console.log(stringifyJSON({ x: 5, y: 6 }));
// // expected output: "{"x":5,"y":6}"
// // "{"x":5,"y":6
// var test = { x: 5, y: 6 };
// var obj = [null, undefined, 2, false, "hi"]

stringifyJSON([null, undefined, 2, false, "hi"]);
// // expected output: "[null,null,2,false,"hi"]"