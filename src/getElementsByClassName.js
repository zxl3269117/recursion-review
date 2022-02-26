// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node
) {
  var results = [];
  var currentNode = node || document.body;
  var classList = currentNode.classList;

  if (classList.contains(className)) {
    results.push(currentNode);
  }

  // BASE CASE
  if (currentNode.childNodes.length === 0) {
    return results;
  }

  // RECURSIVE CASE
  if (currentNode.childNodes.length > 0) {
    _.each(currentNode.childNodes, function (childNode) {
      if (childNode.classList) {
        results = results.concat(getElementsByClassName(className, childNode));
      }
    });
  }
  return results;
};
