{

    // Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

    // Sample Input 1:
    // const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

    // Sample Output 1:
    // 78.54;

    // Sample Input 2:
    // const rectangleArea = calculateShapeArea({
    //   shape: "rectangle",
    //   width: 4,
    //   height: 6,
    // });

    // Sample Output 2:
    // 24;

    type Circle = {
        shape: string;
        radius: number
    }
    type Rectangle = {
        shape: string;
        width: number;
        height: number
    }

    type CircleRectangle = Circle | Rectangle

    const calculateShapeArea = (shapes: CircleRectangle): number | string => {

        if ("radius" in shapes) {
            const circleArea = Math.PI * shapes.radius * shapes.radius;
            const circleAreaNumber = parseFloat(circleArea.toFixed(2))
            return circleAreaNumber;
        }
        else if ("width" in shapes && "height" in shapes) {
            const rectangleArea = shapes.height * shapes.width;
            return rectangleArea;
        }
        else {
            return ("not a shape")
        }

    }



    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    // console.log(circleArea);


    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 11,
        height: 17
    });

    // console.log(rectangleArea);
    console.log();
    























}