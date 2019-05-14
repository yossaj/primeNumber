const PubSub = require('../helpers/pub_sub.js')

const Results = function () {
    
}

Results.prototype.bindEvents = function () {
    PubSub.subscribe('PrimeChecker:result', (event) => {
        const isItPrime = event.detail;
        this.displayResult(isItPrime);
    });
};

Results.prototype.displayResult = function (result) {
    const resultElement = document.querySelector('#result');
    resultElement.textContent = `${result}`;
};

module.exports = Results;