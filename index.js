// let a = 4;
// let b = -4;
// let c = -3;
// let d = b * b - 4 * a * c;
// let x1 = (-b + Math.sqrt(d)) / (2 * a);
// let x2 = (-b - Math.sqrt(d)) / (2 * a);
// console.log("x1:", x1);
// console.log("x2:", x2);

// let age = 2;
// let tax = 20000;
// let message;
// if ((age >= 21, tax >= 20000)) {
//   message = "orj bolno";
// } else if ((age < 21, tax <= 19900)) {
//   message = "orj bolohgui";
// }
// console.log(message);

// let dun = 90;
// switch (true) {
//   case 90 <= dun && dun <= 100:
//     console.log("A");
//     break;
//   case 80 <= dun && dun < 89:
//     console.log("B");
//     break;
//   case 70 <= dun && dun < 79:
//     console.log("C");
//     break;
//     s;
//   case 60 <= dun && dun < 69:
//     console.log("D");
//     break;
//   case 59 > dun:
//     console.log("F");
//     break;
//   case 100 < dun:
//     console.log("aldaati dun");
//     break;
// }

// const num = 129;
// if (num < 2) {
//   console.log(false);
// } else if (num === 2 || num === 3 || num === 5 || num === 7) {
//   console.log(true);
// } else if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
//   console.log(false);
// } else {
//   console.log(true);
// }

// let userbalance = [1000, 2000, 2500, 400000, 500000];
// let i = 0;
// while (i < userbalance.length) {
//   userbalance[i] *= 1.15;
//   i++;
// }
// console.log(userbalance);

// let I = 0;
// while (I <= 10) {
//   console.log(I);
//   I++;
// }

// for (let i = 2; i <= 10; i = i + 5) {
//   if (i === 2 || i === 3 || i === 5 || i === 7) {
//     console.log(i);
//   } else if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
//   } else {
//     console.log(i);
//   }
// }

// let sum = 0;
// for (let i = 0; i <= 100; i = i + 2) {
//   if (i % 2 === 0) {
//     console.log(i);
//     sum = sum + i;
//   }
// }
// console.log(sum);

// let num = 2;
// let zereg = 7;
// console.log(Math.pow(num, zereg));

// let pal = 1001;
// let reversePal = "";
// pal = pal.toString();

// for (let i = pal.length - 1; i >= 0; i--) {
//   reversePal = reversePal + pal[i];
// }
// if (reversePal == pal) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let i = 0;
// while (i < a.length) {
//   console.log(a[i]);
//   i++;
// }

// let array = [1, 2, , 3, 4, 5, 6, 7, 8, 9, 10];
// let temp = array[array.length - 1];

// for (let index = array.length; (index = 0); index--) {
//   array[index + 1] = array[index];
// }
// array[0] = temp;
// console.log(array);

// let array = [1, 2, 3, 4, 5];
// let str = "";
// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j <= i; j++) {
//     str = str + array[j];
//   }
//   console.log(str);
//   str = "";
// }

// function reverseTriangle(height) {
//   for (let i = height; i >= 1; i--) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += j + " ";
//     }
//     console.log(row);
//   }
// }
// reverseTriangle(5);

// function greet() {
//   console.log("Hello there!");
// }
// greet();

// function test(array) {
//   for (let i = 0; i <= array - 1; i++);
//   let num = "1,2,3,4,5";
//   console.log(i);
// }
// test(5);

// let array = [1, 2, 3, 4, 5];
// function square(array) {
//   for (let i = 0; i <= 5; i++);
//   {
//     array = array + i;

//     console.log(array);
//   }
// }

// function test(array) {
//   let a = [1, 2, 3, 4, 5];
//   let sum = 0;
//   let result;
//   for (let i = 0; i < array.length; i++) {
//     sum = sum + array[i];
//   }
//   result = sum / array.length;
//   return result;
// }
// console.log(sum);

// const number = [12];
// let nextterm;
// let n1 = 0;
// let n2 = 1;
// for (let i = 0; i < number; i++) {
//   console.log(n1);
//   nextterm = n1 + n2;
//   n1 = n2;
//   n2 = nextterm;
// }
// console.log(number);

// let nums = [2, 7, 11, 15];
// let target = 9;
// for (let i = 0; i < nums.length; i++) {
//   for (let j = i + 1; j < nums.length; j++) {
//     if (nums[i] + nums[j] === target) {
//       console.log(i, j);
//     }
//   }
// }

// let num = 12;
// let a = [0, 1];
// for (let i = 2; i < num; i++) {
//   a[i] = a[i - 1] + a[i - 2];
// }
// console.log(a);

// let nums = [3, 2, 4];
// let target = 6;
// for (let i = 0; i < nums.length - 1; i++) {
//   for (let j = 1; j < nums.length; j++) {
//     if (nums[i] + nums[j] === target) {
//       console.log(i, j);
//     }
//   }
// }

// let nums = [3, 3];
// let target = 6;
// for (let i = 0; i < nums.length - 1; i++) {
//   for (let j = 1; j < nums.length; j++) {
//     if (nums[i] + nums[j] === target) {
//       console.log(i, j);
//     }
//   }
// }

// let array = [1, 3, 2, 6];
// let sum;
// let maxvalue = Math.max(1, 3, 2, 6);
// let minvalue = Math.min(1, 3, 2, 6);
// sum = maxvalue + minvalue;
// console.log(sum);

let array = [21, 23, 43, 11, 15];
console.log(array.sort());
