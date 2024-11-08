{

    // Problem 2 - Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

    // Sample Input:
    // removeDuplicates([1, 2, 2, 3, 4, 4, 5])
    // Sample Output:
    // ([1, 2, 3, 4, 5]);


    const removeDuplicates = (numbers: number[]): number[] => {

        let unique: number[] = []; // unique numbers array
        for (let i = 0; i < numbers.length; i++) {
            const element = numbers[i];
            if (unique.indexOf(element) === -1) {
                unique.push(element);
            }

        }

        return unique;
    }


    const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
    // console.log(result);
    console.log();
    
    

    



























}