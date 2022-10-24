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
    console.log(`wife: i have the ${ticket} `);
    console.log('Husband: We should go in');
    console.log('wife: No, i am hungry');

 let Popcorn =  await getPopcorn;
    console.log(`husband: i got some ${Popcorn}`);
    console.log('Husband: we should go in');
    console.log('wife: I need butter on my popcorn');

  
 let Butter =await getButter;
    console.log(`husband: i got some ${Butter}`);
    console.log('Husband: we should go in');
    console.log('wife: I need Cold Drink ');


    let ColdDrink = await getColdDrink;
    console.log(`husband: i got some ${ColdDrink}`);
    console.log('Husband: we should go in');
    console.log('wife: lets go ');

    return ticket;
}

preMovie().then((m) => console.log(`Person3: shows ${m}`))
 console.log('Person4: shows ticket');
 console.log('Person5: shows ticket')