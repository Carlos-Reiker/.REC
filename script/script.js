
/*function myFunction(){
    var x = document.getElementById("myfile");
    document.getElementById("demo").innerHTML = x.value;
}

function newDoc() {
    window.location.assign("myfile").value;
  }*/

var div = document.getElementsByClassName("botaoArquivo")[0];
var input = document.getElementById("inputArquivo");

div.addEventListener("click", function(){
    input.click();
});

input.addEventListener("change", function(){
    var nome = "Não há arquivo selecionado. Selecionar arquivo...";
    var exibirVideo = document.querySelector("#playerVideo");

    if(input.files.length > 0) nome = input.files[0].name;
    exibirVideo.setAttribute('src', nome);
}
)