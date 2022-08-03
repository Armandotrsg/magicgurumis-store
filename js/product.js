class Product{
    constructor(name,price,img,link,alt,id,description){ 
        this.name = name;
        this.price = price;
        this.img = "img/" + img;
        this.link = link;
        this.alt = alt; 
        this.id = id;
        this.description = description;
    }

    getName(){
        return this.name;
    }
    getPrice(){
        return this.price;
    }
    getImg(){
        return this.img;
    }
    getLink(){
        return this.link;
    }
    getAlt(){
        return this.alt;
    }
    getId(){
        return this.id;
    }
    getDescription(){
        return this.description;
    }

    buildCard(row_,id_){
        let row = document.getElementById("row"+row_);

        let col = document.createElement("div");
        col.className = "col-sm-6 col-md-3 text-center"; //Debo de agregarle el h6 a este

        let cardMain = document.createElement("div");
        cardMain.className = "card border-0 bg-light mb-2 mt-1";
        //cardMain.setAttribute("id",id_);

        let cardBody = document.createElement("div");
        cardBody.className = "card-body"

        let productLink = document.createElement("a");
        productLink.href = "#";
        productLink.setAttribute("id",id_);
        productLink.onclick = function() {return buildMoreInfo(this)};

        let image = document.createElement("img");
        image.src = this.img;
        image.alt = this.alt;
        image.className = "img-fluid";

        let productTitle = document.createElement("h6");
        productTitle.innerText = this.name;

        let productPrice = document.createElement("span");
        productPrice.innerText = "$"+this.price;
        productPrice.className = "img-caption";

        row.appendChild(col);
        col.appendChild(cardMain);
        cardMain.appendChild(cardBody);
        cardBody.appendChild(productLink);
        productLink.appendChild(image);
        col.appendChild(productTitle);
        col.appendChild(productPrice);
    }
    

}

function changeView(product){
    let productView = document.getElementById("productView");
    productView.className = "d-none";

    let section = document.getElementById("moreInfo");
    section.classList.remove("d-none");
  
    let title1 = document.getElementById("productTitle1");
    title1.innerHTML = product.getName();
    
    let title2 = document.getElementById("productTitle2");
    title2.innerHTML = product.getName();

    let image = document.getElementById("image-product");
    image.src = product.getImg();
    image.alt = product.getAlt();
  
    let description = document.getElementById("description");
    description.innerHTML = product.getDescription();
  
    let price = document.getElementById("price");
    price.innerHTML = "$" + product.getPrice();
  
    let facebook = document.getElementById("facebook");
    facebook.href = product.getLink();
    
    return false;
}

function buildMoreInfo(element){
    var file = "products/productList.csv";
    var obj;
    $(document).ready(()=>{
        $.ajax({
          url: file,
          dataType:"text",
          success:function(data){
            var productData = data.split(/\r?\n|\r/);
            var allCards = [];
            
            for (var i = 0; i < productData.length; i++){
              var cellData = productData[i].split(',');
              if(element.id == cellData[5]){
                obj = new Product(cellData[0],cellData[1],cellData[2],cellData[3],cellData[4],cellData[5],cellData[6]);
                changeView(obj);
              }
              
            }
            
          }
        });
        
  
      });
      return false;
      
}

