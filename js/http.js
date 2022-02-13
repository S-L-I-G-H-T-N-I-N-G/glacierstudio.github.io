function httpRequest(paramObj,fun,errFun) {
	var xmlhttp = null
		xmlhttp = new XMLHttpRequest()
	if(xmlhttp == null) {
		alert('你的浏览器不支持XMLHttp');
		return;
	}
	var httpType = (paramObj.type || 'GET').toUpperCase();
	var dataType = paramObj.dataType || 'json'
	var httpUrl = paramObj.httpUrl || ''
	var async = paramObj.async || true;
	var paramData = paramObj.data || []
	var requestData = ''
	for(var name in paramData) {
		requestData += name + '='+ paramData[name] + '&';
	}
	requestData = requestData == '' ? '' : requestData.substring(0,requestData.length - 1);
	
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4) {
			if (xmlhttp.status == 200) {
				fun(xmlhttp.responseText)
			} else {
				errFun(xmlhttp.status)
			}
		}
	}

	if(httpType == 'GET') {
		xmlhttp.open("GET",httpUrl,async);
		xmlhttp.send(null);
	} else if (httpType == 'POST') {
		xmlhttp.open("POST",httpUrl,async)
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xmlhttp.send(requestData)
	}
}
