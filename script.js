const button = document.querySelector(".button");
const rege = new RegExp(
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

button.addEventListener("click", function check() {
	const inputs = document.querySelectorAll("input");
	for (let i = 0; i < inputs.length; i++) {
		
		let input = inputs[i];
		const redAlert = (input.style.border = "2px solid hsl(0, 100%, 74%)");
		input.style.background = "url(/images/icon-error.svg) 95% center no-repeat";

		if (
			(input.placeholder == "Email Address" ||
				input.placeholder == "email@example/com") &&
			(rege.test(input.value) == false) & (input.value != "")
		) {
			redAlert;
			input.nextElementSibling.textContent = `Looks like this is not an email`;
			input.value = "";
			input.placeholder = "email@example/com";
			input.classList.remove("placeholderinvisible");
			input.classList.add("placeholderred");
		} else if (input.value === "") {
			if (input.placeholder == "email@example/com") {
				input.placeholder = "Email Address";
			}
			input.nextElementSibling.textContent = `${input.placeholder} cannot be empty`;
			input.classList.add("placeholderinvisible");
			redAlert;
		} else {
			input.nextElementSibling.textContent = "";
			input.style.border = "1px solid lightgrey";
			input.style.background = "none";
			input.classList.remove("placeholderred", "placeholderinvisible");
		}
	}
});
