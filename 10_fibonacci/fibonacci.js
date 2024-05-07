// Recursion: Intuitive, naive approach. T(n) is 2**n. S(n) is n.
// const fibonacci = function(n) {
//     if (n < 0) { return "OOPS"; }
//     else if (n == 0) { return 0; }
//     else if (n == 1) { return 1; }
//     else { return (fibonacci(n - 1) + fibonacci(n - 2)); }
// };

// Iterative: Less intuitive, faster. T(n) is n. S(n) is 1.
const fibonacci = function(n) {
    if (n < 0) { return "OOPS"; }
    else if (n == 0) { return 0; }
    else {
        let firstPrev = 1; // F_n-1
        let secondPrev = 0; // F_n-2

        for (let i = 2; i <= n; i++) {
            let current = firstPrev + secondPrev; // F_n = F_n-1 + F_n-2
            secondPrev = firstPrev;
            firstPrev = current;
        }
        return firstPrev;
    }
}

// Do not edit below this line
module.exports = fibonacci;
