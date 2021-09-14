function CalcularMedia() {
    var nome = document.getElementById("nome").value;
    var notaPrimeiroBimestre = parseFloat(
      document.getElementById("primeiroBimestre").value
    );
    var notaSegundoBimestre = parseFloat(
      document.getElementById("segundoBimestre").value
    );
    var notaTerceiroBimestre = parseFloat(
      document.getElementById("terceiroBimestre").value
    );
    var notaQuartoBimestre = parseFloat(
      document.getElementById("quartoBimestre").value
    );
  
    var somaNotas =
      (notaPrimeiroBimestre +
        notaSegundoBimestre +
        notaTerceiroBimestre +
        notaQuartoBimestre) /
      4;
  
    console.log(somaNotas);
  
    //desafio
    var notaFixada = somaNotas.toFixed(1);
  
    if (notaFixada >= 6) {
      var mediaFinal =
        nome + ", sua média final é " + notaFixada + "." + " Você esta Aprovado!";
      document.getElementById("mediaFinal").innerHTML = mediaFinal;
    } else {
      var mediaFinal =
        nome + ", sua média final é " + notaFixada + "." + " Você esta Aprovado!";
      document.getElementById("mediaFinal").innerHTML = mediaFinal;
    }
  }
  
  //var nome = "Diego"
  //var notaPrimeiroBimestre = 9
  //var notaSegundoBimestre = 7
  //var notaTerceiroBimestre = 4
  //var notaQuartoBimestre = 2
  
  //var somaNotas = notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre
  
  //desafio
  //var notaFinal = somaNotas / 4
  
  //var notaFixada = notaFinal.toFixed(1)
  
  //console.log("Bem vindo " + nome)
  //console.log(notaFixada)
  
  // desafio
  //console.log(((notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4).toFixed(1))
  
  // Revisão
  //Variaveis, String, Console.log, toFixed, operações matematicas, concatenação,
  