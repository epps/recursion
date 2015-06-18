// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var elements = [];
	var nextNode = function(node) {
		if (node.classList.contains(className)) {
			elements.push(node);
		}
		node = node.firstElementChild;
		while (node) {
			nextNode(node);
			node = node.nextElementSibling;
		} 
	};
	nextNode(document.body);
	return elements;
};

/*
var getElementsByClassName = function(className){
	var elements = [];
	var nextNode = function(node) {
		if (node.classList.contains(className)) {
			elements.push(node);
		}
		node = node.firstElementChild;
		if (node) {
			nextNode(node);
			node = node.nextElementSibling;
		} 
	};
	nextNode(document.body);
	console.log(elements);
};
*/
