function dataAlert() {
    $.ajax("https://docs.google.com/spreadsheets/d/e/2PACX-1vTQrpOKozWQTb1EdU2CfCur2g-va_F8TOx0Fz0aFInP0-Eoxh7xtD7PIyxu7QrIdBCPHVfMeERFrUGD/pub?gid=0&single=true&output=tsv").done(function(result){
        var datapoints = result.split(/\n/).join("\t").split("\t");
        // console.log(datapoints);
        for (let i = 0; i < datapoints.length; i += 7){
            const firstName = datapoints[i],
                lastName = datapoints[i + 1],
                position = datapoints[i + 2],
                graduationDate = datapoints[i + 3],
                major = datapoints[i + 4],
                email = datapoints[i + 5];
            let image = datapoints[i + 6].toLowerCase();

            
            var input = '\
            <div class="team-card col-sm-3 card-container">\
                    <img class="cirlce-image center" src="Board/'+image+'"alt=Board/'+image+'>\
                    <p><b>'+firstName + ' ' + lastName + '</b>\
                        <br>\
                        '+position+'\
                        <br />\
                        \
                        </p>\
                        <div class="overlay">\
                        <div class="text">\
                        <p>'+major +' ' + graduationDate +'</p>\
                        <a  href="mailto: '+email+'">'+email+'</a>\
                        </div>\
                    </div>\
                </div>\
                '
                
            
            $("#script-target").append(input);
        }
    });
}

dataAlert();
