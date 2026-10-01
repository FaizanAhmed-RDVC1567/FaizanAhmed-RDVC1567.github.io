document.setaddEventListener("DOMContentLoaded", () => {
	const form = document.querySelector("form");

	form.addEventListener("submit", (event) => {
		
		setTimeout(() => {
			window.location.reload();  // reloads the page
		}, 3000);  // wait 3 seconds before reloading
	});

	const linkedinBtn = document.getElementById("linkedinBtn");
	linkedinBtn.addEventListener("click", () => {
		window.location.href = "https://linkedin.com/in/faizan-ahmed-a5568122b";
	});
});
