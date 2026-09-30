document.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector("form");

	form.addEventListener("submit", (event) => {
		const emailField = document.getElementById("email");
		const messageField = document.getElementById("message");
		const honeypot = document.querySelector("input[name='hFi']");

		// simple validation
		if (!emailField.value.includes("@")) {
			alert("Please enter a valid email address.");
			event.preventDefault();
			return;
		}

		if (messageField.value.trim() === "") {
			alert("Message cannot be empty.");
			event.preventDefault();
			return;
		}

		if (honeypot.value !== "") {
			alert("Bot detected. Submission blocked.");
			event.preventDefault();
			return;
		}
		form.reset();
	});

	const linkedinBtn = document.getElementById("linkedinBtn");
	linkedinBtn.addEventListener("click", () => {
		window.location.href = "https://linkedin.com/in/faizan-ahmed-a5568122b";
	});
});
