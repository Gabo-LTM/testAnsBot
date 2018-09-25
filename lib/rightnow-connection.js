var request = require('request');

(function (rnconnection){
	
		// prepare the header
	var headers = {
		
		'OSvC-CREST-Suppress-All': 'true',
		'OSvC-CREST-Application-Context' : 'ok'
	};
	// the post options
	var options = {
		url : null,
		path : '/services/rest/connect/v1.4/opportunities',
		headers : headers
	};
	
	rnconnection.init = function(user,pass,rn_interface){
		
		options.url = 'https://'+ user+':'+ pass + '@'+rn_interface + ".custhelp.com";
		console.info("init finished");
	};


   rnconnection.createLead = function(data){
	
		var _data = data;
		console.info('menssage ' + _data);
		var _url =  options.url + options.path;
		var req = request.post({url:_url,json:_data,headers:options.headers}, function(error,response,body) {

			if(error){
				console.log(error);
			}else{
				console.log(response.statusCode); // 201
				console.log(JSON.stringify(body, null, 4)); // JSON representation
		
			}
		});
	
	};	
	rnconnection.createJSON = function(data){
		_data = data;
		// create the JSON object
		jsonObject = JSON.stringify({
			"name": _data.name
		});
		return jsonObject;
	};

/**
 * Expose `Strategy`.
 */
}(module.exports));	
