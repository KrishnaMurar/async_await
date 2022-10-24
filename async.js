console.log('person1: shows Ticket');
console.log('person1: shows Ticket');

const promiseWifeBringingTicks = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('ticket');
    },3000)
});

 const getPopcorn = promiseWifeBringingTicks.then((t) => {
    console.log('wife: i have the tics');
    console.log('Husband: We should go in');
    console.log('wife: No, i am hungry');

    return new Promise((resolve,reject) => resolve(`${t} popcorn`))
 });

 const getButter = getPopcorn.then((t) => {
    console.log('husband: i got some popcorn');
    console.log('Husband: we should go in');
    console.log('wife: I need butter on my popcorn');

    return new Promise((resolve,reject) => resolve(`${t} butter`))
 });

 const getColdDrink = getButter.then((t) => {
    console.log('husband: i got some Butter');
    console.log('Husband: we should go in');
    console.log('wife: I need Cold Drink ');

    return new Promise((resolve,reject) => resolve(`${t} Cold Drink`))
 });

 getColdDrink.then((t)=> console.log(t));

 console.log('Person4: shows ticket');
 console.log('Person5: shows ticket')