import { removeClass } from "./utils-class";

const cart = ["1", "2", "3"];
// stringify: mengubah string menjadi bentuk object
localStorage.setItem("cart", JSON.stringify(cart));

const shoppingCart = document.getElementById("shopping-cart");

if (shoppingCart) {
    // icon cart di navbar
    const headerCart = document.getElementById("header-cart");
    const buttons = shoppingCart.querySelectorAll("button[data-delete-item]");
    console.dir(buttons)

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        console.dir(button.attributes)
        const id = button.attributes["data-delete-item"].value;
        console.log(id)

        button.addEventListener("click", function () {
            shoppingCart.querySelector(`div[data-row='${id}']`).remove();
            
            console.log("ini local", localStorage.getItem("cart"));
            // const CART = JSON.parse(localStorage.getItem("cart"))
            
            const CART = localStorage.getItem("cart") && JSON.parse(localStorage.getItem("cart"))
            console.log("ini cart", CART)

            const found = CART.indexOf(id);
            if (found > -1) {
                CART.splice(found, 1);
                localStorage.setItem("cart", JSON.stringify(CART));
            }
            console.log("ini local udah di hapus", localStorage.getItem("cart"));

            if (CART.length === 0) {
                removeClass(headerCart, "cart-filled")
                removeClass(document.getElementById("cart-empty"), "hidden")
            }
        })

    }
}