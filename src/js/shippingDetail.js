let data = {
    "complete-name": "",
    "email-address": "",
    address: "",
    "phone-number": "",
    courier: "",
    payment: "",
};

function check() {
    console.log(data);
    const find = Object.values(data).filter((item) => item === "");
    if (find.length === 0) {
        console.log(
            document.querySelector("#shipping-detail button[type='submit']")
        );
        document.querySelector(
            "#shipping-detail button[type='submit']"
        ).disabled = false;
    }
}

const inputs = document.querySelectorAll("#shipping-detail input[data-input]");
for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    input.addEventListener("change", function (event) {
        data[event.target.id] = event.target.value;
        check();
    });
}

const options = document.querySelectorAll("#shipping-detail button[data-name]");
for (let i = 0; i < options.length; i++) {
    const option = options[i];
    
    option.addEventListener("click", function () {
        const value = this.attributes["data-value"].value;
        const name = this.attributes["data-name"].value;

        data[name] = value;
        check();
    })
}