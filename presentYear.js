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
    '    <h3 id="years_list">'+full_year+'</h3>\n' +
    '    <div class="card-body" id="months_list"><div class="row yearRow" id="years-'+full_year+'">'+present_months+'</div>\n' +
    '\n' +
    '    <span class="year" hidden>'+full_year+'</span></div>\n' +
    '        </div>\n' +
    '    </div>';
$('#dateViewer').html(present_year);
//end here