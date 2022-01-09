function tableUpdate(link, target) {
    $.ajax(link).done(function(result){
        var datapoints = result.split(/\n/).join(",").split(",");
        for(let i = 6; i<datapoints.length; i+=6){
            var lesson = '<tr><th scope="row">' + datapoints[i] + '</th>';
            var resource = '<td><a href="' + datapoints[i+1] +'"> Lesson Link' + '</a></td>';
            if(datapoints[i+1] == "#"){
                resource = '<td>TBD</td>'
            }
            var date = '<td>' + datapoints[i+2] + '</td>';
            var week = '<td>' + datapoints[i+3] + '</td>';
            var recording = '<td><a href="'+ datapoints[i+4]+'">Recording Link</a></td>';
            if(datapoints[i+4] == "#"){
                var recording = '<td>Sorry, No Recording</td>';
            }
            var folder;
            if(datapoints[i+5] == "#"){
                folder = '<td>TBD</td>';
            } else{
                folder = '<td><a href="'+datapoints[i+5]+'"> Folder Link</a></td></tr>';
            }
            //var input = '<tr><th scope="row">' + datapoints[i] + '</th><td><a href="' + datapoints[i+1] +'"> Lesson Link' + '</a></td><td>' + datapoints[i+2] + '</td><td>' + datapoints[i+3] + '</td><td><a href="'+ datapoints[i+4]+'">Recording Link</a></td>'+'<td><a href="'+datapoints[i+5]+'"> Folder Link</a></td></tr>';
            var input = lesson + resource + date + week + recording + folder;
            $(target).append(input);
        }
    });
}

tableUpdate("https://docs.google.com/spreadsheets/d/e/2PACX-1vQwzVDavSQaIw281Xwld-QiHyone_9L_dl5HDP9n8FSKWrRd3Bxna8IHoA0exxurQFvCiUG0611hFTc/pub?gid=0&single=true&output=csv","#fall-target");
tableUpdate("https://docs.google.com/spreadsheets/d/e/2PACX-1vQuTlHsHOHswd1Giw9kAQa97z1aFcslzAmpLwdf8IugidPgxXaTCIXgNVtCguB2NT6b7fZywV9Z9wKh/pub?gid=0&single=true&output=csv", "#winter-target");