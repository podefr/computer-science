function findPrime(n) {
    var primeNumbers = [2];
    var i = 3;

    while (primeNumbers.length < n) {
        if (isPrime(i)) {
            primeNumbers.push(i);
        }
        i++;
    }

    function isPrime(i) {
        return primeNumbers.every(function (prime) {
            return !!(i % prime);
        });
    }

    return primeNumbers;
}

console.log(findPrime(30));
