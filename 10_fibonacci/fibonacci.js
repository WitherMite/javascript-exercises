const fibonacci = function(posInput) {
    const pos = Number(posInput);
    if (pos < 0) return "OOPS";
    let fib = 0
    let nextFib = 1
    for (let i = 0; i < pos; i++) {
        [fib , nextFib] = [nextFib, fib + nextFib];
    }
    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
