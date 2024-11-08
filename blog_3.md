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
> in this function we declared the variable type and it will process by checking their variable type.
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
    console.log(result1); 
    console.log(result2); 

  ```
<ins>Output</ins>
  ```
  24
  6
  ```

### 2. in - Type guard

'in' operator is used to narrow or refine the type of an object within a conditional statement. It checks whether a specific property or key exists within an object, and if it does, it narrows the type of that object to include that property.

> [example]
> in this function we declared a condition, in this condiotion its checking role property in user(object), if it is exits in user object it will console log the output.
> in Alias type we declared the role using literal type.


  ```
    type NormalUser = {
        name : string;
    }

    type AdminUser = {
        name: string;
        role : "Admin";
    }

    const getUser = (user: NormalUser | AdminUser)=>{
        if ("role" in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`);
            
        } else {
            console.log(`My name is ${user.name}`);
            
        }
    }

    getUser({name:"Elon", role :"Admin"})
    getUser({name:"Mark"})               

  ```
 <ins>Output</ins>
  ```
  My name is Elon and my role is Admin
  My name is Mark
  ```

### 2. instanceof - Type guard

The instanceof type guard allows you to check if an object is an instance of a specific class.
It returns a boolean value: true if the object is an instance of the type, and false .

> [example]
> Animal class is the parent class and others child class, others extends with parent class.
> In getAnimal function we passed the instance creation as param and in this function we declared a if else condition
  after that we are checking the animal is instance of which class if it's return true it will move on next step.


  ```
    class Animal {
        name : string;
        species : string;

        constructor(name: string, species :string) {
            this.name = name;
            this.species = species;
        }

        makeSound(){
            console.log("who I am!!!"); 
        }
    }

    class Cat extends Animal {
        constructor(name: string, species :string){
            super(name, species);
        }
         makeMeow(){
            console.log("meow meow meowwwww"); 
        }
    }

    class Dog extends Animal {
        constructor(name: string, species :string){
            super(name, species);
        }
        makebark(){
            console.log("bow-wow bow-wow bow-wowwww"); 
        }
    }

    const getAnimal =(animal: Animal)=>{
        if (animal instanceof Cat) {
            animal.makeMeow();
        }
        else if (animal instanceof Dog) {
            animal.makebark();
        }
        else{
            animal.makeSound();
        }
    }      

    const cat = new Cat ("kitty", "cat");
    const dog = new Dog ("rock","dog");
    getAnimal(cat);
    getAnimal(dog);        

  ```
 <ins>Output</ins>
  ```
  meow meow meowwwww
  bow-wow bow-wow bow-wowwww

  ```
 

## with the type guards we are like the type whisperer: Yes, TypeScript, this really is a Cat so you can't force a cat to bark.






