# Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

## Type Guards
Type Guard is a way to inform the Typescript compiler about the specific type of a variable or object in our code. By using type guards, we can make Typescript informed of the types we are working with so it can help you avoid errors and access properties that only exist on certain types.

## Why are Type Guards Necessary?

Using type guards, we can check and confirm variable types at specific points in our code, which ensures we are using types safely and accurately. However, we can narrow down the type of a variable within certain parts of our code, making it clear and safe to use type-specific properties and methods.

### Here are some reasons why type guards are important

- **Safe Type Assertions :** Type guards allow to safely declare the type of a value, prevents runtime errors that 
  can occur because of incorrect assumptions.

- **Conditional Code Execution :** It's conditionally execute different code based on the type of a value.

- **Handling of Unions and Intersections :** Type guards make it easy way to handle unions and Intersections types
  by allowing to narrow down to specific types as we needed.


## Various Types of Type Guards and Their Use Cases

There are several types of Type Guards in TypeScript. let's see how we use it in code.

### 1. typeof - Type guard

The typeof type guard lets us refine a variable's type by checking its type with the typeof operator. This approach is especially helpful when working with primitive types, such as string, number, boolean, symbol, and undefined. It’s also useful for determining if a variable is a function or an object, helping us handle different types safely and correctly in our code.

> [example]
> in this function we declared the variable type and it will process by cheaking their variable type.
> and it will return either number or string depends on its input.


  ```
    type AlphaNeumeric = string | number;

    const add = (value1: AlphaNeumeric, value2: AlphaNeumeric): AlphaNeumeric => {
        if (typeof value1 === "number" && typeof value2 === "number") {
            return value1 + value2
        } else {
            return value1.toString() + value2.toString();
        }
    }

    const result1 = add("2", "4");
    const result2 = add(2, 4);
    console.log(result1); // output - 24;
    console.log(result2); // output - 6;

  ```








