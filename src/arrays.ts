// import { parse } from "path";
// import { cursorTo } from "readline";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    return numbers.length === 0 ?
            []
        :   [numbers[0], numbers[numbers.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripledNum = numbers.map((num: number): number => num * 3);
    return tripledNum;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    //const stringToInt = numbers.map((str: string) : number => parseInt(str))
    //const stringToInt = numbers.map((str: string) : number => (parseInt(str) === NaN ? parseInt(str) === 0 : parseInt(str)))
    //Need to find a way to check if the parsed string (now int is NaN)
    const parsedStringToInt = numbers.map((parsedNum: string): number =>
        !isNaN(Number(parsedNum)) ? Number(parsedNum) : 0,
    );
    return parsedStringToInt;

    //If not isNan (if the number isn't Nan), parse  the num, if else, num is 0
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    //const removeDollarSign = amounts.map((str: string): number => (str.startsWith("$")) ? parseInt(str.substring(1)) : parseInt(str))
    //I think I first need to make a filter that gets any starting dollar signs
    //const parseAmountToInt = amounts.map((amount: string): number => Number(amount.startsWith("$")) ? Number(amount.slice(1)) : isNaN(Number(amount)) ? 0  : Number(amount))
    // FIRST CHECK - If a string starts with "$" -> Parse the string to a number and return it
    // THEN CHECK - If a string does NOT start with "$", check if it's a valid number after parsing the string and return the number
    // FINALLY CHECK - If the string can NOT be coneverted to a number, return 0
    const parseAmountToInt = amounts.map((amount: string): number =>
        amount.startsWith("$") ?
            Number(amount.slice(1)) || 0
        :   Number(amount) || 0,
    );
    return parseAmountToInt;
    // const removeSignAndParse = amounts.map((removedAmount: string): number => removedAmount.startsWith("$") ? !isNaN(Number(removedAmount)) ? Number(removedAmount.slice(1)) : Number(removedAmount))
    // return (removeSignAndParse);
    // const filterForSignAndParse = amounts
    //     .filter((amount: string): boolean => amount.startsWith("$"))
    //     .map((amount: string): number =>
    //         isNaN(Number(amount)) ? 0 : Number(amount.slice(1)),
    //     );
    // return filterForSignAndParse;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    //First filter the list and remove anyone strings that end with "?"
    const filterAndMapMessage = messages
        .filter((message: string): boolean => !message.endsWith("?")) //checks if the word ends with a "?" to delete it from array
        .map((message: string): string =>
            message.endsWith("!") ? message.toUpperCase() : message,
        );
    return filterAndMapMessage;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */

/*
const processedWords = words
  .filter((word: string): boolean => word.length < 4) // 1. Discard long words
  .map((word: string): string => word.toUpperCase());  // 2. Transform the remaining words
Great example on how to CHAIN multiple higher order methods

*/
export function countShortWords(words: string[]): number {
    //Create two higher-order array functions
    //First one for finding if a word is less than 4 letter long by using a FILTER
    /*const filterAndCountWords = words
    .filter((word: string): boolean => word.length > 4)//Seperated for readibility
    //Then reducing to just get the count of how many nunbers fit that
    .reduce((total: number, num: number) => )*/
    const filterOutLongWords = words.filter(
        (word: string): boolean => word.length < 4,
    );

    return filterOutLongWords.length;
}

// const prices = [13, 7, 8, 2];

// // Using `reduce` method - awesome!
// const sumReduce = prices.reduce((currentTotal: number, num: number) => currentTotal + num, 0,);

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    colors.length === 0 ? true : false;
    const allowColors = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green",
    );
    return allowColors;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    //I need a sum variable to add all the nums in the array
    //I need to join that sum with an = sign
    //I need to join every element with +
    const numTotal = addends.reduce(
        (total: number, num: number): number => total + num,
        0,
    );
    const messagee: string = `${numTotal}=${addends.join("+")}`;

    return addends.length === 0 ? "0=0" : messagee;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    /*There are two cases to this problem,
    whenever there is a negative number INSTEAD OF just summing everything and trying to "find a negative"
    A better approach would be:
    Case 1) Look through the list of values, find the INDEX OF the first negative value, splice the list
    to only the numbers BEFORE the negatiive then SUM THAT and put it after the negative

    Case 2) Look through the entire list, if there are NO negatives then just splice the total
    sum of all the values at the end of the list

    Code Needed:
    -[MAP]: Code for looking through all elements and returning whether all elements are true (also implied to find if ANYTHING is false)
    -[SPLICE]: If a negative appears in the list of values (if the map is NOT true) then get the sum of EVERY value BEFORE the negative
    then splice THAT total to after the negative
    If there is NO NEGATIVE then add the sum total to the end of the list
    */

    //clone
    const valuesInside = [...values];

    const firstNegNumIndex = valuesInside.findIndex((value: number): boolean => value < 0,);

    //Get the array of numbers before the first negative number
    //Sliced Array: [1,2,-3] -> [1,2]
    const slicedArrayBeforeNegNum =
        firstNegNumIndex !== -1 ?
            valuesInside.slice(0, firstNegNumIndex)
        :   valuesInside;

    //Get the sum of numbers present before the first negative number
    const getSumBeforeNegNum = slicedArrayBeforeNegNum.reduce(
        (total: number, num: number) => total + num,
        0,
    );
    const getSumNormally = valuesInside.reduce(
        (total: number, num: number) => total + num,
        0,
    );
    const valuesWithSumAtEnd = [...values, getSumNormally];

    //If there is a negative number in the list, call slicedArrayBeforeNegNum to get the returned list
    if (firstNegNumIndex === -1) {
        return valuesWithSumAtEnd;
    } else {
        valuesInside.splice(firstNegNumIndex + 1, 0, getSumBeforeNegNum);
        return valuesInside;
    }
}
