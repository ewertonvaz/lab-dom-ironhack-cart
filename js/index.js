// ITERATION 1

function updateSubtotal(product) {
  //console.log(product);
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  let subtotal = price * quantity;
  //console.log(price, quantity, subtotal);
  product.querySelector('.subtotal span').innerText = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll('.product');
  //const products = document.getElementsByClassName('product');
  //console.log(products);
  let total = 0;
  products.forEach( product => total += updateSubtotal(product));
  //console.log(total);

  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerText = `${total}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  //console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.removeChild(target);
  calculateAll();
}

// ITERATION 5

function createProduct(event) {
  //... your code goes here
  const products = document.querySelector('tbody');

  const target = event.currentTarget.parentNode.parentNode;
  //console.log('The target in create is:', target);
  const nameInput = target.querySelector('input[type="text"]');
  const priceInput = target.querySelector('input[type="number"]');
  //console.log(nameInput, priceInput);

  let tdName = document.createElement("td");
  tdName.className = "name";
  let spanName = document.createElement("span");
  spanName.innerText = nameInput.value;
  tdName.appendChild(spanName);

  let tdPrice = document.createElement("td");
  tdPrice.className = "price";
  tdPrice.innerText = "$";
  let spanPrice = document.createElement("span");
  spanPrice.innerText = priceInput.value;
  tdPrice.appendChild(spanPrice);

  let tdQuantity = document.createElement("td");
  tdQuantity.setAttribute("class", "quantity");
  let inputQuantity = document.createElement("input");
  inputQuantity.setAttribute("type", "number");
  inputQuantity.setAttribute("value", "0");
  inputQuantity.setAttribute("min", "0");
  inputQuantity.setAttribute("placeholder", "Quantity");
  tdQuantity.appendChild(inputQuantity);

  let tdSubtotal = document.createElement("td");
  tdSubtotal.className = "subtotal";
  tdSubtotal.innerText = "$";
  let spanSubtotal = document.createElement("span");
  spanSubtotal.innerText = "0";
  tdSubtotal.appendChild(spanSubtotal);

  let tdAction = document.createElement("td");
  tdAction.className = "action";
  let buttonSubtotal = document.createElement("button");
  buttonSubtotal.className = "btn btn-remove";
  buttonSubtotal.innerHTML = "Remove";
  buttonSubtotal.addEventListener('click', removeProduct);
  tdAction.appendChild(buttonSubtotal);

  let rowElement = document.createElement("tr");
  rowElement.className = "product";
  rowElement.appendChild(tdName);
  rowElement.appendChild(tdPrice);
  rowElement.appendChild(tdQuantity);
  rowElement.appendChild(tdSubtotal);
  rowElement.appendChild(tdAction);

  products.appendChild(rowElement);

  nameInput.value = "";
  priceInput.value = "0";
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.querySelectorAll('.product td.action button');
  //console.log(removeButtons);
  removeButtons.forEach( button => button.addEventListener('click', removeProduct));

  document.getElementById('create').addEventListener('click', createProduct);
});
