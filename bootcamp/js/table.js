function loadData() {
    var url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTvv7k_2IQ5OjN2q4ihFmv68rk9SotIgTcvP1zAOgvMACC2jBpsnRknn6ZkQnVHHuoDT2eKVYQBAGqa/pub?gid=0&single=true&output=csv";
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            document.getElementById("display").innerHTML = xmlhttp.responseText;
            //alert(xmlhttp.responseText);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send(null);
}

function dataAlert() {
    $.ajax("https://docs.google.com/spreadsheets/d/e/2PACX-1vTvv7k_2IQ5OjN2q4ihFmv68rk9SotIgTcvP1zAOgvMACC2jBpsnRknn6ZkQnVHHuoDT2eKVYQBAGqa/pub?gid=0&single=true&output=csv").done(function(result){
        var datapoints = result.split(/\n/).join(",").split(",");
        for(let i = 0; i<datapoints.length; i+=3){
            var input = '<tr><th scope="row">' + datapoints[i] + '</th><td><a href="#">' +datapoints[i+1] + '</a></td><td><a href="#">' + datapoints[i+2] + '</a></td></tr>';
            $("#script-target").append(input);
        }
    });
}

dataAlert();