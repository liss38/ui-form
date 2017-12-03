//input text focus/blur visual effect
(function () {
	var textline = document.querySelectorAll('.textline');

	if(textline.length > 0) {
		[].forEach.call(textline, function (el) {
			var input = el.querySelector('.textline__origin');
			
			input.addEventListener('focus', function (event) {
				var parent = event.target.parentElement;
				parent.querySelector('.textline__icon').classList.add('onfocus');
				parent.classList.add('onfocus');

			});

			input.addEventListener('blur', function (event) {
				var parent = event.target.parentElement;
				parent.querySelector('.textline__icon').classList.remove('onfocus');
				parent.classList.remove('onfocus');
			});
		});
	}
})();