//   return document.getElementsByClassName(className);
// };

//The getElementsByClassName method of Document interface returns an array-like object of all child 
//elements which have all of the given class names. When called on the document object, the complete 
//document is searched, including the root node. You may also call getElementsByClassName() on any element;
// it will return only elements which are descendants of the specified root element with the given class names.

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {
  //use document body to get array like of all elements that have class names
 ////need to create function inside to not rewrite result var 
    //if element has child nodes
      //iterate through the body

        //recusively call getElementsByClassName on element.childnodes
    //else 
      //if className matches add the .class name to the result 
  var body = document.body;
  var result = [];
  return function(element) {
    if (element.hasChildNodes()) {
      for (var element = 0; element < body.length; element++) {
        return getElementsByClassName(element.childNodes);
      } else {
      if (element.className === className) {
        result.push(element);
  console.log(element)        
  console.log(element.className)        
      }
      }
    }
  }
  return result;
};