const FormView = require('./view/form.js');
const PrimeNumCheck = require('./model/prime_number_check.js');
const Results = require('./view/result.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log ('JavaScript Loaded');

  const formView = new FormView();
  formView.bindEvents();

  const primeNumCheck = new PrimeNumCheck();
  primeNumCheck.bindEvents();

  const results = new Results();
  results.bindEvents();

});
