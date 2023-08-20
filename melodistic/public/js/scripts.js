/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// The divided product arrays by page identifier


//Logic moved to Controllers
let productsToShow = [];
let allProducts = [];


function fetchProducts(pageIdentifier) {
    fetch(`/api/products?page=${pageIdentifier}`)
      .then((response) => response.json())
      .then((products) => {

            products.forEach((product) => {
            productsToShow.push(product);
            addCard(product.name, product.price, product.image);
        });
      })
      .catch((error) => {
        console.error('There was an error fetching the products:', error);
      });
  }
  
//   fetchProducts('home');
//   fetchProducts('onearrange');
//   fetchProducts('inearange');

function fetchAllProducts() {
    fetch('/api/all-products')
      .then((response) => response.json())
      .then((products) => {
          allProducts = products;
      })
      .catch((error) => {
          console.error('There was an error fetching all the products:', error);
      });
  }
  
  // Call this function when the page loads
  fetchAllProducts();
                              
// productsToShow.forEach(product => {
//     addCard(product.name, product.price, product.image);
// });


function productCardTemplate(productName, productPrice, productImage) {
    return `
    <div class="col-md-4 mb-5">
            <div class="card h-100">
                <img class="card-img-top" src="${productImage}" alt="${productName}">
                <div class="card-body p-4">
                    <div class="text-center">
                        <h5 class="fw-bolder">${productName}</h5>
                        <p>$${productPrice.toFixed(2)}</p>
                        <div class="d-flex justify-content-center small text-warning mb-2">
                            <div class="bi-star-fill"></div>
                            <div class="bi-star-fill"></div>
                            <div class="bi-star-fill"></div>
                            <div class="bi-star-fill"></div>
                            <div class="bi-star-fill"></div>
                        </div>
                    </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center">
                        <a class="btn btn-outline-dark mt-auto" href="#" onclick="addToCart('${productName}', ${productPrice})">Add to cart</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    }

    function addCard(productName, productPrice, productImage) {
        const cardHtml = productCardTemplate(productName, productPrice, productImage);
        const container = document.querySelector('.py-5 .container .row');
        const div = document.createElement('div');
        div.innerHTML = cardHtml.trim();
        container.appendChild(div.firstChild);
    }


//checkout

        const cart = {
            items: JSON.parse(localStorage.getItem('cart') || '[]'),
            count: JSON.parse(localStorage.getItem('cart') || '[]').length, // UPDATE CART COUNT HERE
        };


        function addToCart(productName, productPrice) {
            cart.items.push({ name: productName, price: productPrice });
            localStorage.setItem('cart', JSON.stringify(cart.items)); // Update the cart in local storage
            
            updateCartCount(); // Update the cart count
        
            displayCart(); // Refresh the display
        }

        function updateCartCount() {
            const cartCountEl = document.getElementById('cart-count');
            cartCountEl.innerText = JSON.parse(localStorage.getItem('cart') || '[]').length;
            
        }



        function displayCart() {
            const cartItemsDiv = document.getElementById('cart-items');
            cartItemsDiv.innerHTML = ''; // Clear previous items
        
            const table = document.createElement('table');
            table.className = 'table table-striped'; // Apply Bootstrap classes
        
            // Create header row
            const thead = document.createElement('thead');
            const headerRow = document.createElement('tr');
            headerRow.innerHTML = `
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
            `;
            thead.appendChild(headerRow);
            table.appendChild(thead);
        
            // TABLE BODY FOR EACH ITEM IN THE CART
            const tbody = document.createElement('tbody');
            cart.items.forEach((item, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.name}</td>
                    <td>$${item.price.toFixed(2)}</td>
                    <td><button onclick="removeItem(${index})" class="btn btn-danger">Remove</button></td>
                `;
                tbody.appendChild(row);
            });
            table.appendChild(tbody);
        
            cartItemsDiv.appendChild(table);
        }
        
        
        // Call this function on the checkout page to display the items
        displayCart();

        function checkout() {
            // Get the cart items element
            const cartItemsEl = document.getElementById('cart-items');
            // Get the current cart items
            const currentCartItems = cartItemsEl.innerText;
            // Get the cart count element
            const cartCountEl = document.getElementById('cart-count');
            // Get the current cart count
            const currentCartCount = parseInt(cartCountEl.innerText);
            // Clear the cart items
            cartItemsEl.innerText = '';
            // Set the cart count to 0
            cartCountEl.innerText = 0;
            // Create an alert
            alert(`You have purchased:\n${currentCartItems}`);
        }



                     //SORTING & SEARCHING TOOLS:


                     function sortProducts() {
                        const sortBy = document.getElementById('sort-options').value;
                    
                        switch (sortBy) {
                            case 'price-asc':
                                productsToShow.sort((a, b) => a.price - b.price);
                                break;
                            case 'price-desc':
                                productsToShow.sort((a, b) => b.price - a.price);
                                break;
                            default:
                                
                                break;
                        }
                    
                        // Clear the current products
                        const productContainer = document.querySelector('.py-5 .container .row');
                        productContainer.innerHTML = '';
                    
                        // Re-add the products in their sorted order
                        productsToShow.forEach(product => {
                            addCard(product.name, product.price, product.image);
                        });
                    }


                    function searchProducts() {
                        const searchQuery = document.getElementById("search-input").value.toLowerCase();
                        const resultsContainer = document.querySelector('.py-5 .container .row');
                        resultsContainer.innerHTML = "";
                    
                        allProducts.forEach(function(product) {
                            if (product.name.toLowerCase().includes(searchQuery)) {
                                addCard(product.name, product.price, product.image);
                            }
                        });
                    }
                    
                    document.getElementById('total-container').textContent = 'Total Price: $' + calculateTotal().toFixed(2);


        //CART MANAGEMENT/Removing items from cart


                      
                        function updateProductDisplay() {
                            // Clear the current products
                            const productContainer = document.getElementById('products-container');
                            productContainer.innerHTML = '';
                          
                            // Re-add the products in their sorted order
                            productsToShow.forEach(product => {
                              addCard(product.name, product.price, product.image);
                            });
                          }                      
                          document.addEventListener("DOMContentLoaded", function() {
                            updateProductDisplay();
                            updateTotalDisplay()
                          });
                         
                            function calculateTotal() {
                                const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
                                let total = 0;
                                cart.items.forEach(item => {
                                    total += item.price;
                                });
                                return total;
                            }


                            function updateTotalDisplay() {
                                const total = calculateTotal(); // Call your existing calculateTotal function
                                const totalEl = document.getElementById('total-price'); // Get the element where you want to display the total
                                totalEl.innerText = `$${total.toFixed(2)}`; // Update the displayed total
                              }


                              function removeItem(index) {
                                cart.items.splice(index, 1); // Remove the item from the array
                                localStorage.setItem('cart', JSON.stringify(cart.items)); // Update the cart in local storage
                            
                                // Update the cart count
                                const cartCountEl = document.getElementById('cart-count');
                                cartCountEl.innerText = cart.items.length; // Set the count to the current length of the cart items
                            
                                displayCart(); // Refresh the display
                                updateTotalDisplay(); // Update the total display on the checkout page
                            }
    


