const form = document.querySelector("#Form");
const myInput = document.querySelector(".myInput");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const inputValue = document.querySelector("#myInput").value;
    console.log("Input value is: " + inputValue);
});
