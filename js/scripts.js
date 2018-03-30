// - Program replaces 0 with 'Beep!'
// - Example Input: 0
// - Example Output: ['Beep!']
// - Program replaces 1 with 'Boop!'
// - Example Input: 1
// - Example Output: ['Boop!']
// - Program replace numbers divsible by 3 with ['I\'m sorry, Dave. I'm afraid I can't do that.']
// - Example Input: 30
// - Example Output: ['I\'m sorry, Dave. I'm afraid I can't do that.']

// business logic
const beepBoop = (number) => {
	if (number % 3 === 0){
		return 'I\'m sorry, Dave. I\'m afraid I can\'t do that.';
	}else if(number.toString().includes("1")){
		return "Boop!";
	} else if(number.toString().includes("0")){
		return "Beep!";
	}
};

// user interface logic
$().ready(function(){
	$("#number-form").submit(function (e) {
		e.preventDefault();
		let number = $("input:text").val();
		result = [];
		for(let i = 0; i <= parseInt(number); i++){
			result.push(beepBoop(i));
		}
		result.forEach(function(element){
			let child = "<p class='lead'>" + element + "</p>";
			$(".output").append(child);
		})
	});
});
