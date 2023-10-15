function tableUpdate(link, target) {
    $.ajax(link).done(function(result){
        var datapoints = result.split(/\n/).join("\t").split("\t");
        for(let i = 6; i<datapoints.length; i+=6){
            var lesson = '<tr><th scope="row">' + datapoints[i] + '</th>';
            var resource = datapoints[i+1].startsWith("http") ? '<td><a href="' + datapoints[i+1] +'"> Lesson Link' + '</a></td>': '<td>TBD</td>';
//             if( ! datapoints[i+1].startswith("http")){
//                 resource = '<td>TBD</td>'
//             }
            var date = '<td>' + datapoints[i+2] + '</td>';
            var week = '<td>' + datapoints[i+3] + '</td>';
            var recording = datapoints[i+4].startsWith("http") ? '<td><a href="'+ datapoints[i+4]+'">Recording Link</a></td>' : '<td>'+datapoints[i+4]+'</td>';
//             if(! datapoints[i+4].startswith("http")){
//                 var recording = '<td>Sorry, No Recording</td>';
//             }
            var folder = datapoints[i+5].startsWith("http") ? '<td><a href="'+datapoints[i+5]+'"> Folder Link</a></td></tr>' : '<td>'+datapoints[i+5]+'</td>';
//             if(! datapoints[i+5].startswith("http")){
//                 folder = '<td>TBD</td>';
//             } else{
//                 folder = '<td><a href="'+datapoints[i+5]+'"> Folder Link</a></td></tr>';
//             }
            //var input = '<tr><th scope="row">' + datapoints[i] + '</th><td><a href="' + datapoints[i+1] +'"> Lesson Link' + '</a></td><td>' + datapoints[i+2] + '</td><td>' + datapoints[i+3] + '</td><td><a href="'+ datapoints[i+4]+'">Recording Link</a></td>'+'<td><a href="'+datapoints[i+5]+'"> Folder Link</a></td></tr>';
            var input = lesson + resource + date + week + recording + folder;
            $(target).append(input);
        }
    });
}

tableUpdate("https://docs.google.com/spreadsheets/d/e/2PACX-1vQwzVDavSQaIw281Xwld-QiHyone_9L_dl5HDP9n8FSKWrRd3Bxna8IHoA0exxurQFvCiUG0611hFTc/pub?output=tsv","#fall-target");
tableUpdate("https://docs.google.com/spreadsheets/d/e/2PACX-1vRSPISLGaN2ErEqLcmtuxmbh41oXliuC3c2sSNG-MsLfhsw5zEClAd54oImdzLjbIN28mOulgWdHXHJ/pub?output=tsv", "#winter-target");
