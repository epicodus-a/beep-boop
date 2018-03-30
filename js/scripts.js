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
const beepBoop = (number, name) => {
	// debugger;
	if (number % 3 === 0){
		return 'I\'m sorry, ' + name[0].toUpperCase()+ name.substring(1) +'. I\'m afraid I can\'t do that.';
	}else if(number.toString().includes("1")){
		return "Boop!";
	} else if(number.toString().includes("0")){
		return "Beep!";
	}else{
		return "I\'m not going to response to this one. ";
	}
};

// user interface logic
$().ready(function(){
	$("#number-form").submit(function (e) {
		e.preventDefault();
		let number = $("input:text").val();
		let name = $("input:text[name=name]").val();
		let order = $("input:radio[name=order]:checked").val();
		$(".output").append("<span class='text-capitalize font-weight-bold'>"+name+"</span><span> you entered:" + number + ". Fruits as belows:</span>");

		if (number >= 0){
			result = [];
			resultKey = [];
			if(order === 1){
				for(let i = 0; i <= parseInt(number); i++){
					resultKey.push(i);
					result.push(beepBoop(i, name));
				}
			}else{
				for(let i = parseInt(number); i >= 0; i--){
					resultKey.push(i);
					result.push(beepBoop(i, name));
				}
			}

			result.forEach(function(element, index){
				let child = "<p class='lead'>"+ resultKey[index] + ": " + element + "</p>";
				$(".output").append(child);
			});
		}else{
			let child = "<p class='lead'> Please enter a number >= 0</p>";
			$(".output").append(child);
		}
	});
});
