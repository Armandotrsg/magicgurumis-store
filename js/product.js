class Product{
    constructor(name,price,img,link,alt){ 
        this.name = name;
        this.price = price;
        this.img = img;
        this.link = link;
        this.alt = alt; 
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

    buildCard(row_){
        let row = document.getElementById("row"+row_);

        let col = document.createElement("div");
        col.className = "col-sm-6 col-md-3 text-center"; //Debo de agregarle el h6 a este

        let cardMain = document.createElement("div");
        cardMain.className = "card border-0 bg-light mb-2 mt-1";

        let cardBody = document.createElement("div");
        cardBody.className = "card-body"

        let productLink = document.createElement("a");
        productLink.href = this.link;
        productLink.target = "_blank";

        let image = document.createElement("img");
        image.src = "img/" + this.img;
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