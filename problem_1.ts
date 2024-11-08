{

    // Problem 1 - Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

    // Sample Input:
    // sumArray([1, 2, 3, 4, 5]);

    // Sample Output:
    // 15;
    //===================================================================================================


    const sumArray = (arr: number[]): number => {

        let total: number = 0;
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            total = total + element;
        }
        return total;

    };


    const result = sumArray([5, 1, 5, 4]);
    // console.log(result);
    

    

















}