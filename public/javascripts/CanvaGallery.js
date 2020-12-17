var image1_canvas = $('#image1_canvas')[0];
var image2_canvas = $('#image2_canvas')[0];
var image3_canvas = $('#image3_canvas')[0];
var image4_canvas = $('#image4_canvas')[0];
var image5_canvas = $('#image5_canvas')[0];
var image6_canvas = $('#image6_canvas')[0];
context1 = image1_canvas .getContext('2d');
context2 = image2_canvas .getContext('2d');
context3 = image3_canvas .getContext('2d');
context4 = image4_canvas .getContext('2d');
context5 = image5_canvas .getContext('2d');
context6 = image6_canvas .getContext('2d');
var one = new Image();
one.src = 'images/one.jpg';

var two = new Image();
two.src = 'images/two.jpg';

var three = new Image();
three.src = 'images/three.jpg';

var four = new Image();
four.src = 'images/four.jpg';

var five = new Image();
five.src = 'images/five.jpg';

var six = new Image();
six.src = 'images/six.jpg';

one.onload = function () {
    drawInPosition();
};
two.onload = function () {
    drawInPosition();
};
three.onload = function () {
    drawInPosition();
};
four.onload = function () {
    drawInPosition();
};
five.onload = function () {
    drawInPosition();
};
six.onload = function () {
    drawInPosition();
};

function drawInPosition() {
    context1.drawImage(one, 0, 0);
    context2.drawImage(two, 0, 0);
    context3.drawImage(three, 0, 0);
    context4.drawImage(four, 0, 0);
    context5.drawImage(five, 0, 0);
    context6.drawImage(six, 0, 0);
    
   

}