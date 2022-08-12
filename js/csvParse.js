function idGenerator(){
  let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var alfa = abc[Math.floor(Math.random() * abc.length)+1];
  var num = Math.floor(Math.random()*101);
  return alfa+num.toString();
}

function goBackToProducts(){
  let moreInfo = document.getElementById("moreInfo");
  moreInfo.classList.add("d-none");

  let productView = document.getElementById("productView");
  productView.className = "";

  let header = document.getElementById("header");
  header.classList.remove("d-none");

  return true;
}

function showPrice(){
  let cantidad = document.getElementById("quantityInput").value;
  var priceText = document.getElementById("priceText");
  let price = parseInt(document.getElementById("price").innerHTML.replace("$","")) * parseInt(cantidad); 
  if (cantidad > 0 && cantidad <= 20){
    priceText.innerHTML = "Precio: $"+price.toString();
  } else{
    priceText.innerHTML = "";
  }
}

function scrollTop(){
  $("html, body").animate({ scrollTop: 0 }, "smooth");
}

function displayOrderSection(){
  document.getElementById("order-product").classList.remove("d-none");
  document.getElementsByTagName("footer")[0].classList.remove("mt-5");
  showPrice();
  return true;
}

function hideOrderSection(){
  document.getElementById("order-product").classList.add("d-none");
  document.getElementsByTagName("footer")[0].classList.add("mt-5");
  
  scrollTop();
  
  return true;
}

function csvParse(file,rowN){
    $(document).ready(()=>{
        $.ajax({
          url: file,
          dataType:"text",
          success:function(data){
            var productData = data.split(/\r?\n|\r/);
            var allCards = [];
            for (var i = 0; i < productData.length; i++){
              var cellData = productData[i].split(',');
              let card1 = new Product(cellData[0],cellData[1],cellData[2],cellData[3],cellData[4],cellData[5],cellData[6]);
              card1.buildCard(rowN,cellData[5]);
              allCards.push(card1);
              
            }
            return allCards;
          }
        })

      })
}

function sendOrder(){

  let send = true;

  let inputElements = [
    (document.getElementById("quantityInput").value == ""),
    (document.getElementById("colorInput").value == ""),
    (document.getElementById("nameInput").value == ""),
    (document.getElementById("lastNameInput").value == ""),
    (document.getElementById("streetInput").value == ""),
    (document.getElementById("colonyInput").value == ""),
    (document.getElementById("cityInput").value == ""),
    (document.getElementById("stateInput").value == ""),
    (document.getElementById("cpInput").value == ""),
    (document.getElementById("countryInput").value == ""), 
    (document.getElementById("invalidCheck").checked == false)
  ];

  for (let i = 0; i < inputElements.length; i++) {
    if(inputElements[i]){
      send = false;
      break;
    }
    if(i == 0){
      if(document.getElementById("quantityInput").value <= 0 || document.getElementById("quantityInput").value > 20){
        send = false;
        break;
      }
    }
  }

  if (send){
    var mail = "example@gmail.com";
    var enter = "%0D%0A";
    let product = document.getElementById("productTitle2").innerHTML;
    let price = parseInt(document.getElementById("price").innerHTML.replace("$","")) * parseInt(document.getElementById("quantityInput").value); 
    var msg = "mailto:"+mail+"?subject=Pedido%20#"+idGenerator()+"&body=Detalles%20del%20pedido:"+enter+enter+"Muñeco:%20"+product+enter+"Total:%20$"+price+enter+enter;
    
    let cantidad = document.getElementById("quantityInput").value.replace(/\s/g,"%20");
    let color = document.getElementById("colorInput").value.replace(/\s/g,"%20");
    let nombre = document.getElementById("nameInput").value.replace(/\s/g,"%20");
    let apellido = document.getElementById("lastNameInput").value.replace(/\s/g,"%20");
    let calle = document.getElementById("streetInput").value.replace(/\s/g,"%20");
    let colonia = document.getElementById("colonyInput").value.replace(/\s/g,"%20");
    let ciudad = document.getElementById("cityInput").value.replace(/\s/g,"%20");
    let estado = document.getElementById("stateInput").value.replace(/\s/g,"%20");
    let cp = document.getElementById("cpInput").value.replace(/\s/g,"%20");
    let pais = document.getElementById("countryInput").value.replace(/\s/g,"%20");

    msg += "Cantidad:%20" + cantidad + enter;
    msg += "Color:%20" + color + enter;
    msg += "Nombre:%20" + nombre + "%20" + apellido + enter;
    msg += "Dirección:" + enter;
    msg += "Calle:%20" + calle + ".%20Colonia%20" + colonia + "%20C.P:%20"+ cp+ enter;
    msg += ciudad +",%20"+estado+enter;
    msg += pais + enter;
    window.open(msg);
    hideOrderSection();
  }
  

}
