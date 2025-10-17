function externalFunction() {
  let age = prompt("Enter your age:");
  age = Number(age); // Type Conversion from string to number
  document.getElementById("external-demo").innerText = 
    "You are " + age + " years old. This is from External JS.";
}