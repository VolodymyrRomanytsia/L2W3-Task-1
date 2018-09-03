if(!Array.prototype.map) {
	Array.prototype.map = function(callback, thisArg) {
  	if (this == null) {
    	throw new TypeError('this is null or not defined');
    }
 	if(!Array.isArray(this)) {
    	throw new TypeError(`${this} is not array`); 
	}
	if (typeof callback !== 'function') {
    	throw new TypeError(`${callback} is not a function`);
    }
    const arr2 =[];
		for (let i = 0; i < this.length; i++) {
    	arr2.push(callback(this[i]));
    }
		return arr2;
	}
}

let arr = [1,2,3,4];
let arr2 = arr.map(
	function(a) {
		return a * a
	}
)
console.log(arr2);
