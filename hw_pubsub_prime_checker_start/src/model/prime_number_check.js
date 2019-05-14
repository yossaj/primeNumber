const PubSub = require('../helpers/pub_sub.js')

const PrimeNumCheck = function(){

}

PrimeNumCheck.prototype.bindEvents = function () {
    PubSub.subscribe('FormView: Number Given', (event) => {
        const givenNumber = event.detail;
        const result = this.numberIsPrime(givenNumber);
        PubSub.publish('PrimeChecker:result', result);
    });
};


PrimeNumCheck.prototype.numberIsPrime = function (number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};

module.exports = PrimeNumCheck;