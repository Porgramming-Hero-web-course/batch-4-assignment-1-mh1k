# Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

## Type Guards
Type Guard is a way to inform the Typescript compiler about the specific type of a variable or object in our code. By using type guards, we can make Typescript informed of the types we are working with so it can help you avoid errors and access properties that only exist on certain types.

## Why are Type Guards Necessary?

Using type guards, we can check and confirm variable types at specific points in our code, which ensures we are using types safely and accurately. However, we can narrow down the type of a variable within certain parts of our code, making it clear and safe to use type-specific properties and methods.

### Here are some reasons why type guards are important

- Safe Type Assertions : Type guards allow to safely declare the type of a value, prevents runtime errors that 
  can occur because of incorrect assumptions.

- Conditional Code Execution : It's conditionally execute different code based on the type of a value.

- Handling of Unions and Intersections : Type guards make it easy way to handle unions and Intersections types by
  allowing to narrow down to specific types as we needed.

  






