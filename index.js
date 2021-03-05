var moments = moment.months();
var year_moments = moment().year();
var i;




//present year calculation month wise

var count = new Date();
var month_number = count.getMonth();
var full_year = count.getFullYear();
var months_lists = moment.months();
var present_months ="";
for(i=0;i<=month_number;i++){
    present_months+='<div class="col-md-12"><a id="'+months_lists[i]+'">'+months_lists[i]+'</a></div>';
}


var present_year = '<div class="col-md-4">\n' +
    '    <div class="card-body"><h3 id="years_list">'+full_year+'</h3></div>\n' +
    '    <div class="card-body" id="months_list"><div class="row yearRow" id="years-'+full_year+'">'+present_months+'</div>\n' +
    '\n' +
    '    <span class="year" hidden>'+full_year+'</span></div>\n' +
    '        </div>\n' +
    '    </div>';
$('#dateViewer').html(present_year);
//end here


//get the total year from number
const years = (back) => {
    const year = new Date().getFullYear();
    return Array.from({length: back}, (v, i) => year - back + i + 1);
}

//end here

var year_list = years(7).sort().reverse();
var year = "";


var months="";
for (i = 0; i < moments.length; i++) {
    // months += '<div class="col-md-12" id="yearsval"><a href='+moments[i]+'>'+moments[i]+'</a></div>';
    months += '<div class="col-md-12"><a id="'+moments[i]+'">'+moments[i]+'</a></div>';
}
var monthAll = months;


//get the year month wise and show it to individual divs
for(i=1;i<year_list.length;i++){
    // $('#yearsVal').append('<span id="'+year_list[i]+'"  onclick="getYearMonthVal(this.id)"></span>')
    year+='<div class="col-md-4">\n' +
    '   <div class="card-body"> <h3 id="years_list">'+year_list[i]+'</h3></div>\n' +
    '    <div class="card-body" id="months_list"><div class="row yearRow" id="years-'+year_list[i]+'">'+months+'</div>\n' +
    '\n' +
    '    <span class="year" hidden>'+year_list[i]+'</span></div>\n' +
    '        </div>\n' +
    '    </div>';
}

$('#dateViewer').append(year);


//end here

//onclick url generate with month and year
$('a').click( function(){
    var getYearVal = $(this).closest('.yearRow').next('.year').text();
    $(this).attr('href','getURL.html?month='+this.id+'&year='+getYearVal);
});

//emd here


// console.log(count.getFullYear());