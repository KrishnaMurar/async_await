function buyBike(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('Buy a RoyalEnfield')
        },2000)
    })
}

function plantoShimla(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('Plan to go to Shimla')
        },1000)
    })
}
function reachedShimla(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('Reached to Shimla')
        },2000)
    })
}
function bookaVilla(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('Book a Villa')
        },1000)
    })
}
function gotoAnywhere(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject('Error: Some wrong happens that was not Expected')
        },1000)
    })
}

async function fun(){
    const msg = await buyBike()
    console.log(msg)

    const msg1 = await plantoShimla()
    console.log(msg1)

    const msg2 = await reachedShimla()
    console.log(msg2)

    const msg3 = await bookaVilla()
    console.log(msg3)

    const msg4 = await gotoAnywhere()
    console.log(msg4)
}
fun()