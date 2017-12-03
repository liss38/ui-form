// modal
(function () {
	var modalLink = document.querySelectorAll('.js-modal-link');
	var modalWindow = document.querySelectorAll('.modal-window');
	var modalCloseButton = document.querySelectorAll('.modal-close');

	function modalOpen(event) {
		event.preventDefault();
		var modalTarget = '.'+ event.target.getAttribute('data-modal-target-class');
		var modalWindow = document.querySelector(modalTarget);
		modalWindow.classList.add('modal-window--active');
	}

	function modalClose(currentWindow) {
		event.preventDefault();
		currentWindow.classList.remove('modal-window--active');
	}


	// modal open init for all
	if(modalLink.length > 0) {
		[].forEach.call(modalLink, function (el) {
			el.addEventListener('click', modalOpen);
		});
	}

	// modal close by cross 'X'
	if(modalCloseButton.length > 0) {
		[].forEach.call(modalCloseButton, function (el) {
			el.addEventListener('click', function (event) {
				modalClose(event.target.parentElement);
			});
		})
	}


	// modal close by Escape 'Esc'
	if(modalWindow.length > 0) {
		window.addEventListener('keydown', function (event) {
			if (event.keyCode === 27) {
				[].forEach.call(modalWindow, modalClose);
			}
		});
	}
})();