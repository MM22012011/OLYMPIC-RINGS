 canvas = document.getElementById("logo")
 ctx = canvas.getContext("2d")

 

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 3;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.arc(250,200,40,0,2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 3;
ctx.arc(300,200,40,0,2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 3;
ctx.arc(230,250,40,0,2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 3;
ctx.arc(280,250,40,0,2*Math.PI);
ctx.stroke();


