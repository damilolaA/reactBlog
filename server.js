const express = require('express'),
	  app	  = express(),
	  port    = process.env.PORT || 2000;

app.use(express.static(path.join(__dirname, './public')));

app.listen(port, (err) => {
	if(err) {
		return console.log(err)
	}

	console.log('server started at ' + port);
})