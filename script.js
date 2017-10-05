function cronExecute() {

	var url = "http://server.com/cron";

	var options = {
		"method" : "get",
		"headers" : 
					{
						'User-Agent' : 'Mozilla Firefox 14.0',
		             	'Accept-Charset' : 'ISO-8859-1,utf-8;q=0.7,*;q=0.7'
		            },
		"payload" : "",
		"contentType" : "application/xml; charset=utf-8"
	};

	var request_starttime = new Date();
	// fetch the HTTP / HTTPS request and get the response
	var response = UrlFetchApp.fetch(url,options);
	var request_endtime = new Date();

	// use any spreadsheet, use its key
	var ss = SpreadsheetApp.openById("spreadsheet_key");
	
	// get the worksheet
	var sheet = ss.getSheets()[0];

	// inserting values into the sheet
	sheet.insertRowBefore(1);
	var colValues = [[ request_starttime, request_endtime,
	                 response.getResponseCode(), response.getHeaders().toSource(),
	                 url, response.getContentText() ]];
	sheet.getRange(1, 1, 1, 6).setValues(colValues);
	
}