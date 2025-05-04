// getting access to the button
const btn = document.getElementById("btn");

// trigerring an event
// when the button os clicked!
btn.addEventListener("click", () => {
    alert('This form has been submitted!!!!');
});

let name = "Daniel";

function greet() {
     name = "Joel";
    console.log(name);
}

greet();
console.log(__dirname)
console.log(__filename);
