document.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector("form");

	form.addEventListener("submit", async (event) => {
		event.preventDefault();  // stop default browser submission

		const formData = new FormData(form);
		const response = await fetch(form.action, {
			method: form.method,
			body: formData,
			headers: { Accept: "application/json" }
		});

		if (response.ok) {
			alert("Message sent successfully!");
			form.reset();
		} else {
			alert("Oops! Something went wrong.")
			console.log(response);
		}
	});

	const linkedinBtn = document.getElementById("linkedinBtn");
	linkedinBtn.addEventListener("click", () => {
		window.location.href = "https://linkedin.com/in/faizan-ahmed-a5568122b";
	});
});
