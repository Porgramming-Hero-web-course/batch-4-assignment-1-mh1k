{

    // Problem 3 - Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

    // Sample Input:
    // countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");

    // Sample Output:
    // 2;


    const countWordOccurrences = (value1: string, value2: string): number => {

        const words = value1.toLocaleLowerCase().split(" "); 
        // if (value2 === "") {
        //     return 0;
        // } else {
        //     const sameWord = words.filter((word) => word.includes(value2.toLocaleLowerCase())); // filter the word
        //     return sameWord.length;
        // }
        const unique: string[] = [];

        for (const word of words) {
            if (word === value2.toLocaleLowerCase()) {
                unique.push(word)
            }
        }

        return unique.length

    }

    const result = countWordOccurrences("TypeScript is great. I love is TypeScript!", "typescript");
    console.log(result);






















}