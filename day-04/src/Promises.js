//Promise
// const promise = new Promise((resolve,reject) => {
//     let success = true;
//     if(success){
//         resolve("Data Received");
//     }
//     else{
//         reject("Something went wrong");
//     }
// });
//Promise using then and catch
const promise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Data1 received");
    } else {
        reject("Something went wrong");
    }

});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

//Promise using async and await
const promise2 = new Promise((resolve, reject) => {
    let success = true;     
    if(success){
        resolve("Data2 received");
    }   
    else{   
        reject("Something went wrong");
    }   
});
async function fetchData() {
    const result = await promise2;
    console.log(result);
}
fetchData();
//Promise using async and await 
const dataPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data received");
    },2000);
});
async function getData() {

    console.log("1");

    const result = await dataPromise;

    console.log("2");

}
console.log("3");
getData();
console.log("4");
//Promise using async and await with try and catch
const promise3 = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Data3 received");
    }
    else {
        reject("Something went wrong");
    }
});

promise3
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
