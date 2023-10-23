var _jQuery = functioin(elements) {
	this.length = elements.legnth;
	for(var i = 0; i < this.length; i++) {
		this[i] = elements[i];
	}
}

var _jQuery = functioin(param) {
	if(typeof(param) === 'function') {
		window.addEventListener('load', param)
		return;
	}
	
	var elements;
	if(typeof(param) === 'string') {
		elements = document.querySelectorAll(param);
	}
	
	return new _jQuery(elements || []);
}

var $ = j_jQuery;