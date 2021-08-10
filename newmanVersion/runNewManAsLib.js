const newman = require('newman');
const slackHandler=require('./slackHandler.js');
//setInterval(
//newman => newman.run({
newman.run({
	collection: require('./Bybit API Monitoring.postman_collection.json'),
	environment: require('./Bybit.postman_environment.json'),
	reporters: "json"
}).on('start', function (err, args) { // on start of run, log to console
    console.log('running a collection...');
}).on('done', function (err, summary) {
	summary.run.executions.forEach(ele=>
		{
			slackHandlerInst=new slackHandler("C026YBF16PQ","xxxx");
			var queryString="";
			ele.request.url.query.members.sort(GetSortOrder('key')).forEach(
				ele2=>{
					queryString+=ele2.key+'='+ele2.value+'&'
				}
			)
			queryString=queryString.substring(0, queryString.length - 1);
			if(ele.hasOwnProperty('requestError')){
				slackHandlerInst.postMsg(ele.request.method+" "+ele.request.url.protocol+"://"+ele.request.url.host.join(".")+"/"+ele.request.url.path.join("/")+"?"+queryString+"\n"+"Response code "+ele.requestError);
			}
			else if(ele.response.code !=200){
				slackHandlerInst.postMsg(ele.request.method+" "+ele.request.url.protocol+"://"+ele.request.url.host.join(".")+"/"+ele.request.url.path.join("/")+"?"+queryString+"\n"+"Response code "+ele.response.code.toString())
			}
			else if(JSON.parse(ele.response.stream.toString()).hasOwnProperty('ret_code') & JSON.parse(ele.response.stream.toString()).ret_code>0){
				slackHandlerInst.postMsg(ele.request.method+" "+ele.request.url.protocol+"://"+ele.request.url.host.join(".")+"/"+ele.request.url.path.join("/")+"?"+queryString+"\n"+ele.response.stream.toString())
			}
			console.log(ele.response.responseTime);
		}
	);
	if (err || summary.error) {
		console.error('collection run encountered an error.');
	}
	else {
		console.log('collection run completed.');
	}
}
//}),5000,newman
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
