console.log("Hello World");
document.getElementById("demo").innerHTML = "Hello World!";
function generate()
{
    let num = Math.floor(Math.random() * 5);
    document.getElementById("demo").innerHTML = num;
}
