//-------------------- MODAL -------------------//

var modal = document.getElementById("myModal");

var btn = document.getElementById("shopping-cart-modal");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() 
{
  modal.style.display = "block";
}

span.onclick = function() 
{
  modal.style.display = "none";
}

window.onclick = function(event) 
{
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//-------------------- CAROUSEL-------------------//
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) 
{
  showSlides(slideIndex += n);
}

function currentSlide(n) 
{
  showSlides(slideIndex = n);
}

function showSlides(n) 
{
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

if (n > slides.length) 
{
    slideIndex = 1
}

if (n < 1) 
{
    slideIndex = slides.length
}

for (i = 0; i < slides.length; i++) 
{
    slides[i].style.display = "none";
}

for (i = 0; i < dots.length; i++) 
{
    dots[i].className = dots[i].className.replace(" active", "");
}

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


//----------------ADD TO CART-------------//

const items = 
{
  products : [
    {
      "img": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F05%2Fadidas-stan-smith-slip-on-tribe-yellow-cloud-white-release-fx0531-fx0532-000.jpg?w=960&cbr=1&q=90&fit=max",
      "model": "Stan Smith Slip-on Tribe Yellow",
		  "price": "$1800.30"
    },
    {
      "img": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F02%2Fadidas-originals-stan-smith-slip-on-white-green-off-white-release-info-fx5849-000.jpg?w=960&cbr=1&q=90&fit=max",
      "model": "Stan Smith Slip-on White/Green",
		  "price": "$1300.50"
    },
    {
      "img": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2021%2F07%2Fadidas-originals-adilette-stan-smith-white-green-slides-price-where-to-buy-0.jpg?w=960&cbr=1&q=90&fit=max",
      "model": "Stan Smith Slip-on",
		  "price": "$1300.00"
    },
    {
      "img": "https://images.stockx.com/images/Nike-Air-Force-1-Low-07-Essential-White-Metallic-Silver-Black-W.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1633713130",
      "model": "AirForce 1",
		  "price": "$2000.50"
    },
    {
      "img": "https://images.stockx.com/images/Nike-Air-Force-1-Low-07-Triple-Black.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1642460008&q=75",
      "model": "AirForce 1 BLACK",
		  "price": "$2230.00"
    },
    {
      "img": "https://images.stockx.com/images/Nike-Zoom-Winflo-6-Atmosphere-Grey-Light-Current-Blue.png?fit=fill&bg=FFFFFF&w=480&h=320&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1627415443&q=75",
      "model": "Nike Winflo",
		  "price": "$2500.00"
    },
    {
      "img": "https://images.stockx.com/images/Nike-Air-Max-Excee-Go-the-Extra-Smile-W.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1652750896&q=75",
      "model": "Nike AirMax",
		  "price": "$1350.25"
    },
    {
      "img": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F10%2Fnike-air-max-90-1-black-leather-release-000.jpg?w=960&cbr=1&q=90&fit=max",
      "model": "Nike AirMax 90",
		  "price": "$4350.60"
    }
  ]
}

let totalItems = 0;

for(let i=0; i<items.products.length; i++)
{
  const divider = document.createElement("div");
  divider.innerHTML = "<img src=" + 
  items.products[i].img + "> </br>" + "<h4>" +
  items.products[i].model + "</h4>" + "</br>" + "<h3>" +
  items.products[i].price + "</h3>" + "</br></br>" + 
  "<button id='"+ i +"' onclick='addToCard(this.id)'>Add to Cart</button>";

  console.log(this.id);
  console.log(items.products[i]);
  document.getElementById("product-content").appendChild(divider);
}

function addToCard(id)
{
  alert("Item Added to your cart");
  
  const itemsAdded = document.createElement("div");

  itemsAdded.innerHTML = "<img src=" + 
  items.products[id].img + "> </br>" + "<h4>" + 
  items.products[id].model + "</h4>" + "</br>" + "<h3>" +
  items.products[id].price + "</h3>" + "</br></br>";

  document.getElementById("cart").appendChild(itemsAdded);

  totalItems++;
  document.getElementById("totalItem").innerHTML = totalItems;
}

