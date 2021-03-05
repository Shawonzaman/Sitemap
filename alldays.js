var check_now_date = new Date();
var i,month_number;
function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

var url_string = window.location.href;
var url = new URL(url_string);

//get year from the url
var year = url.searchParams.get("year");
//end here

//get month name from the url   
var month_name = url.searchParams.get("month");
//end here

//check the month name and set the value for months
if (month_name=='January'){
    month_number=1;
}
if (month_name=='February'){
    month_number=2;
}
if (month_name=='March'){
    month_number=3;
}
if (month_name=='April'){
    month_number=4;
}
if (month_name=='May'){
    month_number=5;
}
if (month_name=='June'){
    month_number=6;
}
if (month_name=='July'){
    month_number=7;
}
if (month_name=='August'){
    month_number=8;
}
if (month_name=='September'){
    month_number=9;
}
if (month_name=='October'){
    month_number=10;
}
if (month_name=='November'){
    month_number=11;
}
if (month_name=='December'){
    month_number=12;
}
//end here

//set the dates from month wise
var day_number = daysInMonth(month_number,year);
var days="";

if (month_name == check_now_date.toLocaleString('default',{month:'long'}) && year==check_now_date.getFullYear()){
    var day_counts = check_now_date.getDate().toLocaleString('en-US',{timeZone:'Asia/Dhaka'});
    for (i=1;i<=day_counts;i++){
        days +='<div class="col-md-12"><a id="'+i+'">'+ i+' '+month_name+', '+year+'</a></div>';
    }

    $('#years_list').html(month_name+'   '+year)
    $('#all_date_wise_list').html(days)
}

else{
    for (i=1;i<=day_number;i++){
        days +='<div class="col-md-12"><a id="'+i+'">'+ i+' '+month_name+', '+year+'</a></div>';
    }

    $('#years_list').html(month_name+'   '+year)
    $('#all_date_wise_list').html(days)
}

$('a').click( function(){
    $(this).attr('href','newsDateWise.html?day='+this.id+'&month='+month_name+'&year='+year);
});
//end here

//
// var check_now_date = new Date();
// console.log(check_now_date.toLocaleString('default',{month:'long'}))
// console.log(daysInMonth(day_number));
// console.log(month);
