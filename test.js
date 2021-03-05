var getMonths = function(startDate, endDate){
    var resultList = [];
    var date = new Date(startDate);
    var endDate = new Date(endDate);
    var monthNameList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    while (date <= endDate)
    {
        var stringDate = monthNameList[date.getMonth()] + " " + date.getFullYear();

        //get first and last day of month
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

        resultList.push({
            str:stringDate,
            first:firstDay,
            last:lastDay,
        });
        date.setMonth(date.getMonth() + 1);
    }

    return resultList;
};

var mos = getMonths('2015','2021');
for (var m in mos) {
    $('#divMonths').append('<div class="col-md-3"><a href="/?start=' +  mos[m].first.toISOString() + '&end=' + mos[m].last.toISOString() + '">' + mos[m].str + '</div> </a><br>');
}