const form = document.querySelector('form');
const discountAmountSpan = document.querySelector('#discount-amount');
const taxAmountSpan = document.querySelector('#tax-amount');
const totalPriceSpan = document.querySelector('#total-price');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const toolPrice = parseFloat(document.querySelector('#tool-price').value);
  const discountPercent = parseFloat(document.querySelector('#discount-percent').value);
  const taxPercent = parseFloat(document.querySelector('#tax-percent').value);
  
  const discountAmount = toolPrice * (discountPercent / 100);
  const taxAmount = toolPrice * (taxPercent / 100);
  const totalPrice = toolPrice - discountAmount + taxAmount;
  
  discountAmountSpan.textContent = discountAmount.toFixed(2);
  taxAmountSpan.textContent = taxAmount.toFixed(2);
  totalPriceSpan.textContent = totalPrice.toFixed(2);
});
