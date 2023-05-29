const userNameElement = document.querySelector("input[name='username']");
const passwordElement = document.querySelector("input[name='password']");
const formMessageUserName = userNameElement.parentElement.querySelector(".form-message");
const formMessagePassword = passwordElement.parentElement.querySelector(".form-message");

function validate(event) {
    event.preventDefault();

    if (userNameElement.value.trim() === "") {
        formMessageUserName.innerText = "Không được bỏ trống !";
    }

    if (passwordElement.value.trim() === "") {
        formMessagePassword.innerText = "Không được bỏ trống !";
    }

}

userNameElement.addEventListener("blur", () => {

    console.log(formMessageUserName)

    if(userNameElement.value.trim() === "") {
        formMessageUserName.innerText = "Không được bỏ trống !";
    }

});

passwordElement.addEventListener("blur", () => {
    console.log(formMessagePassword);

    if(passwordElement.value.trim() === "") {
        formMessagePassword.innerText = "Không được bỏ trống !";
    }

});

userNameElement.addEventListener("input", () => {
    formMessageUserName.innerText = "";
});

passwordElement.addEventListener("input", () => {
    formMessagePassword.innerText = "";
});