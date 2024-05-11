"use strict";
// 45 Questions
Object.defineProperty(exports, "__esModule", { value: true });
// 1 
// All softwares are installed
// 2 
let message_to_friend = "HI Raza , would you like to learn some TypeScript";
console.log(message_to_friend);
// 3  lowercase, uppercase, and titlecase
let person_name = "ghulam akbar";
let lowerCase = person_name.toLowerCase;
let UpperCase = person_name.toUpperCase;
let TitileCase = person_name.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
});
console.log("lowerCase : ", lowerCase);
console.log("upperCase : ", UpperCase);
console.log("titleCase : ", TitileCase);
// 4 
let Famous_quote = "Mother Teresa once said,: " + "Spread love everywhere you go. Let no one ever come to you without leaving happier.";
console.log(Famous_quote);
// 5
let Famous_quote2 = "Charlie Chaplin once said,: " + "Simplicity is a difficult thing to achieve.";
console.log(Famous_quote2);
// 6
let WhiteSpace = "\tGhulam Akbar\n";
console.log(WhiteSpace);
let strippedName = WhiteSpace.trim();
console.log(strippedName);
// 7 & 8
console.log(2 + 6);
console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);
// 9
let MyFavoriteNumber = 8;
console.log(`My Favorite Number Is : ${MyFavoriteNumber}`);
// 10
// Akbar Abro
// 14-04-2024
/*let my_name = "Ghulam Akbar"
console.log(my_name)*/
// 11
let friends_list = ["Ali Raza", "Ahmed", "Bakir"];
console.log(friends_list);
// 12
friends_list.forEach(function (value) {
    console.log(`Hi ${value}`);
});
// 13
let transport = ["Bike", "Car", "Bus"];
console.log(`I have an Honda ${transport[0]}`);
console.log(`But I don't have ${transport[1]}`);
console.log(`I go to work through the ${transport[2]}`);
// 14
let guest_list = ["Uncle Nisar", "Chacha Ijaz", "Chacha Barkat"];
guest_list.forEach((value) => {
    console.log(`Salam ${value} I have arranged a feast for you on Monday`);
});
// 15 
guest_list.splice(2);
guest_list.push("Rashid Bhai");
guest_list.forEach((value) => {
    console.log(`Salam ${value} I have arranged a feast for you on Monday`);
});
// 16
guest_list.unshift("Raza");
guest_list.splice(2, 0, "Bakir");
guest_list.push("Akbar");
console.log(`Salam ${guest_list[0]} I have arranged a feast for you on Monday`);
console.log(`Salam ${guest_list[1]} I have arranged a feast for you on Monday`);
console.log(`Salam ${guest_list[2]} I have arranged a feast for you on Monday`);
console.log(`Salam ${guest_list[3]} I have arranged a feast for you on Monday`);
console.log(`Salam ${guest_list[4]} I have arranged a feast for you on Monday`);
console.log(`Salam ${guest_list[5]} I have arranged a feast for you on Monday`);
// 17
guest_list.pop();
guest_list.shift();
guest_list.pop();
guest_list.shift();
guest_list.shift();
guest_list.push("Uncle Nisar");
console.log(`Salam ${guest_list[0]} I have arranged a feast for you on Sunday`);
console.log(`Salam ${guest_list[1]} I have arranged a feast for you on Sunday`);
console.log(guest_list);
// 18
let favorite_places = ["Skardu", "Kashmir", "Naraan", "Muree", "Islamabad"];
console.log(favorite_places);
let sorted_places = [...favorite_places].sort();
console.log(sorted_places);
let reverse_places = [...sorted_places].toReversed();
console.log(reverse_places);
// 19
console.log(`There are ${guest_list.length} guests`);
// 20
let countries_arrey = ["Pakistan", "Iran", "Iraq"];
console.log(countries_arrey);
let object1 = {
    name: "Laptop",
    category: "Electronic",
    price: 2000
};
let object2 = {
    name: "Smart Watch",
    category: "Electronic",
    price: 600
};
let object3 = {
    name: "Sneaker",
    category: "Clothing",
    price: 200
};
let object4 = [object1, object2, object3];
console.log(object4);
// 22
let array_index = ["Karachi", "Islamabad", "Lahor", "Larkana"];
console.log(array_index[2]);
// 23
let x = 10;
let y = 5;
console.log("Is x equal 10 ? I predict True.");
console.log(x == 10);
console.log("Is x strictly equal 10 ? I predict True.");
console.log(x === 10);
console.log("Is y strictly equal 5 ? I predict True.");
console.log(y === 5);
console.log("Is y greater than 4 ? I predict True.");
console.log(y > 4);
console.log("Is 12 greater than x ? I predict True.");
console.log(x < 12);
console.log("Is x equal 5 ? I predict false.");
console.log(x == 5);
console.log("Is y equal 10 ? I predict false.");
console.log(y == 10);
console.log("Is 10 greater than x ? I predict false.");
console.log(x < 10);
console.log("Is y greater than or equal 9 ? I predict false.");
console.log(y >= 9);
console.log("Is x greater than or equal 11 ? I predict false.");
console.log(x >= 11);
// 24
let a = 10;
let b = 5;
console.log("Is a equal 10 and b equal to 5 ? I predict True.");
console.log((a === 10) && (b === 5));
console.log("Is a equal 5 or b equal to 5 ? I predict True.");
console.log((a === 5) || (b === 5));
console.log("Is a equal 10 or b equal to 666 ? I predict True.");
console.log((a === 10) || (b === 666));
console.log("Is a equal 10 or b equal to 5 ? I predict True.");
console.log((a == 10) && (b == 5));
console.log("Is a notequal 55 or b notequal to 110 ? I predict True.");
console.log((a !== 55) && (b !== 110));
let name1 = "Akbar";
let name2 = "Ahmed";
console.log("Is name1 equal akbar and name2 equal to ahmed ? I predict false.");
console.log((name1 === "akbar") && (name2 === "ahmed"));
console.log("Is name1 equal Akbar or name2 equal to ahmed ? I predict true.");
console.log((name1 === "Akbar") || (name2 === "ahmed"));
console.log("Is name1 equal raza or name2 equal to Ahmed ? I predict true.");
console.log((name1 === "raza") || (name2 === "Ahmed"));
console.log("Is name1 notequal raza or name2 notequal to Ahmed ? I predict true.");
console.log((name1 !== "raza") || (name2 !== "Ahmed"));
console.log("Is a graterthen equal 5 or a equal to 5 ? I predict True.");
console.log((a >= 5) || (a == 5));
// 25
let alien_color = ["green", "yellow", "red"];
if (alien_color[0] === "green") {
    console.log("player just earned 5 points");
}
// 26
if (alien_color[0] === "green") {
    console.log("you earned 5 points for shooting the alien");
}
else {
    console.log("you earned 10 points");
}
// 27
if (alien_color[0] === "green") {
    console.log("you earned 5 points for shooting the alien");
}
if (alien_color[1] === "yellow") {
    console.log("you earned 10 points for shooting the alien");
}
if (alien_color[2] === "red") {
    console.log("you earned 15 points for shooting the alien");
}
// 28
let person_age = 30;
if (person_age === 2) {
    console.log("the person is a baby");
}
if (person_age === 2 && 2 < 4) {
    console.log("the person is a toddler");
}
if (person_age === 4 && 4 < 13) {
    console.log("the person is a kid");
}
if (person_age === 13 && 13 < 20) {
    console.log("the person is a teenager");
}
if (person_age === 20 && 20 < 65) {
    console.log("the person is a adult");
}
if (person_age >= 65) {
    console.log("the person is a elder");
}
// 29 
let favorite_fruits = ["Apple", "Watter Melon", "Grapes"];
if (favorite_fruits.includes("Apple")) {
    console.log("I also love it Apple");
}
if (favorite_fruits.includes("Watter Melon")) {
    console.log("I also love it Water Melon");
}
if (favorite_fruits.includes("Grapes")) {
    console.log("I also love it Grapes");
}
if (favorite_fruits.includes("Banana")) {
    console.log("You realy like it !");
}
if (favorite_fruits.includes("Mango")) {
    console.log("You realy like it !");
}
// 30
let usernames = ["Admin", "Ahmed", "Ali", "Bakir"];
for (let name of usernames) {
    if (name === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${name}, thank you for logging in again.`);
    }
}
// 31
let usernames1 = [];
if (usernames1.length === 0) {
    console.log("We need to find some users!");
}
// 32
let current_user = ["Muhammad", "Ali", "Bakir", "Akbar", "Jaffer"];
let new_user = ["Ahmed", "Rashid", "Bakir", "Sammad", "Akbar"];
let check_user = (user_names) => {
    return current_user.some(user => user.toLowerCase() === user_names.toLocaleLowerCase());
};
new_user.forEach(user_names => {
    if (check_user(user_names)) {
        console.log(`sorry ${user_names} is already taken. Please enter a new username`);
    }
    else {
        console.log(`${user_names} is available`);
    }
});
// 33
let Ordinal_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Ordinal_numbers.forEach((number) => {
    if (number === 1) {
        console.log(`${number}st`);
    }
    else if (number === 2) {
        console.log(`${number}nd`);
    }
    else if (number === 3) {
        console.log(`${number}rd`);
    }
    else if (number === 4) {
        console.log(`${number}rd`);
    }
    else if (number === 5) {
        console.log(`${number}rd`);
    }
    else if (number === 6) {
        console.log(`${number}rd`);
    }
    else if (number === 7) {
        console.log(`${number}rd`);
    }
    else if (number === 8) {
        console.log(`${number}rd`);
    }
    else if (number === 9) {
        console.log(`${number}rd`);
    }
});
// 34
let pizza = ["Margherita Pizza", "Pepperoni Pizza", "Hawaiian Pizza"];
for (let i = 0; i < pizza.length; i++) {
    console.log(pizza[i]);
}
for (let i = 0; i < pizza.length; i++) {
    console.log(`I like ${pizza[i]}`);
}
console.log("I really like Pizza");
// 35
let animals = ["Lion", "Dog", "Cat"];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
for (let i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i]} would make a great pet`);
}
console.log("Any of these animals would make a great pet!");
// 36
function make_shirt(size, message) {
    console.log(`size : ${size}\nmessage : ${message}`);
}
make_shirt("Large", "Love the life");
// 37 
function make_shirts(size, message) {
    if (size === "large" && "Meduim") {
        console.log(`size : ${size}\nmessage : Ilove TypeScript`);
    }
    else {
        console.log(`size : ${size}\nmessage : ${message}`);
    }
}
make_shirts("large");
// 38
let discribe_city = (city_name, country_name) => {
    console.log(`${city_name} located in ${country_name}`);
    if (country_name === undefined) {
        console.log(`${city_name} located in Pakistan`);
    }
};
discribe_city("Karachi");
discribe_city("Larkana");
discribe_city("Meccah", "Saudia Arabia");
// 39
function city_country(City, Country) {
    return City + " , " + Country;
}
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Larkana", "Pakistan"));
console.log(city_country("Karbala", "Iraq"));
// 40
let make_album = (artist_name, album_title, tracks) => {
    return { artist_name, album_title, tracks };
};
console.log(make_album("Akbar", "Abro", 50));
// 41
const magician_names = ["David Copperfield", "Dynamo", "Criss Angel"];
let show_magicians = () => {
    return magician_names;
};
console.log(show_magicians());
// 42
let make_graet = () => {
    magician_names.forEach(function (value) {
        console.log(`The Great ${value}`);
    });
};
make_graet();
// 43 
const new_magicians = [...magician_names];
let show_magicians_new = () => {
    return new_magicians && show_magicians();
};
// 44
let make_sandwiches = (ingredients) => {
    let sandwich = ingredients.join(", ");
    return `Here's your Sandwich with ${sandwich}. Enjoy`;
};
let ingredients_sandwich = ["Tomato", "Egg", "Butter"];
console.log(make_sandwiches(ingredients_sandwich));
let car_creator = (manufacturer, model, ...extras) => {
    let car = { manufacturer, model, extras };
    extras.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
};
let car_detail = car_creator("Honda", "CD70", ["color", "Red"]);
console.log(car_detail);
