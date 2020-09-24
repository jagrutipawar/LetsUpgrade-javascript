let products=[
    {
        id=1,
        name="Black-dress",
        size="L",
        color="black",
        price=1000,
        image="Black-dress.jpeg",
        description="Nice dress",
    },
    {
        id=2,
        name="Black-white shirt",
        size="L",
        color="black-white",
        price=1500,
        image="Black-white shirt.jpeg",
        description="Nice dress",
    },
    {
        id=3,
        name="blue gaun",
        size="S",
        color="blue",
        price=3000,
        image="Blue gaun.jpeg",
        description="Nice dress",
    },
    {
        id=4,
        name="Blue shirt",
        size="S",
        color="blue",
        price=1000,
        image="Blue shirt.jpeg",
        description="Nice dress",
    },
    {
        id=5,
        name="Formal whiteshirt",
        size="L",
        color="White",
        price=2000,
        image="Formal-whiteshirt.jpeg",
        description="Nice dress",
    },
    {
        id=6,
        name="Anarkali dress",
        size="S",
        color="Red",
        price=3000,
        image="Indian anakali.jpeg",
        description="Nice dress",

    },

    {
        id=7,
        name="Jacket",
        size="L",
        color="black",
        price=25000,
        image="jacket.jpeg",
        description="Nice dress",
    },
    {
        id=8,
        name="Kurta",
        size="S",
        color="pink",
        price=1000,
        image="Pink Kurta.jpeg",
        description="Nice dress",
    },
    {
        id=9,
        name="Saree",
        size="",
        color="Red",
        price=4000,
        image="red saree.jpeg",
        description="Nice dress",
    },
    {
        id=10,
        name="Indian Kurta",
        size="L",
        color="black",
        price=1800,
        image="Traditional-Kurta.jpeg",
        description="Nice dress",
    },
    {
        id=11,
        name="Red T-shirt",
        size="L",
        color="Red",
        price=1000,
        image="tshirt.jpeg",
        description="Nice dress",
    },
    {
        id=12,
        name="Yellow Kurta",
        size="S",
        color="Yellow",
        price=2000,
        image="Yellow kurti.jpeg",
        description="Nice dress",
    },   
    
];




cart = [];
  
  function displayProducts(productsData, who = "productwrapper") {
    let productsString = "";
  
    productsData.forEach(function (product, index) {
      let { id, name, image, color, description, price, size } = product;
  
      if (who == "productwrapper") {
        productsString += ` <div class="product">
          <div class="prodimg">
            <img src="images/${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="addToCart(${id})">Add to Cart</button>
          </p>
        </div>`;
      } else if (who == "cart") {
        productsString += ` <div class="product">
          <div class="prodimg">
            <img src="images/${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="removeFromCart(${id})">Remove from Cart</button>
          </p>
        </div>`;
      }
    });
  
    document.getElementById(who).innerHTML = productsString;
  }
  
  displayProducts(products);
  
  function searchProduct(searchValue) {
    let searchedProducts = products.filter(function (product, index) {
      let searchString =
        product.name + " " + product.color + " " + product.description ;
  
      return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
    });
  
    displayProducts(searchedProducts);
  }
  
  // this is a function to get a product based on id from a particular array
  // @param 1 the array u want to get products from
  function searchPrice(searchValue) {
    let searchedPrices = products.filter(function (product, index) {
      let searchStrinm =
      product.name + " " +product.price;
  
      return searchStrinm.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
    });
  
    displayProducts(searchedPrices);
  }
  // 
  
  function getProductByID(productArray, id) {
    return productArray.find(function (product) {
      return product.id == id;
    });
  }
  
  function addToCart(id) {
    // getting the product
    let pro = getProductByID(products, id);
    if(id==pro.id){
        console.log("Same");
    }
    //   putting in cart
    cart.push(pro);
    
    displayProducts(cart, "cart");
  }
  //
  function totalcount(id){
    var totalCount = 0;
    for(var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  }

  
  
  function removeFromCart(id) {
    // getting the index based on id
    let index = cart.findIndex(function (product) {
      return product.id == id;
    });
  
    //   removing from cart based on index
    cart.splice(index, 1);
    displayProducts(cart, "cart");
  }