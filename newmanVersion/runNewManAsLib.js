const newman = require('newman');
newman.run({
    collection: require('./Bybit USDT_Perp for Newman.postman_collection.json'),
    environment: require('./Bybit.postman_environment.json'),
    reporters: "json"
}).on('start', function (err, args) { // on start of run, log to console
    console.log('running a collection...');
}).on('done', function (err, summary) {
	//console.log(summary.run.executions);
	summary.run.executions.forEach(ele=>
		{console.log(ele.response.stream.toString())}
	);
    if (err || summary.error) {
        console.error('collection run encountered an error.');
    }
    else {
        console.log('collection run completed.');
    }
});
