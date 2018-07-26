// rewrite in async

// let sum = calculateSum(2,6);
// console.log(sum);
async function sum(x,y){
    return Promise.resolve(2+6)
}
sum();



// let results = $.getJSON('http://myapi.com');
// showResults(results);
async function showResults(){
    let results = $.getJSON('http://myapi.com');
    return Promise.resolve(results)
}
showResults().catch(alert);

// let sum = calculateSum(2,6);
// if(sum>8) {
//     console.log('larger than 8')
// }
async function sum(x,y){
    return Promise.resolve(2+6);
     if(sum>8) {
           console.log('larger than 8')}
    
}
sum();
let data = $.getJSON('http://myapi.com');
data=data.map(function(x){ return
    x*8;

})
writeDataToFile(data);
