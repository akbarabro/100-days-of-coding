"use strict";
// Question 46 function in array
Object.defineProperty(exports, "__esModule", { value: true });
let arr = {
    name: "Tecno",
    model: "Spark 20",
    year: 2023,
    fun: () => {
        console.log(`I have ${arr.name} mobile which model is ${arr.model} ${arr.year}`);
    }
};
arr.fun();
// Question 47 advanced array destructuring
let arr_orignal = [{ make: "Tecno", model: "Tecno Spark 20", year: 2023 },
    { make: "Infinix", model: "Hot 10", year: 2022 },
    { make: "Apple", model: "Iphone 16", year: 2024 }
];
let [arr1, arr2, arr3] = arr_orignal;
console.log(arr1);
console.log(arr2);
console.log(arr3);
// Question 48 Combining Arrays
let list1 = [5, 4, 3, 2, 1];
let list2 = [10, 9, 8, 7, 6];
let Combining_list = [...list1, ...list2].sort((a, b) => a - b);
console.log(Combining_list);
// 2 
let name_list1 = ["Akbar", "Raza", "Ahmed", "Bakir"];
let name_list2 = ["Salman", "Gulsher", "Rashid", "Bakir"];
let Combining_list1 = [...name_list1, ...name_list2].sort((a, b) => a.localeCompare(b));
for (let name of name_list1) {
    if (name_list2.includes(name)) {
        console.log(`${name} is same in both arrays`);
    }
}
console.log(Combining_list1);
