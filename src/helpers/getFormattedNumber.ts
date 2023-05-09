export function getFormattedNumber(input: number, defaultDigitsAfterDecimalPoint = 3): number {
    const numString = input.toString();

    if (!numString.includes(".")) {
        return input
    }
    
    const startsWithZero = numString.startsWith("-0") || numString.startsWith("0")
    const leadingZeros = (numString.match(/\.0*/) || [''])[0].length - 1

    let digits = defaultDigitsAfterDecimalPoint;

    if (startsWithZero && leadingZeros >= defaultDigitsAfterDecimalPoint) {
        digits = leadingZeros + 1;
    }
    
    return Number(input.toFixed(digits));
}