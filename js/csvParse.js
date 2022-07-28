function csvParse(file,rowN){
    $(document).ready(()=>{
        $.ajax({
          url: file,
          dataType:"text",
          success:function(data){
            var productData = data.split(/\r?\n|\r/);
            for (var i = 0; i < productData.length; i++){
              var cellData = productData[i].split(',');
              let card1 = new Product(cellData[0],cellData[1],cellData[2],cellData[3],cellData[4]);
              card1.buildCard(rowN);
            }
          }
        })

      })
}