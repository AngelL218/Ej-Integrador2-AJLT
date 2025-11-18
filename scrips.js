var formulario = document.getElementById("formulario");

function calcular(){

      var marca = formulario.marca.value;
      var financiamiento = formulario.marca.value;

  var total = 0


        if(formulario.AireAcondicionado.checked == true){
  total += 5000; }   

        if(formulario.GPS.checked == true){
  total += 5000; }   

        if(formulario.IncluirSeguro.checked == true){
  total += 5000; }   

        if(formulario.Quemacocos.checked == true){
  total += 5000; }   

        if(formulario.CamaraTrasera.checked == true){
  total += 5000; }   

        if(formulario.CamaraFrontal.checked == true){
  total += 5000; }   



          if(marca == "1") {
  total = total + 274999;     } 

          if(marca == "2") {
  total = total + 251900;     } 

          if(marca == "3") {
  total = total + 316400;     } 

          if(marca == "4") {
  total = total + 301900;     } 

          if(marca == "5") {
  total = total + 280500;     } 

          if(marca == "6") {
  total = total + 302000;     } 

          if(marca == "7") {
  total = total + 294400;     } 

          if(marca == "8") {
  total = total + 299990;     } 


          if(financiamiento == "Contado") {
    total = total;}

          if(financiamiento == "Crédito") {
    total = total;}


       formulario.total.value = total;  
    document.getElementById('total').innerText = total;

        console.info("total");
        
}