//1
/*var video = document.getElementById('playerVideo');
var source = document.getElementById('videoSrc');
source.setAttribute('src', '/design/18.mp4');
video.load();
video.play();*/

//2
/*var video = document.getElementById('playerVideo');
var source = document.getElementById('videoSrc');
var input = document.getElementById("inputVideo");

input.addEventListener("change", function(){
    var nome = "Nenhum arquivo escolhido";
        if(input.files.length > 0)
            nome = input.files[0].name;
        //console.log(nome);
    //source.setAttribute('src', nome);
});*/

//3
/*var input = document.getElementById("inputVideo");

input.addEventListener("change", function(){
    var nome = "Nenhum arquivo escolhido";
        if(input.files.length > 0)
            nome = input.files[0].name;

         var path = require('path');
        var directories = path.dirname(nome);
        console.log(directories);*/