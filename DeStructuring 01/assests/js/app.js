// let a, b ;
// [a,b]= [34,564];
// console.log(a+b)

// [a,b.c,d] = [1,2,3,4,5,6,7,8]
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// dont use long prosess


// ({a,b,c}= {a:34, b:35 ,c:67 , d: 88, e:34})
// console.log (a,b,c,)

// ...

// DeStructuring right method

//object DeStructuring
// let laptop = {
//     model: "HP" ,
// year: 2022,
// Gender: "male",
// net:1233,
// }
// // console.log(`my system is ${laptop.model}
// //  and my manu MYear is ${laptop.year} my laptop gender 
// //  is ${laptop.gender})

// let {model,year,Gender,net} = laptop

// console.log(`my system is ${model}
// and  my manu  year is ${year} my laptop Gender
// is ${Gender}
// `) 
   


// Object

// let Profile = {
//     name: "shazia" ,
// dob: 1998,
// Qualification: "Graduation",
// contect:123345678945,
// hobbies:{ 
//     first:"cooking",
//     second:"Travling",
//     third:"shopping",
// }
// }


// let { name
//     ,dob,Qualification,contect,hobbies} = Profile
// console.log(name,dob,Qualification,contect,hobbies.second);

// Array


const myprogLang = ['js','php','c++',
 'paython', 
'java','js','php','c++',
 'paython', 'java'
,'js','php','c++', 'paython',
 'java','js','php','c++', 'paython', 
 'java',
'js','php','c++', 'paython', 'java',
'js','php',
'c++', 'paython', 'java'
,'js','php','c++', 'paython', 
'java','js','php','c++', 'paython',
 'java'
,'js','php','c++', 'paython', 
'java','js','php','c++', 'paython',
 'java'];

// let top1 =myprogLang[0];
// let top2 =myprogLang[1];
// let top3 =myprogLang[2];

// let[top1,top2,top3,top4,top5] = myprogLang;
// console.log (`my first fav lang is ${top1} and 
// least fav lang is ${top5}`)

console.log(myprogLang.length);
let [top1,,,,top5]= myprogLang
console.log(`my first fav lang is ${top1} and 
least fav lang is ${top5}`)
