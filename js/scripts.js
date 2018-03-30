// business logic
const beepBoop = (number, name) => {
	if (number % 3 === 0) {
		return 'I\'m sorry, ' + name[0].toUpperCase() + name.substring(1) + '. I\'m afraid I can\'t do that.';
	} else if (number.toString().includes("1")) {
		return "Boop!";
	} else if (number.toString().includes("0")) {
		return "Beep!";
	} else {
		return number;
	}
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// user interface logic
$().ready(function () {
	$("#number-form").submit(function (e) {
		e.preventDefault();
		let number = $("input:text").val();
		let name = $("input:text[name=name]").val();
		let order = $("input:radio[name=order]:checked").val();
		$("#reset").show();
		$(".output").append("<span class='text-capitalize font-weight-bold display-3 mb-4'>" + name + ", </span><span class='display-4'> you entered: " + number + "</span><p class='lead my-3'><strong>Results as belows:</strong></strong></p>");

		if (number >= 0) {
			result = [];
			resultKey = [];
			if (order === '0') {
				for (let i = 0; i <= parseInt(number); i++) {
					resultKey.push(i);
					result.push(beepBoop(i, name));
				}
			} else {
				for (let i = parseInt(number); i >= 0; i--) {
					resultKey.push(i);
					result.push(beepBoop(i, name));
				}
			}

			result.forEach(function (element, index) {
				let child = "<p class='lead'>" + resultKey[index] + ": " + element + "</p>";
				$(".output").append(child);
			});
		} else {
			let child = "<p class='lead'> Please enter a number >= 0</p>";
			$(".output").append(child);
		}
	});

	// reload page when click reset
	$("#reset").click(function () {
		window.location.reload();
	})
});
