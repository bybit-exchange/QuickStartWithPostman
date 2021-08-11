const newman = require('newman');
newman.run({
	collection: require('./Bybit USDT_Perp for Newman.postman_collection.json'),
	environment: require('./Bybit.postman_environment.json'),
	reporters: "json"
}).on('start', function (err, args) { // on start of run, log to console
    console.log('running a collection...');
}).on('done', function (err, summary) {
	summary.run.executions.forEach(ele=>
		{
			var queryString="";
			ele.request.url.query.members.sort(GetSortOrder('key')).forEach(
				ele2=>{
					queryString+=ele2.key+'='+ele2.value+'&'
				}
			)
			queryString=queryString.substring(0, queryString.length - 1);
			console.log(queryString);
		}
	);
	if (err || summary.error) {
		console.error('collection run encountered an error.');
	}
	else {
		console.log('collection run completed.');
	}
}
);

function GetSortOrder(prop) {    
    return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
} 
