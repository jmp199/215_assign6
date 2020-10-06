var wrapperEle = document.body;
var products = [
  {
    id:0,
    name:"Apples",
    price:"2.99",
    image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
    color:"red"
  },
  {
    id:1,
    name:"Bananas",
    price:"2.50",
    image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
    color:"gold"
  },
  {
    id:2,
    name:"Oranges",
    price:"3.50",
    image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
    color:"orange"
  }
];

function fruitStore(obj) {
  var pEle = document.createElement("div");
  pEle.classList.add("product");

 
  
  var nEle = document.createElement("h1");
  nEle.innerHTML = obj.name;
  
    var aEle = document.createElement("h2");
  aEle.innerHTML = "$" + obj.price;
  

  var img = document.createElement("img");  
if(obj.name=="Apples")
{img.src = "https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg";
  var src = document.getElementById("pic");}
else if(obj.name=="Bananas")
{img.src = "https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg";
  var src = document.getElementById("pic");}  
  else{
    img.src = "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg";
  var src = document.getElementById("pic");
  };
  
  
  

  

   pEle.appendChild(nEle);
   pEle.appendChild(aEle)
  pEle.appendChild(img);
   wrapperEle.appendChild(pEle); 
  
}
  
  for(var i=0; i<products.length; i++){
  fruitStore(products[i]);
}