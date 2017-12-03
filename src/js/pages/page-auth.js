// authForm
(function () {
	var authForm = document.querySelector('.auth-form');
	var authLogin = authForm ? authForm.querySelector('.auth-login  .textline__origin') : false;
	var authPassword = authForm ? authForm.querySelector('.auth-password  .textline__origin') : false;
	var authSubmit = authForm ? authForm.querySelector('.auth-submit') : false;
	var isAuthForm = !!(authForm && authLogin && authPassword && authSubmit);


	if(isAuthForm) {
		/*
			При попытке отправить форму, должна проверяться почта на наличие и корректность, 
			минимум 5 символов пароля. Пока поля не валидны кнопка находится в состоянии disabled.
		*/

		authSubmit.disabled = true;

		var isEmpty = function (value) {
			return !!(value.length);
		};
		
		var isEmail = function (email) {
			return /.+@.+\..+/i.test(email); // выбор паттерна: https://habrahabr.ru/post/175375/
		};
		
		var isPassword = function (password) {
			return password.length > 4 ? true : false;
		};

		var isAuthFormValid = function () {
			var login = authLogin.value;
			var password = authPassword.value;
			if( !(isEmpty(login) && isEmpty(password) && isEmail(login) && isPassword(password)) ) {
				authSubmit.disabled = true;
				return false;
			}

			authSubmit.disabled = false;
			return true;
		};

		// login
		authLogin.addEventListener('blur', function (event) {
			var login = event.target.value;
			isAuthFormValid();
		});

		authLogin.addEventListener('input', function (event) {
			var login = event.target.value;
			isAuthFormValid();
		});


		// password
		authPassword.addEventListener('blur', function (event) {
			var password = event.target.value;
			isAuthFormValid();
		});
		authPassword.addEventListener('input', function (event) {
			var password = event.target.value;
			isAuthFormValid();
		});


		//submit
		authForm.addEventListener('submit', function (event) {
			if(!isAuthFormValid()) {
				event.preventDefault();
			}
			//console.log('isAuthFormValid: ' , isAuthFormValid());
		});
	}
})();