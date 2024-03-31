const form = document.getElementById("registrationForm");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    errorMessage.innerHTML = "";

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const age = document.getElementById("age");
    const profession = document.getElementById("profession");
    const password = document.getElementById("password");
    const terms = document.getElementById("terms");

    if (name.value.length < 2 || name.value.length > 20 || !name.value.match(/^[A-Za-zА-Яа-яЁё\s]+$/)) {
        errorMessage.innerHTML += "Введите имя от 2 до 20 символов, содержащее только буквы и пробелы.<br>";
    }

    if (!email.checkValidity()) {
        errorMessage.innerHTML += "Введите корректный email.<br>";
    }

    if (age.value === "" || age.value < 18) {
        errorMessage.innerHTML += "Введите корректный возраст (от 18 лет).<br>";
    }

    if (profession.value === "") {
        errorMessage.innerHTML += "Выберите профессию.<br>";

    }

    if (!password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)) {
        errorMessage.innerHTML += "Пароль должен быть не менее 8 символов и содержать хотя бы одну заглавную букву, одну строчную букву и одну цифру.<br>";
    }

    if (!terms.checked) {
        errorMessage.innerHTML += "Согласитесь с обработкой данных.<br>";
    }

    if (errorMessage.innerHTML === "") {
        console.log("Имя: " + name.value);
        console.log("Email: " + email.value);
        console.log("Возраст: " + age.value);
        console.log("Пол: " + (document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : ""));
        console.log("Профессия: " + profession.value);
        console.log("Пароль: " + password.value);

        form.reset();
    }
});