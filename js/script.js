/* Author:

*/

var main = {
	elements : {},
	Initialize : function(){
		this.elements.button = $("submit");
		this.elements.button.addEvent("click", this.Verify.bind(this));
		
		this.elements.input = $("test");
		
		this.elements.validator = new Validator();
	},
	Verify : function(e){
		var valid = this.elements.validator.Validate(this.elements.input.value);
		
		$("result").innerHTML = valid ? "Valid" : "Invalid";
	}
}

window.addEvent('domready', function() {
	main.Initialize();
});






