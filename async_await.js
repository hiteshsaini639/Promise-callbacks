// //Promise
// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('ticket');
//     },3000);
// });

// const getPopcorn=promiseWifeBringingTicks.then((t)=>{
//     console.log('wife: i have the tics');
//     console.log('husband: we should go in');
//     console.log('wife: no i am hungry');
//     return new Promise((resolve,reject)=>resolve(`${t} popcorn`))
// });

// const getButter= getPopcorn.then((t)=>{
//     console.log('husband: i got some popcorn');
//     console.log('husband: we should go in');
//     console.log('wife: I need butter on my popcorn');
//     return new Promise((resolve,reject)=>{
//         resolve(`${t} butter`);
//     });
// });

// const getColdDrinks=getButter.then((t)=>{
//     console.log(`husband:i got some butter on popcorn`);
//     console.log('husband: we should go in');
//     console.log(`wife: i need colddrink also`);
//     return new Promise((resolve,reject)=>{
//         resolve(`${t} colddrinks`);
//     })
// });

// getColdDrinks.then((t)=>{
//     console.log(`husband: i got cold drinks, can we go now`);
//     console.log('wife: yes lets go');
//     console.log(`${t}`);
// })

// console.log('person4: shows ticket');
// console.log('person5: shows ticket');



//Asyn await
console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie =async ()=> {
    const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket');
        },3000);
    });
    const getPopcorn=new Promise((resolve,reject)=>resolve(`popcorn`));

    const addButter = new Promise((resolve,reject)=>{
            resolve(`butter`);
        });
    const getColdDrinks =new Promise((resolve,reject)=>resolve('coldrinks'));

let ticket=await promiseWifeBringingTicks;

console.log(`wife: i have the ${ticket}`);
console.log('husband: we should go in');
console.log('wife: no i am hungry');

let popcorn=await getPopcorn;

console.log(`husband: i got some ${popcorn}`);
console.log('husband: we should go in');
console.log('wife: I need butter on my popcorn');

let butter=await addButter;
console.log(`husband:i got some ${butter} on popcorn`);
console.log('husband: we should go in');
console.log(`wife: i need colddrink also`);

let colddrink=await getColdDrinks;
console.log(`husband: i got ${colddrink}, can we go now`);
console.log('wife: yes lets go');

return ticket;
};

preMovie().then((t)=>console.log(`person3: shows ${t}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');