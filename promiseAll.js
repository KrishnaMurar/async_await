console.log('person1: shows Ticket');
console.log('person1: shows Ticket');

const preMovie = async () => {
const promiseWifeBringingTicks = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('ticket');
    },3000)
});

const getPopcorn = new Promise((resolve,reject)=> resolve('popcorn'));
const getButter = new Promise((resolve,reject)=> resolve('Butter'));
const getColdDrink = new Promise((resolve,reject)=> resolve('Cold Drink'));

 let ticket = await promiseWifeBringingTicks;
   
 let [popcorn,Butter,ColdDrink] =await Promise.all([getPopcorn,getButter,getColdDrink])

 console.log(`${popcorn},${Butter},${ColdDrink}`);
 return ticket;
}

preMovie().then((m) => console.log(`Person3: shows ${m}`))
 console.log('Person4: shows ticket');
 console.log('Person5: shows ticket')