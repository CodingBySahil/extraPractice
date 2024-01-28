// // // // JavaScript Fundamentals – Part 1
// // // // LECTURE: Values and Variables

// // // // 1. Declare variables called 'country', 'continent' and 'population' and 
// // // // assign their values according to your own country (population in millions)
// let country = "Pakistan",continent = "Asia",population = 231.4;
// // // 2. Log their values to the console
// console.log(`Our country name is : ${country}`);
// console.log(`Our country is located in continent of : ${continent}`);
// console.log(`Our country total population is  : ${population} millions`);






// // // LECTURE: Data Types

// // // 1. Declare a variable called 'isIsland' and set its value according to your 
// // // country. The variable should hold a Boolean value. Also declare a variable
// // // 'language', but don't assign it any value yet
// let isIsland = false,language;
// // // 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// // // to the console
// console.log(typeof(isIsland))
// console.log(language)







// // // LECTURE: Basic Operators

// // 1. If your country split in half, and each half would contain half the population, 
// // then how many people would live in each half?
// let halfPopulation = 231.4/2 
// console.log(`Our country half population is : ${halfPopulation} million`)
// // 2. Increase the population of your country by 1 and log the result to the console
// population++;
// console.log(`population + 1 : ${population}`)
// // 3. Finland has a population of 6 million. Does your country have more people than 
// // Finland?
// let finland = 6;
// if(finland > population){
//     console.log(`Finland has more population than pakistan`)
// }else{
//     console.log("Pakistan has more population than finaland")
// }
// // 4. The average population of a country is 33 million people. Does your country 
// // have less people than the average country?
// let averagePopulationOfAnyCountry = 33;
// if(population < averagePopulationOfAnyCountry){
//     console.log("Yes our country have less population");
// }else{
//     console.log("No our country have more population");
// }
// // 5. Based on the variables you created, create a new variable 'description'
// // which contains a string with this format: 'Portugal is in Europe, and its 11 million 
// // people speak portuguese'
// let description = `${country} is in ${continent}, and its ${population} million people speak urdu`;
// console.log(description)








// // The Complete JavaScript Course 6
// // LECTURE: Strings and Template Literals

// // 1. Recreate the 'description' variable from the last assignment, this time 
// // using the template literal syntax
// description = `${country} is in ${continent}, and its ${population} million people speak urdu`;
// console.log(description);







// // LECTURE: Taking Decisions: if / else Statements
// // 1. If your country's population is greater that 33 million, log a string like this to the 
// // console: 'Portugal's population is above average'. Otherwise, log a string like 
// // 'Portugal's population is 22 million below average' (the 22 is the average of 33 
// // minus the country's population)
// if(population>33){
//     console.log(`${country}'s population is above average`)
// }else{
//     console.log(`'${country}'s population is ${population} million below average' (the ${population} is the average of 33 minus the country's population)`)
// }



// // 2. After checking the result, change the population temporarily to 13 and then to 
// // 130. See the different results, and set the population back to original
// let tempPopulation = 13
// if(tempPopulation>33){
//     console.log(`${country}'s population is above average`)
// }else{
//     console.log(`'${country}'s population is ${tempPopulation} million below average' (the ${tempPopulation} is the average of 33 minus the country's population)`)
// }
// tempPopulation = 130
// if(tempPopulation>33){
//     console.log(`${country}'s population is above average`)
// }else{
//     console.log(`'${country}'s population is ${tempPopulation} million below average' (the ${tempPopulation} is the average of 33 minus the country's population)`)
// }





// // LECTURE: Type Conversion and Coercion
// // 1. Predict the result of these 5 operations without executing them:
// // '9' - '5';
// // '19' - '13' + '17';
// // '19' - '13' + 17;
// // '123' < 57;
// // 5 + 6 + '4' + 9 - 4 - 2;

// // 2. Execute the operations to check if you were right
// let operation1 = '9' - '5';
// let operation2 ='19' - '13' + '17';
// let operation3 = '19' - '13' + 17;
// let operation4 ='123' < 57;
// let operation5 = 5 + 6 + '4' + 9 - 4 - 2;
// console.log(operation1,operation2,operation3,operation4,operation5)







// // The Complete JavaScript Course 7
// // LECTURE: Equality Operators: == vs. ===
// // 1. Declare a variable 'numNeighbours' based on a prompt input like this: 
// // prompt('How many neighbour countries does your country 
// // have?');
// let numNeighbours = prompt('How many neighbour countries does your country have?')
// // 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality 
// // == for now)
// if(numNeighbours == 1){
//     console.log('Only 1 border!') 
// }
// // 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
// // is greater than 1
// else if(numNeighbours>1){
//     console.log('More than 1 border!')
// }
// // 4. Use an else block to log 'No borders' (this block will be executed when 
// // 'numNeighbours' is 0 or any other value)
// else{
//     console.log('No border')
// }
// // 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// // I have checked 
// // 6. Change == to ===, and test the code again, with the same values of 
// // 'numNeighbours'. Notice what happens when there is exactly 1 border! Why 
// // is this happening?
// if(numNeighbours === 1){
//     console.log('Only 1 border!') 
// }
// else if(numNeighbours>1){
//     console.log('More than 1 border!')
// }
// else{
//     console.log('No border')
// }
// // I have checked promt take string and it compare data type as well as value
// // 7. Finally, convert 'numNeighbours' to a number, and watch what happens now 
// // when you input 1
// Number(numNeighbours);
// if(numNeighbours === 1){
//     console.log('Only 1 border!') 
// }
// else if(numNeighbours>1){
//     console.log('More than 1 border!')
// }
// else{
//     console.log('No border')
// }
// // 8. Reflect on why we should use the === operator and type conversion in this 
// // situation
// // We use === for checking the value as well as the data type and we use the type conversion for convert the string of promt into number 









// LECTURE: Logical Operators
// 1. Comment out the previous code so the prompt doesn't get in the way
// comment done

// 2. Let's say Sarah is looking for a new country to live in. She wants to live in a 
// country that speaks english, has less than 50 million people and is not an 
// island.
// 3. Write an if statement to help Sarah figure out if your country is right for her. 
// You will need to write a condition that accounts for all of Sarah's criteria. Take 
// your time with this, and check part of the solution if necessary.
// 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If 
// not, log 'Portugal does not meet your criteria :('
// let myCountryName = "Pakistan",language = "Urdu",population = 231.4,island = false;
// if(language == "English" && population < 50 && island == false){
//     console.log(`Sarah should live in ${myCountryName}`)
// }else{
//     console.log(`${myCountryName} does not meet sarah criteria`)
// }
// // 5. Probably your country does not meet all the criteria. So go back and temporarily 
// // change some variables in order to make the condition true (unless you live in 
// // Canada :D)
// language = "English", population = 30;
// if(language == "English" && population < 50 && island == false){
//     console.log(`Sarah should live in ${myCountryName}`)
// }else{
//     console.log(`${myCountryName} does not meet sarah criteria`)
// }









// // The Complete JavaScript Course 8
// // LECTURE: The switch Statement
// // 1. Use a switch statement to log the following string for the given 'language':
// // chinese or mandarin: 'MOST number of native speakers!'
// // spanish: '2nd place in number of native speakers'
// // english: '3rd place'
// // hindi: 'Number 4'
// // arabic: '5th most spoken language'
// // for all other simply log 'Great language too :D'

// let languages = prompt("Enter your lanuguage name");
// switch(languages){
//     case "chinese":{
//         console.log("MOST number of native speakers!")
//         break
//     }
//     case "mandarin":{
//         console.log("MOST number of native speakers!")
//         break
//     }
//     case "spanish":{
//         console.log("2nd place in number of native speakers")
//         break
//     }
//     case "English":{
//         console.log("3rd place")
//         break
//     }
//     case "hindi":{
//         console.log("Number 4")
//         break
//     }
//     case "arabic":{
//         console.log("5th most spoken language")
//         break
//     }
//     default:{
//         console.log("Great language too")
//     }
// }
// // LECTURE: The Conditional (Ternary) Operator
// // 1. If your country's population is greater than 33 million, use the ternary operator 
// // to log a string like this to the console: 'Portugal's population is above average'. 
// // Otherwise, simply log 'Portugal's population is below average'. Notice how only
// // one word changes between these two sentences!
// let populationOfPak = 231.4
// populationOfPak > 33 ? console.log(`Pakistan's population is above average`) : console.log(`Pakistan's population is below average`)
// // 2. After checking the result, change the population temporarily to 13 and then to 
// // 130. See the different results, and set the population back to original
// populationOfPak = 13
// populationOfPak > 33 ? console.log(`Pakistan's population is above average`) : console.log(`Pakistan's population is below average`)

// populationOfPak = 130
// populationOfPak > 33 ? console.log(`Pakistan's population is above average`) : console.log(`Pakistan's population is below average`)

