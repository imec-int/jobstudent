var fs = require('fs');

var i = 5;
console.log(i);


fs.readFile('bestandje.txt', function (err, data){
	console.log(data.toString());

	i = 6;
	console.log("eerste readfile:"  + i);

	fs.readFile('bestandje.txt', function (err, data){
		console.log(data.toString());

		i = 7;
		console.log("tweede readfile:"  + i);



		console.log("er buiten:"  + i);
		fs.readFile('bestandje.txt', function (err, data){
			console.log(data.toString());

			i = 7;
			console.log("tweede readfile:"  + i);



			console.log("er buiten:"  + i);
		});
	});

});






