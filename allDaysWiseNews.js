var url_string = window.location.href;
var url = new URL(url_string);

//get year from the url
var year = url.searchParams.get("year");
//end here

//get month name from the url   
var month = url.searchParams.get("month");
var day = url.searchParams.get("day");

$('#dmy_show').html(' Day: '+day+' Month: '+month+' Year: '+year)