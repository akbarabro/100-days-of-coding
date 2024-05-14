"use strict";
// Q-49 Function with rest parameters
let hobby = (...all) => {
    all.forEach((hobbies) => {
        console.log(`I enjoy that ${hobbies}`);
    });
};
hobby("Painting", "Photography", "Gardening");
// Q-50 Multilines Templete Literals 
let success = `Here are lines on the secret of success:
1- Effort and determination pave the path to success.
2- Resilience in adversity defines true achievement.
3- Each step forward, a testament to unwavering ambition.`;
console.log(success);
// Q-51 Refactoring To Arrow Function 
function calculate_area(hight, width) {
    return hight * width;
}
let calculate_area_arrow = (hight, width) => hight * width;
console.log(calculate_area(4, 5));
console.log(calculate_area_arrow(4, 5));
