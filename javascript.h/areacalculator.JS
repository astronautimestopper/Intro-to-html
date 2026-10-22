var choice = prompt("Welcom to area calculator.\nPlease enther the number corresponding of your choice:\n1. Area of Rectangle\n2. Area of a triangle\n3. Area of a circle\n4. Area of a parallelogram.");

if (choice == "1"){
    var a = prompt("Enter length")
    var b = prompt("Enter width")
    var result = Number(a) * Number(b)
    alert("The area is " + result)
}

if (choice == "2") {
    var c = prompt("Enter height")
    var d = prompt("Enter base")
    var result = Number(c) * Number(d) * 2
    alert("The area is " + result)
}

if (choice == "3") {
    var e = prompt("Enter the radius")
    var result =  3.14 * Number(e) + Number(e)
    alert("The area is " + result)
}

if (choice == "4") {
    var f = prompt("Enter height")
    var g = prompt("Enter corresponding base")
    var result = Number(f) * Number(g)
    alert("The area is " + result)
}