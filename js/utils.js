function getQuerys(val_name) {
	var url = window.location.search.substring(1);
	var params = url.split("&");

	for(var index = 0; index<params.length; index++) {
		if(params[index].indexOf(val_name) != -1) {
			return params[index].split("=")[1];
		}
	}

	return "";
} 