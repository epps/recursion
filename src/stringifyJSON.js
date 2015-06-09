// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // if (obj === null) {
  // 	console.log("The obj " + obj + " is null");
  // } else if (Array.isArray(obj)) {
  // 	console.log("The obj " + obj + " is an array");
  // } else {
  // 	console.log("The obj " + obj + " is a " + typeof obj);
  // }

  if (obj === null) {
  	return "null";
  } else if (typeof obj === "string") {
  	return '"'+obj+'"';

  } else if (Array.isArray(obj)) {
  	var strArr = '[',
  		i = 0,
  		leng = obj.length,
  		lastEl = obj.length -1,
  		el;
  	for(i; i<leng; i++) {
  		el = stringifyJSON(obj[i]);
  		strArr += el;
  		strArr += (i < lastEl) ? "," : "";
  	}
  	return strArr += ']';
  } else if (typeof obj === "object") {
  	var strObj = '{',
  		keyStr,
  		valStr,
  		lastkey = Object.keys(obj).pop(); 
  	for (var key in obj) {
  		if (typeof obj[key] === "function" || typeof obj[key] === "undefined") {
  			strObj += "";
  		} else {
  		keyStr = stringifyJSON(key);
  		valStr = stringifyJSON(obj[key]);
  		strObj += keyStr + ':' + valStr;
  		strObj += (key == lastkey) ? "" : ",";
	  	}
  	}
  	return strObj += '}';
  } else {
  	return obj.toString();
  }

};
