/* const date = new Date()
const year = date.getFullYear();

const jane = {
    firstName: "Jane",
    lastName: "La Duca",
    graduated: false,
    DOB: 2008,
    siblings: ["Katie", "Snake"],
    age: function(){
        return year - this.DOB;
    },
};

console.log(jane.age()); */




/* const friends = ["ryan", "aki", "david", "elie"];

const ryan = {
    name: "ryan",
    sleep: "none",
    bedwars: "pro",
    ethnicity: "fuzhounese chinese",
    likes: "fumo",
}

const aki = {
    name: "aki",
    sleep: "none",
    bedwars: "doesn't play rblx :(",
    ethnicity: "japanese",
    likes: "milsurp",
}

const david = {
    name: "david",
    sleep: "actually gets more than 8 hours every night",
    bedwars: ":/",
    ethnicity: "fuzhounese chinese",
    likes: "bedwars",
}

const elie = {
    name: "elie",
    sleep: "none",
    bedwars: "pro",
    ethnicity: "taiwanese korean",
    likes: "piano",
}


friends.forEach(printNames);

function printNames() {
    console.log(friends.name);
}
 */



/* const friends = [

    {
        name: "ryan",
        sleep: "none",
        bedwars: "pro",
        ethnicity: "fuzhounese chinese",
        likes: "fumo",
    },
    
    {
        name: "aki",
        sleep: "none",
        bedwars: "doesn't play rblx :(",
        ethnicity: "japanese",
        likes: "milsurp",
    },
    
    {
        name: "david",
        sleep: "actually gets more than 8 hours every night",
        bedwars: ":/",
        ethnicity: "fuzhounese chinese",
        likes: "bedwars",
    },
    
    {
        name: "elie",
        sleep: "none",
        bedwars: "pro",
        ethnicity: "taiwanese korean",
        likes: "piano",
    }
    ];
    
    function printNames() {
        console.log(friends.name);
    }
    
    friends.forEach(printNames);
    
 */

//maybe make name an object in itself???!

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//index starts at 0
//console.log(numbers[numbers.length -1]);
//foreach is a for Loop
//arrow function ()=> auto returns output, this keyword points global
numbers.forEach((number) => console.log(number)); */


/* const graduated = students.filter((student)=> student.graduated !== true);
console.log(current); //filters out all the student who have NOT graduated */

const friends = [
    {
        name: "ryan", 
        likes: ["fumos", "arknights", "amagi brilliant park"],
        sleep: true,
        bedwars: "pro",
        ethnicity: "fuzhounese chinese",
    },
    {
        name: "elie", 
        likes: ["piano", "guitar", "food"],
        sleep: false,
        bedwars: "pro",
        ethnicity: "taiwanese korean",
    },
    {
        name: "david", 
        likes: ["bedwars", "bullying children", "science"],
        sleep: true,
        bedwars: ":/",
        ethnicity: "fuzhounese chinese",
    },
    {
        name: "aki", 
        likes: ["milsurp", "tanks", "akiyama yukari"],
        sleep: false,
        bedwars: "doesn't play rblx :(",
        ethnicity: "japanese",
    }
]
  
friends.forEach((person) => console.log(person.name));

friends.forEach((person) => console.log(person.likes));
 

const sleep = friends.filter((student)=> student.sleep !== true);
console.log(friends); 
