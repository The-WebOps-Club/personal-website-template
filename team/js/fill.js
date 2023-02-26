function dataAlert() {
    $.ajax("https://docs.google.com/spreadsheets/d/e/2PACX-1vQnzIdm2KfxMnqb_s9VaTGPJSejGw8vb8_ygRC7UcQyTTWpAVz5FiHNH_WI_tDsTOeDwo0rf3aUrWv1/pub?output=tsv").done(function(result){
        var datapoints = result.split(/\n/).join("\t").split("\t");
        for(let i = 6; i<datapoints.length; i+=6){
            // var input = '<tr><th scope="row">' + datapoints[i] + '</th><td><a href="#">' +datapoints[i+1] + '</a></td><td><a href="#">' + datapoints[i+2] + '</a></td></tr>';
            var img_link = datapoints[i+5];
            img_link = img_link.replace('/file/d/','/uc?export=view&id=').replace('/open?id=', '/uc?export=view&id=');
            var input = '\
            <div class="team-card col-sm-3 card-container">\
                    <img class="cirlce-image center" src="'+img_link+'"alt='+img_link+'>\
                    <p><b>'+datapoints[i+1]+'</b>\
                        <br>\
                        '+datapoints[i+2]+'\
                        <br />\
                        <!-- <u>jim095@ucsd.edu</u> -->\
                        <a class="email" href="mailto: '+datapoints[i+3]+'">'+datapoints[i+3]+'</a>\
                    </p>\
                    <div class="overlay">\
                        <div class="text">\
                        '+datapoints[i+4]+'\
                        </div>\
                    </div>\
                </div>\
                '
                
            
            $("#script-target").append(input);
        }
    });
}

dataAlert();
