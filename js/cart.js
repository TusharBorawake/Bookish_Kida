//  Cart starts here

// cart_button is a class used for add to cart button thats why we are grabbing the cart_button class

let carts = document.querySelectorAll('.cart_button');

let products = [
    {
        productName: "Book1",
        tag: "C in depth",
        price: 280,
        inCart: 0
    },
    {
        productName: "Book2",
        tag: "C in depth",
        price: 280,
        inCart: 0
    },
    {
        productName: "Book3",
        tag: "C in depth",
        price: 280,
        inCart: 0
    },
    {
        productName: "Book4",
        tag: "C in depth",
        price: 280,
        inCart: 0
    },
    {
        productName: "Book5",
        tag: "C in depth",
        price: 280,
        inCart: 0
    },
    {
        productName: "Book6",
        tag: "C in depth",
        price: 280,
        inCart: 0
    },
    {
        productName: "Book7",
        tag: "Science Book",
        price: 280,
        inCart: 0
    },
    {
        productName: "Book8",
        tag: "Science Book",
        price: 280,
        inCart: 0
    },
    {
        productName: "Book9",
        tag: "Science Book",
        price: 280,
        inCart: 0
    },
    {
        productName: "Book10",
        tag: "Science Book",
        price: 280,
        inCart: 0
    },
    {
        productName: "Book11",
        tag: "Science Book",
        price: 280,
        inCart: 0
    },
    {
        productName: "Book12",
        tag: "Science Book",
        price: 280,
        inCart: 0
    },
    {
        productName: "Book13",
        tag: "Biography Book",
        price: 280,
        inCart: 0
    },
    {
        productName: "Book14",
        tag: "Biography Book",
        price: 280,
        inCart: 0
    },
    {
        productName: "Book15",
        tag: "Biography Book",
        price: 280,
        inCart: 0
    },
    {
        productName: "Book16",
        tag: "Biography Book",
        price: 280,
        inCart: 0
    },
    {
        productName: "Book17",
        tag: "Biography Book",
        price: 280,
        inCart: 0
    },
    {
        productName: "Book18",
        tag: "Biography Book",
        price: 280,
        inCart: 0
    },
]

for (let start = 0; start < carts.length; start++) {
    carts[start].addEventListener('click', () => {
        cartNumbers(products[start]);
        totalCost(products[start]);
    })
}

function onLoadCartNumbers() { //After reloading a page this function checks that whether any items are there in a cart(localstorage) and if they are present then runs the if part so that we can maintain our count of products in a cart, at cart button, even after reloading a page number of times 
    let productNumbers = localStorage.getItem("cartNumbers");

    if (productNumbers) {
        document.querySelector('#bookshelf span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    // console.log("click",product);
    let productNumbers = localStorage.getItem("cartNumbers");

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('#bookshelf span').textContent = productNumbers + 1; // For count at cart button
    }
    else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('#bookshelf span').textContent = 1; // For count at cart button
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    }
    else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }
    else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productscontainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');

    if (cartItems && productscontainer) {
        productscontainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productscontainer.innerHTML += `
    <div class="combo-of-each-product">
        <div class="product">
            <i class="fas fa-trash"></i>
            <img src="./images/${item.tag}.jpg">
            <span>${item.productName}</span>
        </div>
        <div class="price">Rs.${item.price} Only</div>
        <div class="quantity">
            <i class="fas fa-minus"></i>
            
            <span>${item.inCart}</span>
            
            <i class="fas fa-plus"></i>
        </div>
        <div class="total">
            Rs.${item.inCart * item.price} Only
        </div>
    </div>
    `;
        });

        productscontainer.innerHTML += `
        <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">
            Basket Total
        </h4>
        <h4 class="basketTotal">
            Rs. ${cartCost} Only
        </h4>
    </div>
        `;

    }

}

onLoadCartNumbers(); // Due to this line after reloading a page the onLoadCartNumbers() function will get a call
displayCart();
// cart ends here


{/* <div class="quantity">
            -
            <span>${item.inCart}</span>
            +
        </div>
        <div class="total">
            Rs.${item.inCart * item.price} Only
        </div> */}