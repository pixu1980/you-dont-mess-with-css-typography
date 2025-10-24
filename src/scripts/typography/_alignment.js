window.addEventListener("DOMContentLoaded", (event) => {
	const horizontalAlign = document.querySelector(
		".horizontal-alignment--example",
	);
	const horizontalAlignExample = horizontalAlign.querySelector("example");
	const horizontalAlignInputs = horizontalAlign.querySelectorAll(
		'input[name="horizontal-alignment"]',
	);

	const textAlignDefault = window.uiuxEngineering.getCustomProperty(
		"--text-align",
		horizontalAlignExample,
	);

	horizontalAlignInputs.forEach((input) => {
		input.checked = textAlignDefault === input.value;

		input.addEventListener("change", function () {
			if (this.checked) {
				horizontalAlignExample.style.setProperty("--text-align", this.value);
			}
		});
	});

	const verticalAlign = document.querySelector(".vertical-alignment--example");
	const verticalAlignExample = verticalAlign.querySelector("example");
	const verticalAlignInputs = verticalAlign.querySelectorAll(
		'input[name="vertical-alignment"]',
	);

	const verticalAlignDefault = window.uiuxEngineering.getCustomProperty(
		"--vertical-align",
		verticalAlignExample,
	);

	verticalAlignInputs.forEach((input) => {
		input.checked = verticalAlignDefault === input.value;

		input.addEventListener("change", function () {
			if (this.checked) {
				verticalAlignExample.style.setProperty("--vertical-align", this.value);
			}
		});
	});
});
