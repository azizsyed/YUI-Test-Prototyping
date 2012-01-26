/* Author:

*/

var Validator = new Class({
	Implements : Options,
	options : {
		invalidCharacters : "!@#$%^*()-_=+`~",
		numbers : "0123456789"
	},
	initialize : function(){
	},
	Validate : function(test){
		return !this.HasNumbers(test) && !this.HasInvalidCharacters(test);
	},
	HasNumbers : function(test){
		return this.Contains(test,this.options.numbers);
	},
	HasInvalidCharacters : function(test){
		return this.Contains(test,this.options.invalidCharacters);
	},
	Contains : function(string1, string2){
		var contains = false;
		
		for (var x=0; x<string1.length;x++){
			for (var y=0; y<string2.length; y++){
				if (string1[x]==string2[y]){
					contains = true;
				}
			}
		}
		
		return contains;
	}
});