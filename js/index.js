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
  const products = [ ...document.querySelectorAll('.product')];
  //const products = document.getElementsByClassName('product');
  // console.log(products);
  let total = 0;
  products.forEach( product => total += updateSubtotal(product));
  //console.log(total);

  // ITERATION 3
  //... your code goes here
  document.getElementById('total-value').innerText = `Total: $ ${total}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
