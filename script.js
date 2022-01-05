/*
Coding Steps:
    1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
        a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
        b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
        c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.
*/

    let ages = [3, 9, 23, 64, 2, 8, 28, 93];
    console.log(ages[ages.length-1] - ages[0]);

    ages.push(25);
    console.log(ages[ages.length-1] - ages[0]);

    let ageTotal = 0;
    for (let i = 0; i < ages.length; i++){
        ageTotal += ages[i];
    }

    console.log(ageTotal / ages.length);

/*
Coding Steps:
    2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
        a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
        b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
*/
    let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

    let nameLength = 0;
    for (let i = 0; i < names.length; i++){
        nameLength += names[i].length;
    }
    console.log(nameLength/names.length);

    let allNames = [];
    for (let i = 0; i < names.length; i++){
        allNames += names[i] + ' ';
    }
    console.log(allNames);

//  3.	How do you access the last element of any array?
    // This should have been question 2 of this assignment
    // array[array.length - 1];

//  4.	How do you access the first element of any array?
    // This should have been question 1 of this assignment
    // array[0];


//  5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
    let nameLengths = [];

    for (let i = 0; i < names.length; i++){
        nameLengths.push(names[i].length);
    }
    console.log (nameLengths);
//  6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
    let lengthSum = 0;
    for (let i = 0; i < nameLengths.length; i++){
        lengthSum += nameLengths[i];
    }

//  7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
    function concatXtimes(word, n){
        let newWord ='';
        for (i = 0; i < n; i++){
            newWord += word;
        }

        return newWord;
    }

    console.log(concatXtimes('Hello', 3));

//  8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
    function fullName(fName, lName){
        return (fName + ' ' + lName);
    }

    console.log(fullName('Roger', 'Rabbit'));

//  9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
    
    //Function to Sum Array values, will be useful for future questions
    function arraySum (arr){
        return (arr.reduce(function(currentTotal, currentNumber){
            return (currentTotal + currentNumber);
        }));
    }

    function isGreaterThan100 (arr){
        if (arraySum(arr) > 100){
            return true;
        } else {
            return false;
        }
    }

    console.log(isGreaterThan100(nameLengths));

//  10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
    function averageArray (arr){
        return (arraySum(arr) / arr.length);
    }

    console.log (averageArray(nameLengths));

//  11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
    function isFirstArrayGreater(arr1, arr2){
        if (averageArray(arr1) > averageArray(arr2)){
            return true;
        } else {
            return false;
        }
    }

    console.log (isFirstArrayGreater(ages, nameLengths));

//  12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
    function willBuyDrink (isHotOutside, moneyInPocket){
        if ((isHotOutside == true) && (moneyInPocket > 10.50)){
            return true;
        } else {
            return false;
        }
    }

    console.log(willBuyDrink(true, 33));


//  13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

    //Check the current status and see if we should be doing homework.
    function doHomework (status){
        switch (status){
            case 'working':
                console.log('Currently at work, will do homework later.');
                break;
            case 'playing':
                console.log('Currently playing games, will do homework later.');
                break;
            case 'sleepig':
                console.log('It is to late to be doing homework.');
                break;
            default:
                console.log ('Not currently doing anything, guess I will do my homework.');
                break;
        }
    }

    doHomework('bored');