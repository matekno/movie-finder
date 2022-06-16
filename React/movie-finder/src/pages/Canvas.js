/*https://codepen.io/bzozoo/pen/GRoLyNp*/
function degreesToRadians(deg) {
    return (deg/180) * Math.PI;
  }

  function percentToRadians(percentage) {
    var degrees = percentage * 360 / 100;
    return degreesToRadians(degrees + 270);
  }

  function drawPercentageCircle(percentage, radius, canvas) {
  var context = canvas.getContext('2d');

  var x = canvas.width / 2;
  var y = canvas.height / 2;
  var startAngle = percentToRadians(0);
  var endAngle = percentToRadians(percentage);
  var counterClockwise = true;

  context.beginPath();
  context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
  context.lineWidth = 15;

  // line color
  context.strokeStyle = 'white';
  context.stroke();

  counterClockwise = false;
  context.beginPath();
  context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
  context.lineWidth = 15;

  // line color
  context.strokeStyle = 'blue';
  context.stroke();

  // now draw the inner text
        context.font = radius/2.5 + "px Helvetica";
        context.fillStyle = "blue";
        context.textAlign = "center";
        context.fillText(percentage+"%", x, y*1.05); 
  }
    var canvas = document.getElementById('myCanvas');
    var percentage = 70;
    var radius;
    if (myCanvas.height < myCanvas.width) {
        radius = myCanvas.height / 3;
    }
    else {
        radius = myCanvas.width / 3;
    }
    drawPercentageCircle(percentage, radius, canvas);