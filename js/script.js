
	// Create a Paper.js Path to draw a line into it:
	var path = new Path();
	// Give the stroke a color
	path.strokeColor = 'black';
	var start = new Point(50, 100);
	// Move to start and draw a line from there
	path.moveTo(start);
	// Note the plus operator on Point objects.
	// PaperScript does that for us, and much more!
	path.lineTo(start + [ 100, -50 ]);


	var path1 = new Path.Rectangle({
		point: [75, 75],
		size: [50, 50],
		strokeColor: 'black'
	});
	
	function onFrame(event) {
		// Each frame, rotate the path by 3 degrees:
		path1.rotate(3);
	}

	var myPath = new Path();
myPath.strokeColor = 'black';
myPath.add(new Point(0, 0));
myPath.add(new Point(5000, 50));