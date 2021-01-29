canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
line_width = 2;
radius = 40;

var mouse_event = "none";

var last_position_of_x;
var last_position_of_y;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color = document.getElementById("color").value;
    console.log(color);
    line_width = document.getElementById("line_width").value;
    console.log(line_width);
    radius = document.getElementById("radius").value;
    console.log(line_width);

    mouse_event = "mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouse_event = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouse_event = "mouseUp";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){

    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;

    if (mouse_event == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x = " + current_position_of_x + "y = " + current_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        circle(current_position_of_x, current_position_of_y);
    }

    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;
}

function clearcanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function circle(current_position_of_x, current_position_of_y){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = line_width;
    ctx.arc(current_position_of_x, current_position_of_y, radius, 0, 2 * Math.PI);
    ctx.stroke();
}