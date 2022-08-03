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